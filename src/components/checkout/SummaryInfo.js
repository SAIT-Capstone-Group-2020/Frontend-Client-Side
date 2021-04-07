import React from 'react';

/**
 * This function returns the jsx of the Summary Info from the Summary Section
 * @param param0 Passed from the Summary
 * @returns SummaryInfo component jsx
 */
const SummaryInfo = ({ inputs: { name, email, phone, date } }) => {
  return (
    <div className="order-sum-payment-wrap">
      <h3 className="order-summary-header">Payment Info</h3>
      <h5 className="order-summary-header order-sum-sub-head">Name</h5>
      <div className="bill-info-txt">{name}</div>
      <h5 className="order-summary-header order-sum-sub-head">Email</h5>
      <div className="bill-info-txt">{email}</div>
      <h5 className="order-summary-header order-sum-sub-head">Phone</h5>
      <div className="bill-info-txt">{phone}</div>
      <h5 className="order-summary-header order-sum-sub-head">Order Date</h5>
      <div className="bill-info-txt">{date}</div>
    </div>
  );
};

// default export
export default SummaryInfo;
