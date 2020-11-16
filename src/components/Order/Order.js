import React from 'react';
import classes from './Order.module.css'

const order = (props)=>{
     const ingredients =[];
     for(let ingredientNam in props.ingredients){
         ingredients.push({
             name: ingredientNam,
             amount: props.ingredients[ingredientNam]
    })
     }
    const ingredientOut= ingredients.map(ig =>{
    return <span key={ig.name} 
                style={{
                    textTransform:'capitalize',
                    display:'inline-block',
                    margin:'0 8px',
                    border:'1px solid #ccc ',
                    padding:'5px'

                }}>{ig.name} ({ig.amount}) </span>
    }) 
return (
    <div className={classes.Order}>
             {ingredientOut}
           <p>Price is : {props.price.toFixed(2)   } </p>
    </div>
   )
};

    

    

export default order;