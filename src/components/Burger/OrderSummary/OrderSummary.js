import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component{
    componentDidUpdate(){
        console.log("order summary update")
    }

    render(){
        const ingridientSummary = Object.keys( this.props.ingridient )
        .map(igKey =>{
            return(
                <li key={igKey}>
                    <span style={{textTransform:"capitalize"}}>{igKey} </span> : {this.props.ingridient[igKey]}
                </li>
            );
        });
        return(
            <Aux>
                <h3 style={{margin:'0'}}>Your Order</h3>
                <p style={{margin:'0'}}>A delicious burger with following ingridients:</p>
                <ul>
                    {ingridientSummary}
                    Your total :{this.props.price.toFixed(2)}
                </ul>
                <p style={{margin:'0'}}>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.cancel}>Cancel</Button>
                <Button btnType="Success" clicked={this.props.continue}> Continue</Button>
            </Aux>
        );
    }
}
  

export default OrderSummary;