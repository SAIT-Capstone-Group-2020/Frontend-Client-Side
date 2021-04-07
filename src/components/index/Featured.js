// import node_modules
import React, { useState, useEffect } from 'react';
import { BeatLoader } from 'react-spinners';
// import local scripts
import FeaturedSlider from './FeaturedSlider';
import FeaturedSlide from './FeaturedSlide';
import useFetch from '../../utils/useFetch.hook';

/**
 * This function returns the jsx of the Featured Section
 * @returns Featured component jsx
 */
const Featured = () => {
  // states
  const [banners, setBanners] = useState();
  const [loading, setLoading] = useState(true);
  // rerender when banners state changes
  useEffect(() => {
    // banners is initially null
    if (banners) {
      // set loading to false
      setLoading(false);
    }
  }, [banners]);

  // call useFetch Hook to get api data
  useFetch(
    'https://hha-capstone.herokuapp.com/api/v2/ui/allbanner',
    setBanners,
  );
  // jsx
  return (
    <div className="featured-wrapper">
      <div className="container main-page-header-container">
        <div className="products-heading main-page-heading">
          <h1 className="main-page-header featured-h1">
            Featured
            <br />
            <span className="main-page-header-span">Products</span>
          </h1>
        </div>
      </div>
      {!loading ? (
        <FeaturedSlider styleName="image-slider featured-wrapper w-slider">
          <div className="slider-wrap featured-wrap w-slider-mask">
            {banners.promotion.products.map(
              (
                { productId, productName, discountPrice, productImageUrl },
                index,
              ) => (
                <FeaturedSlide
                  key={productId}
                  id={productId}
                  name={productName}
                  price={discountPrice}
                  image={productImageUrl}
                  styleName={
                    index % 2 === 0
                      ? 'featured-desc-wrap featured-no-desc w-inline-block'
                      : 'featured-desc-wrap featured-desc-alt featured-no-desc w-inline-block'
                  }
                  left={index % 2 === 0 ? true : false}
                />
              ),
            )}
          </div>
          <div className="left-arrow featured-arrow w-slider-arrow-left">
            <div className="w-icon-slider-left"></div>
          </div>
          <div className="right-arrow featured-arrow w-slider-arrow-right">
            <div className="w-icon-slider-right"></div>
          </div>
          <div className="slide-nav featured-nav w-slider-nav w-shadow w-round"></div>
        </FeaturedSlider>
      ) : (
        <div className="loader-container">
          <BeatLoader color="red" />
        </div>
      )}
    </div>
  );
};

// default export
export default Featured;
