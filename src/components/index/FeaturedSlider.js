import React from 'react';

/**
 * This function returns the jsx of the Slider settings of the Featured Section
 * @param param0 Passed from Featured
 * @returns FeaturedSlider component jsx
 */
const FeaturedSlider = ({ styleName, children }) => {
  // jsx
  return (
    <div
      data-delay="5000"
      data-animation="slide"
      data-autoplay="1"
      data-hide-arrows="1"
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
export default FeaturedSlider;
