import React from 'react';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';

import Home from './Home';
import ProductDetail from './ProductDetail';

const RouteApp = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/detail" component={ProductDetail} />
      </Switch>
    </Router>
  );
};

export default RouteApp;
