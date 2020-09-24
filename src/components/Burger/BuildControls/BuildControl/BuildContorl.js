import React from 'react';
import classes from './BuildControl.module.css';

const buildControl = (props)=>(
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <div className={classes.More} onClick={props.added}>More</div>
        <div className={classes.Less} disabled={props.disabled} onClick={props.remove}>Less</div>
    </div>
);

export default buildControl;