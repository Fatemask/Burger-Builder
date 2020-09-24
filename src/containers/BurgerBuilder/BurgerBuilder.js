import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'


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
        totalprice:4
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
                <Burger ingridients={this.state.ingridients} />
                <BuildControls 
                ingAdded={this.adddIngridientHandler}
                ingRemove ={this.removeIngridientHAndler}
                disabled = {disableInfo} 
                price = {this.state.totalprice}/>
            </Aux>
        );
    }
}

export default BurgerBulder;