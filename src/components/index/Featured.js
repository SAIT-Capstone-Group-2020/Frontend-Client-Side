import React, { useState, useEffect } from 'react';
import FeaturedSlider from './FeaturedSlider';
import FeaturedSlide from './FeaturedSlide';
import useFetch from '../../utils/useFetch.hook';
import { BeatLoader } from 'react-spinners';
const Featured = () => {
  const [banners, setBanners] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (banners) {
      setLoading(false);
    }
  }, [banners]);
  useFetch(
    'https://hha-capstone.herokuapp.com/api/v2/ui/allbanner',
    setBanners,
  );
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

export default Featured;
