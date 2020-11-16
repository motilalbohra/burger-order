import React, {Component} from 'react';
import classes from './BugerIngredient.module.css';
import PropType from 'prop-types';

class BugerIngredient extends Component{
     render(){
          let ingredient=null;
    switch(this.props.type){
        case('bread-bottom'):
           ingredient=<div className={classes.BreadBottom} ></div>;
           break;   
        case('bread-top'):
           ingredient=(
               <div className={classes.BreadTop} >
                       <div className={classes.Seeds1} ></div>
                       <div className={classes.Seeds2} ></div>
               </div>);
               break;
        case('thickPatty'):
            ingredient=<div className={classes.ThickPatty}></div>;
            break;
        case('cheese'):
             ingredient=<div className= {classes.Cheese}></div>
             break;
        case('salad'):
             ingredient=<div className={classes.Salad}></div>
             break;
        case('thinPatty'):
             ingredient=<div className={classes.ThinPatty}></div>
             break;
        default:
             ingredient = null;
    }
    return ingredient;
           
     }
}
BugerIngredient.propTypes={
     type:PropType.string.isRequired
}
    


export default BugerIngredient;