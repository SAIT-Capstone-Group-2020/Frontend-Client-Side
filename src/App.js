import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home.page';
import Products from './pages/Products.page';
import ProductDetail from './pages/ProductDetail.page';
import NotFound from './pages/NotFound.page'
import CheckoutSummary from './pages/CheckoutSummary.page';
import './doc.css';
import './kim.css';


function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/products/detail" component={ProductDetail} />
      <Route exact path="/checkout/summary" component={CheckoutSummary} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
