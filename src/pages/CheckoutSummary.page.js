// import node_modules
import React from 'react';
// import local scripts
import useScript from '../utils/useScript.hook';
import Footer from '../components/hoc/Footer';
import Navbar from '../components/hoc/Navbar';
import Summary from '../components/checkout/Summary';

/**
 * This function returns the jsx for the /checkout/summary endpoint
 * @returns CheckoutSummary Page container jsx
 */
const CheckoutSummary = () => {
  // call useScript hook
  useScript(
    'https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5ff4fd881cc2cd35ee68ff88',
  );
  useScript(
    'https://res.cloudinary.com/hsse18xji/raw/upload/v1612153620/HHA/js/webflow_vdcwdg.js',
  );
  // jsx
  return (
    <div>
      <Navbar />
      <Summary />
      <Footer />
    </div>
  );
};

// default export
export default CheckoutSummary;
