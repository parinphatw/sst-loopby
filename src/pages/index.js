import React from 'react';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';

import Home from './Home';
import ProductDetail from './ProductDetail';
import Checkout from './Checkout';

const RouteApp = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/detail" component={ProductDetail} />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
    </Router>
  );
};

export default RouteApp;
