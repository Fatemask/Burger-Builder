import React from 'react';
import classes from './Burger.module.css';
import BurgerIng from './BurgerIng/BurgerIng';

const burger = (props) =>{
let tarnsformedIngridients= Object.keys(props.ingridients)
    .map(igkey => {
        return [...Array(props.ingridients[igkey])].map((_,i) => {
            return <BurgerIng key={igkey + i} type={igkey} />;
        });
    })
    .reduce((arr,el)=>{
        return arr.concat(el)
    },[]);

    if(tarnsformedIngridients.length === 0){
        tarnsformedIngridients = <p>Plz add some ingridients !!!</p>;
    }

    return(
        <div className={classes.Burger}>
            <BurgerIng type="bread-top"/>
            {tarnsformedIngridients}
            <BurgerIng type="bread-bottom"/>
        </div>
    );
};

export default burger;