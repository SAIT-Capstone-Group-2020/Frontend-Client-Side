/* eslint-disable no-unused-vars */
// import node_modules
import React, { useState, useEffect, useContext } from 'react';
// import local scripts
import SummaryInfo from './SummaryInfo';
import SummaryItems from './SummaryItems';
import SummaryOrder from './SummaryOrder';
import useScript from '../../utils/useScript.hook';
import Alert from './Alert.js';
// Import for Context/reducer
import { Store } from '../hoc/Store';
import { clearCart } from '../hoc/cart.actions';

/**
 * This function returns the jsx of the Summary Section
 * @returns Summary component jsx
 */
const Summary = () => {
  // for context and reducer
  const { state, dispatch } = useContext(Store);

  // states
  const [summary, setSummary] = useState(
    JSON.parse(localStorage.getItem('hhaSummary')),
  );
  // call useScript hook
  useScript(
    'https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5ff4fd881cc2cd35ee68ff88',
  );
  useScript(
    'https://res.cloudinary.com/hsse18xji/raw/upload/v1612153620/HHA/js/webflow_vdcwdg.js',
  );
  // rerender only once
  useEffect(() => {
    if (summary) {
      // empty out cart
      clearCart(dispatch);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // jsx
  return !summary ? (
    <div className="section cc-checkout-page">
      <Alert msg="Error: No Order Summary" style={{ top: '0' }} />
      <div className="order-details-wrapper">
        <h1 className="order-summary-main-header">Order Details</h1>
        <SummaryItems cartItems={[]} cart={[]} />
        <SummaryInfo inputs={{ name: '', email: '', phone: '', date: '' }} />
      </div>
      <SummaryOrder orderSummary={{ total: 0.0, gst: 0.0, finalTotal: 0.0 }} />
    </div>
  ) : (
    <div className="section cc-checkout-page">
      <div className="order-details-wrapper">
        <h1 className="order-summary-main-header">Order Details</h1>
        <SummaryItems cartItems={summary.cartItems} cart={summary.cart} />
        <SummaryInfo inputs={summary.inputs} />
      </div>
      <SummaryOrder orderSummary={summary.orderSummary} />
    </div>
  );
};

// default export
export default Summary;
