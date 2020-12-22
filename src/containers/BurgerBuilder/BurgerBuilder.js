import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGRIDIENT_PRICES={
    salad:0.3,
    meat:1.3,
    bacon:0.7,
    cheese:0.5
}
class BurgerBulder extends Component{
    state={
        
        ingridients: null,
        totalprice:4,
        purchasable: false,
        purchasing:false,
        loading:false,
        error:null
    }

    componentDidMount(){
        axios.get('https://burgerbuilder-e265e.firebaseio.com/ingridients.json')
        .then(response=>{
            this.setState({ingridients: response.data})
        })
        .catch(error=>{
            this.setState({error:true});
        });
    }

    purchaseContinueHandler =() =>{
        // alert("continue");
        this.setState({loading:true});
        const order={
            ingridients: this.state.ingridients,
            price: this.state.totalprice,
            customer:{
                name:"Stella Ruth",
                address:{
                    street:"riverdale high",
                    zipcode:"432581",
                    country:"Germany"
                },
                email:"exampleid@gmail.com"
            },
            deliveryMethod:"fastest"
        }
        axios.post('/orders.json', order)
        .then(this.setState({loading:false , purchasing: false}))
        .catch(this.setState({loading:false , purchasing: false}));
    }

    puchaseCancelHandler = () =>{
        this.setState({purchasing:false});
    }

    purchaseHandle=()=>{
        this.setState({purchasing:true});
    }

    updatePurchase=(ingridients)=>{
        const sum = Object.keys(ingridients)
        .map(igkey =>{
            return ingridients[igkey];
        })
        .reduce((sum,el)=>{
            return sum + el;
        },0);
        this.setState({purchasable: sum > 0});
    }

    adddIngridientHandler = (type) =>{
        const oldCount = this.state.ingridients[type];
        const updateCount = oldCount + 1;
        const updateIngridient = {
            ...this.state.ingridients
        }
        updateIngridient[type] = updateCount;
        const oldPrice = this.state.totalprice;
        const priceAddition = INGRIDIENT_PRICES[type];
        const newPrice = oldPrice + priceAddition;
        this.setState({totalprice : newPrice, ingridients:updateIngridient});       
        this.updatePurchase(updateIngridient);
    }

    removeIngridientHAndler = (type) =>{
        const oldCount = this.state.ingridients[type];
        if(oldCount<=0){
            return;
        }
        const updateCount = oldCount - 1;
        const updateIngridient = {
            ...this.state.ingridients
        }
        updateIngridient[type] = updateCount;
        const oldPrice = this.state.totalprice;
        const priceAddition = INGRIDIENT_PRICES[type];
        const newPrice = oldPrice - priceAddition;
        this.setState({totalprice : newPrice, ingridients:updateIngridient});       
        this.updatePurchase(updateIngridient);
    }


    render(){
        const disableInfo = {
            ...this.state.ingridients
        };
        for (let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0
        }
        //spinner 
        let orderSummary=null;

        //dynamic ingridients rendening
        let burger=this.state.error ? <p> ingridients can't be loaded </p> : <Spinner/>
        console.log(this.state.ingridients)
        if(this.state.ingridients){
            burger=(
                <Aux>
                    <Burger ingridients={this.state.ingridients} />
                    <BuildControls 
                    ingAdded={this.adddIngridientHandler}
                    ingRemove ={this.removeIngridientHAndler}
                    disabled = {disableInfo} 
                    price = {this.state.totalprice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandle}/>
                </Aux>
            );

            orderSummary=<OrderSummary 
                        ingridient={this.state.ingridients}
                        continue={this.purchaseContinueHandler}
                        cancel={this.puchaseCancelHandler}
                        price={this.state.totalprice}/>;

            if(this.state.loading){
                orderSummary=<Spinner/>;
            }
        }
     

        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.puchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBulder, axios);