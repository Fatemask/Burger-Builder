import React from 'react';
import Logo from '../../Logo/Logo';
import NavItems from '../../Navigation/NavItems/NavItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const sideDrawer = (props) =>{
    let attachedClasees=[classes.SideDrawer, classes.Close];
    if(props.open){
        attachedClasees=[classes.SideDrawer, classes.Open];
    }
    return(
        <Aux className={classes.SideDrawer}>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasees.join(" ")}>
                <Logo height="8%" style={{marginBottom:'32px'}}/ >
                <nav>
                    <NavItems/>
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;