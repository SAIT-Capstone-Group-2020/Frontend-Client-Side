import React from 'react';

/**
 * This function returns the jsx settings of the Slider in the MainBanner
 * @param param0 Passed from MainBanner
 * @returns Slider component jsx
 */
const Slider = ({ styleName, children }) => {
  return (
    <div
      data-delay="4000"
      data-animation="cross"
      data-autoplay="1"
      data-autoplay-limit="120000"
      data-duration="400"
      data-infinite="1"
      className={styleName}
    >
      {children}
    </div>
  );
};

// default export
export default Slider;
