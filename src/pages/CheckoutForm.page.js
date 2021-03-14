import React from 'react';
import useScript from '../utils/useScript.hook';
import Footer from '../components/hoc/Footer';
import Form from '../components/checkout/FormNotRedux';

const CheckoutForm = () => {
  useScript(
    'https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5ff4fd881cc2cd35ee68ff88',
  );
  useScript(
    'https://res.cloudinary.com/hsse18xji/raw/upload/v1612153620/HHA/js/webflow_vdcwdg.js',
  );
  return (
    <div>
      <Form />
      <Footer />
    </div>
  );
};

export default CheckoutForm;
