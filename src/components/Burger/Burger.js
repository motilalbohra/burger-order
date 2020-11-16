import React from 'react';
import BugerIngredient from './BugerIngredient/BugerIngredient';
import classes from './Burger.module.css';


const burger = (props) => {
    let transfromedIngredients = Object.keys(props.ingredients)
    .map( igKey =>  {
        return [...Array(props.ingredients[igKey])].map((_,i)=>{
          return <BugerIngredient key={igKey+i} type={igKey} />
        });
    }).reduce((arr, el) =>{
        return arr.concat(el)
    },[]);
   
    if(transfromedIngredients.length===0){
       transfromedIngredients =<p>Please Start adding ingredients</p>
    }
    return (
        <div className={classes.Burger} >
            <BugerIngredient type='bread-top' />
            {transfromedIngredients}
            <BugerIngredient type='bread-bottom' />
        </div>
    )
};
export default burger;