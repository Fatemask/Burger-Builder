import React from 'react';
import classes from './Button.module.css';

const button = (props) =>(
    <button style={{padding:"0", margin:"0"}}
    className={[classes.Button, classes[props.btnType]].join(' ')}
    onClick={props.clicked} >
        {props.children}
    </button>
);

export default button;