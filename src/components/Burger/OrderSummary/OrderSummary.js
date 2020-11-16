import React, { Component } from 'react';
import Auxillary from '../../../hoc/Auxiliary/auxilliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component{
   componentDidUpdate(){
       console.log("OrderSummary Update")
   }
    render() {
    const ingredientSummary = Object.keys(this.props.ingredients)
        .map( igKey => {
        return (
        <li key={igKey}> 
            <span style={{textTransform: 'capitalize'}}> {igKey}</span> 
            : {this.props.ingredients[igKey]} 
        </li>);
        })
        return (
    <Auxillary>
        <h3>Your Order</h3>
        <p>A delicicous Burger with the following ingredients:</p>
        <ul>
               {ingredientSummary}
        </ul>
        <p><strong>Total Price ₹{this.props.totle.toFixed(2)}</strong></p>
   <p>Continue to checkout? </p>
        <Button btnType="Danger" clicked={this.props.purchaseCancel}  >CANCEL</Button>   
        <Button btnType="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>
        
    </Auxillary>
        )
    }
};
export default OrderSummary;