import React from 'react';
import Aux from '../../hoc/Aux';
import classes from "../layout/Layout.module.css";

const layout = (props) =>(
    <Aux>
        <div>Toolbar,Sidedriver,Backdrop</div>
        <main className={classes.context}> 
            {props.children}
        </main>
    </Aux>
);

export default layout;