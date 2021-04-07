import React from 'react';

/**
 * This function returns the jsx of the Alert in the Form component
 * @param param0 Passed from the CheckoutForm
 * @returns Alert component jsx
 */
const Alert = ({ msg, style }) => {
  // jsx
  return (
    <div className="msg-banner-wrap msg-failed" style={style}>
      <div className="text-block">{msg}</div>
    </div>
  );
};

// default export
export default Alert;
