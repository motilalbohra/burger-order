import React from 'react';
import Layout from './components/Layout';
import BurgerBuilder from './containters/BurgerBuilder/BurgerBuilder';
import Checkout from './containters/Checkout/Checkout'
import { Route } from 'react-router-dom';
import Orders from './containters/Orders/Orders';

function App() {

  return (
    <div >
      <Layout>
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/checkout" component={Checkout} />
        <Route path='/orders' component={Orders} />
        
      </Layout>
    </div>
  );
}

export default App;
