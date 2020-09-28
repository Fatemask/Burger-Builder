import React from 'react';
import classes from './NavItems.module.css'
import NavItem from './NavItem/NavItem';

const navItems = (props) =>(
    <ul className={classes.NavItems}>
       <NavItem link="/"
       active >
           BurgerBulider
       </NavItem>
       <NavItem link="/" >
           CheckOut
       </NavItem>
    </ul>
);

export default navItems;