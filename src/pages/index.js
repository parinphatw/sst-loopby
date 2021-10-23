import React from 'react';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';

import Home from './Home';
import ProductDetail from './ProductDetail';
import Checkout from './Checkout';
import SuccessCheckout from './SuccessCheckout';
import WomanCategory from './WomanCategory';

const RouteApp = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/category/woman" component={WomanCategory} />
        <Route exact path="/detail" component={ProductDetail} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/checkout/success" component={SuccessCheckout} />
      </Switch>
    </Router>
  );
};

export default RouteApp;
