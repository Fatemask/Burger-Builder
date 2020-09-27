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
       <h2>Welcome to Burger Builder :)</h2>
       <h3>A happy meal just awaiting for you <br/> Glad to see you !!</h3>
       <p style={{marginTop:"40px"} }> Current Price: <b>{props.price.toFixed(2)}</b></p>
       {controls.map(ctrl =>(
           <BuildControl key={ctrl.label} 
           label={ctrl.label}
           added={()=>props.ingAdded(ctrl.type)} 
           remove={()=>props.ingRemove(ctrl.type)}
           disable={props.disabled[ctrl.type]} />
       ))}
       <button 
       className={classes.OrderButton}
       disabled={!props.purchasable}
       onClick={props.ordered} >
           ORDER BUTTON
       </button>
   </div>
);

export default buildControls;