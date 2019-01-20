import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Products from './components/Products';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
import { products } from './mock-data';

class App extends Component {
  render() {
    return (
        <Router>
          <React.Fragment>
            <Route exact path="/" component={Products}/>
            <Route path="/cart/add/:id" component={Cart}/>
            <Route path={`/product/:id`} render={(props) => <ProductDetails products={products} {...props}/>}/>
          </React.Fragment>
        </Router>
       
    );
  }
}

export default App;