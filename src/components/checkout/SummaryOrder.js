import React from 'react';

/**
 * This function returns the jsx of the Summary Order in the Summary Component
 * @param param0 Passed from the Summary
 * @returns SummaryOrder component jsx
 */
const SummaryOrder = ({orderSummary}) => {
  // jsx
  return (
    <div className="order-summary-wrapper order-confirm-summary">
      <div className="order-summary-wrap order-confirm-wrap">
        <h3 className="order-summary-header">Order Summary</h3>
        <div className="summary-price-container">
          <div className="summary-desc">Total: </div>
          <div className="summary-price">${orderSummary.total} CAD</div>
        </div>
        <div className="summary-price-container">
          <div className="summary-desc">Calculated GST:</div>
          <div className="summary-price">${orderSummary.gst} CAD</div>
        </div>
        <div className="order-summary-total-container">
          <h5 className="order-total-price">Order Total: </h5>
          <h5 className="order-total-price">${orderSummary.finalTotal} CAD</h5>
        </div>
      </div>
    </div>
  );
};

// export default
export default SummaryOrder;
