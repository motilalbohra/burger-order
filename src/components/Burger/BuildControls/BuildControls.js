import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl'

const controls= [   
    {label:'Salad' , type: 'salad'},
    {label:'ThinPatty' , type: 'thinPatty'},
    {label:'Cheese' , type: 'cheese'},
    {label:'ThickPatty' , type: 'thickPatty'}
]

const buildControls =(props) => (
    <div className={classes.BuildControls}>
        <p>Current price  <strong> ₹{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}
            added={()=> props.ingredientAdded(ctrl.type)} 
            removed={() => props.ingredientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]} />
        ))}
         <button 
         className={classes.OrderButton} 
         disabled={!props.purchasable}
         onClick={props.ordered}>ORDER NOW</button>
    </div>
);
export default buildControls;