import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.module.css';
import axios from '../../../axios-order';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import { connect } from 'react-redux';

class ContactData extends Component {
   
    state = {  
        orderForm: {
        name: {
            elementType:'input',
            elementConfig:{
                type: 'text',
                placeholder:'Your Name'
            },
            value:'',
            validation:{
                required:true,
                valid:false,
                touched:false
            }
        },
        email: {
            elementType:'input',
            elementConfig:{
                type: 'text',
                placeholder:'Email'
            },
            value:'',
            validation:{
                required:true,
                valid:false,
                touched:false
            }
        },
        street: {
            elementType:'input',
            elementConfig:{
                type: 'text',
                placeholder:'Street'
            },
            value:'',
            validation:{
                required:true,
                valid:false,
                touched:false
            }
        }
        ,
        postalCode: {
            elementType:'input',
            elementConfig:{
                type: 'text',
                placeholder:'Zip Code'
            },
            value:'',
            validation:{
                required:true,
                valid:false,
                touched:false,
                minLength:6,
                maxLength:6
            }
        }
        ,
   },
        loading:false
    }

orderHandler = (event) => {
           event.preventDefault();
        this.setState({loading:true})
        const formData={}
        for(let formDataIdentifier in this.state.orderForm){
            formData[formDataIdentifier]= this.state.orderForm[formDataIdentifier].value;
        }
        const order ={
            ingredients:this.props.ings ,
            price:this.props.price,
            order:formData
        }
        axios.post('/orders.json',order)
        .then(response => {
            this.setState({loading:false })
            this.props.history.push('/')
        })
        .catch(error => {this.setState({loading:false})}
        );
    }



    checkValidation(value,rules){
        let isValid=true;
        if(rules.required){
           isValid= value.trim() !== ''&& isValid;
        }
        if(rules.minLength){
            isValid=value.length>= rules.minLength&& isValid;
        }
        if(rules.maxLength){
            isValid=value.length<=rules.maxLength&& isValid;
        }
        return isValid;
    }



    inputChangeHandler=(event,inputIdentifier) =>{
             const updatedOrderForm ={
                 ...this.state.orderForm
             }  
             const updatedOrderEle ={
                 ...updatedOrderForm[inputIdentifier]
             };
             updatedOrderEle.value=event.target.value;
             updatedOrderEle.valid=this.checkValidation(updatedOrderEle.value,updatedOrderEle.validation);
             updatedOrderEle.touched=true;
             console.log(updatedOrderEle)
             updatedOrderForm[inputIdentifier]=updatedOrderEle;
             this.setState({orderForm:updatedOrderForm})        
    }



    render() { 
        const formElementArray=[];
        for(let key in this.state.orderForm){
            formElementArray.push({
                id:key,
                config:this.state.orderForm[key]
            });
            

        }
        let form =(               
            <form onSubmit={this.orderHandler}>
           
            {formElementArray.map(formElement =>(
            <Input 
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                changed={(event)=>this.inputChangeHandler(event,formElement.id)}
                touch={formElement.config.touched}
                invalid={!formElement.config.valid}/>
            ))}
            <Button btnType='Success'  >Order Now</Button>
        </form>)
        if(this.state.loading){
            form=<Spinner/>
        }
        return ( 
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Data</h4>
                {form}

            </div>
         );
    }
}
 
const mapStateToProps = state => {
    return{
        ings:state.ingredients,
        price: state.totlePrice
    }
}
export default connect(mapStateToProps)(ContactData);