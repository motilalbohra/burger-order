import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const checkoutSummary = (props) =>{
    return (
        <div className={classes.CheckoutSummary}> 
            <h1>Great Choice</h1>
            <div style={{width:'100%',height:'300px',margin:'auto' }}>
                 <Burger ingredients={props.ingredients}/>
                 <Button 
                     btnType="Danger"
                     clicked={props.checkoutCancel}> CANCEL</Button>
                 <Button 
                     btnType="Success"
                     clicked={props.orderPlaced}>PLACE ORDER</Button>
            </div>
        </div>
    )

};
export default checkoutSummary;