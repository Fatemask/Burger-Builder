import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildContorl'

const controls =[
    { label:'Salad', type:'salad'},
    { label:'Meat', type:'meat'},
    { label:'Cheese', type:'cheese'},
    { label:'Bacon', type:'bacon'}
];

const buildControls = (props)=> (
   <div className={classes.BuildControls}>
       <p>Current Price: <b>{props.price.toFixed(2)}</b></p>
       {controls.map(ctrl =>(
           <BuildControl key={ctrl.label} 
           label={ctrl.label}
           added={()=>props.ingAdded(ctrl.type)} 
           remove={()=>props.ingRemove(ctrl.type)}
           disabled={props.disabled[ctrl.type]} />
       ))}
   </div>
);

export default buildControls;