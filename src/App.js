import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home.page';
import Products from './pages/Products.page';
import NotFound from './pages/NotFound.page'

import './doc.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
