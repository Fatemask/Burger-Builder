import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) =>{
    const ingridientSummary = Object.keys( props.ingridient )
    .map(igKey =>{
        return(
            <li key={igKey}>
                <span style={{textTransform:"capitalize"}}>{igKey} </span> : {props.ingridient[igKey]}
            </li>
        );
    });

    return(
        <Aux>
            <h3 style={{margin:'0'}}>Your Order</h3>
            <p style={{margin:'0'}}>A delicious burger with following ingridients:</p>
            <ul>
                {ingridientSummary}
                 Your total :{props.price.toFixed(2)}
            </ul>
            <p style={{margin:'0'}}>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.cancel}>Cancel</Button>
            <Button btnType="Success" clicked={props.continue}> Continue</Button>
        </Aux>
    );
}

export default orderSummary;