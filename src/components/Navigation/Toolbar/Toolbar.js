import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavItems from '../../Navigation/NavItems/NavItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) =>(
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.clicked} />
         <Logo height='80%'/>
        <nav className={classes.DekstopOnly}>
         <NavItems />
        </nav>
    </header>
);

export default toolbar;