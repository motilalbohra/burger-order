import React, { Component } from 'react';
import Auxillary from '../../hoc/Auxiliary/auxilliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-order';
import Spinner from '../../components/UI/Spinner/Spinner';
import { connect } from 'react-redux';
import * as actionType from '../../store/action';



class BurgerBuilder extends Component {
    state = { 
        purchase:false,
        loading:false
     }
    //  componentDidMount () {
    //      axios.get('https://react-burger-order-da9e6.firebaseio.com/ingredient.json')
    //           .then(response => {
    //               this.setState({ingredient:response.data})
    //           })
    //  }
     updatePurchasableState (ingredient) {
       
         const sum = Object.keys(ingredient)
         .map( igKey => {
             return ingredient[igKey];
         })
         .reduce((sum, el )=>{
             return sum+el;
         },0);
        return sum>0


     }

     purchaseHandler = () =>{
         this.setState({purchase: true})
     }
     purchaseCancelHandler =() =>{
         this.setState({purchase:false})
     }
     purchaseContinueHandler = () => {
                this.props.history.push('/checkout');
            }

    render() { 
        const disabledInfo ={
            ...this.props.ings
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key]<= 0
        }
        let orderSummary = null;

        let burger = <Spinner />
        if(this.props.ings){
            burger =(
                <Auxillary>
                    <Burger ingredients={this.props.ings} />
                    
               <BuildControls 
                    ingredientAdded={this.props.onIngredientAdded}
                    ingredientRemoved={this.props.onIngredientRemoved}
                    purchasable={this.updatePurchasableState(this.props.ings)}
                    disabled={disabledInfo}
                    price={this.props.price}
                    ordered={this.purchaseHandler} />
                </Auxillary>
               
            );
           orderSummary= (<OrderSummary  
        ingredients={this.props.ings}
             totle={this.props.price}
             purchaseCancel={this.purchaseCancelHandler}
             purchaseContinue={this.purchaseContinueHandler}
             />)
             if(this.state.loading){
                orderSummary=<Spinner />;
            }

        }
       
        return ( 
            <Auxillary>
                <Modal show={this.state.purchase}
                  modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal> 
                {burger}
               
            </Auxillary>
         );
    }
}
const mapStateTOProps = state =>{
    return {
         ings: state.ingredient,
         price: state.totlePrice
    };
};

const mapDispatchToProps= dispatch => {
    return {
        onIngredientAdded :  (ingName)=> dispatch({type:actionType.ADD_INGREDIENT,ingredientName:ingName}),
        onIngredientRemoved: (ingName)=> dispatch({type:actionType.REMOVE_INGREDIENT, ingredientName:ingName})
    }
}
 
export default connect(mapStateTOProps,mapDispatchToProps)(BurgerBuilder);