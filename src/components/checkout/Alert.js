import React from 'react';

const Alert = ({msg}) => {
  return (
    <div className="msg-banner-wrap msg-failed">
      <div className="text-block">{msg}</div>
    </div>
  );
};
export default Alert;
