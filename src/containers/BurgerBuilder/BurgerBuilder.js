import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGRIDIENT_PRICES={
    salad:0.3,
    meat:1.3,
    bacon:0.7,
    cheese:0.5
}
class BurgerBulder extends Component{
    state={
        
        ingridients: {
            salad:0,
            meat:0,
            cheese:0,
            bacon:0
        },
        totalprice:4,
        purchasable: false,
        purchasing:false
    }

    purchaseContinueHandler =() =>{
        alert("continue");
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

        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.puchaseCancelHandler}>
                    <OrderSummary 
                     ingridient={this.state.ingridients}
                     continue={this.purchaseContinueHandler}
                     cancel={this.puchaseCancelHandler}
                     price={this.state.totalprice}/>
                </Modal>
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
    }
}

export default BurgerBulder;