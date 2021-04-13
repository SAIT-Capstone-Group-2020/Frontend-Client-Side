import React from 'react';

/**
 * This function returns the jsx of the Slide component used in the Slider
 * @param param0 Passed from the MainBanner
 * @returns Slide component jsx
 */
const Slide = ({ styleName, image }) => {
  return (
    <div
      className={styleName}
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
};

// default export
export default Slide;
