import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-order';


class Orders extends Component {
    state ={
        orders:[],
        loading:true
    }
    
    componentDidMount(){
        axios.get('/orders.json')
          .then(response=> {
              const fetchOrder= [];
              for(let key in response.data){
                   fetchOrder.push({
                       ...response.data[key],
                       id:key
                   })
              }
             this.setState({loading:false , orders: fetchOrder});
          })
          .catch(err =>
            this.setState({loading:false}))
    }
    render() { 
        return ( 
        <div>
          {this.state.orders.map(order => (
          <Order 
          key={order.id}
          ingredients={order.ingredients}
          price={+order.price}
          />
          ))}
        </div> 
        );
    }
}
 
export default Orders;