// import node_modules
import React from 'react';
// import local scripts
import useScript from '../../utils/useScript.hook';

/**
 * This function returns the jsx of the FeatuedSlide in the Featured Section
 * @param param0 Passed from the loop in Featured
 * @returns FeaturedSlide component jsx
 */
const FeaturedSlide = ({ id, name, price, styleName, left, image }) => {
  // call useScript hook
  useScript(
    'https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5ff4fd881cc2cd35ee68ff88',
  );
  useScript(
    'https://res.cloudinary.com/hsse18xji/raw/upload/v1612153620/HHA/js/webflow_vdcwdg.js',
  );

  // image component of featured item
  const featureImage = (
    <div
      className="featured-item-img"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
  // jsx
  return (
    <div className="slide featured-slide w-slide">
      {left ? (
        <div className="featured-slide-wrap">
          <a href={`/#/product/${id}`} className={styleName}>
            <div className="featured-header-wrap">
              <h1 className="featured-header first-lang">{name}</h1>
            </div>
            <div className="featured-price-wrap featured-single-price">
              <div className="featured-desc-price">
                ${((price * 100) / 100).toFixed(2)}
              </div>
            </div>
          </a>
          {featureImage}
        </div>
      ) : (
        <div className="featured-slide-wrap">
          {featureImage}
          <a href={`/#/product/${id}`} className={styleName}>
            <div className="featured-header-wrap">
              <div className="featured-header-wrap">
                <h1 className="featured-header first-lang">{name}</h1>
              </div>
            </div>
            <div className="featured-price-wrap featured-two-price">
              <div className="featured-desc-price">
                ${((price * 100) / 100).toFixed(2)}
              </div>
            </div>
          </a>
        </div>
      )}
    </div>
  );
};

// default export
export default FeaturedSlide;
