import React from 'react';
import burgerLogo from '../../assests/images/burger-logo.png';
import classes from './Logo.module.css';

const logo = (props) =>(
    <div className={classes.Logo} style={{height: props.height}}>
        {/* <img src={require('../../assests/images/burger-logo.png')} /> */}
        <img src={burgerLogo}/>
    </div>
);

export default logo;