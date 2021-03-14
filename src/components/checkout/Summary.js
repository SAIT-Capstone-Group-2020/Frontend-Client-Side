import React from 'react';
import SummaryInfo from './SummaryInfo';
import SummaryItems from './SummaryItems';
import SummaryOrder from './SummaryOrder';
import useScript from '../../utils/useScript.hook'

const Summary = () => {
  useScript(
    'https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5ff4fd881cc2cd35ee68ff88',
  );
  useScript(
    'https://res.cloudinary.com/hsse18xji/raw/upload/v1612153620/HHA/js/webflow_vdcwdg.js',
  );
  return (
    <div className="section cc-checkout-page">
      <div className="order-details-wrapper">
        <h1 className="order-summary-main-header">Order Details</h1>
        <SummaryItems />
        <SummaryInfo />
      </div>
      <SummaryOrder />
    </div>
  );
};
export default Summary;
