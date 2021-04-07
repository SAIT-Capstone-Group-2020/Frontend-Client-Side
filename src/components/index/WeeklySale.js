// import node_modules
import React, { useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';
// import local scripts
import useFetch from '../../utils/useFetch.hook';

/**
 * This function returns the jsx of the Weekly Sale Section
 * @returns WeeklySale component jsx
 */
const WeeklySale = () => {
  // states
  const [saleImage, setSaleImage] = useState();
  const [loading, setLoading] = useState(true);
  // rerender when saleImage changes
  useEffect(() => {
    // if saleImage !== null
    if (saleImage) {
      // change loading to false to remove loader animation
      setLoading(false);
    }
  }, [saleImage]);

  // call useFetch hook to get data from API
  useFetch(
    'https://hha-capstone.herokuapp.com/api/v2/ui/allbanner',
    setSaleImage,
  );
  // jsx
  return (
    <div className="weekly-sale-wrapper">
      <div className="container main-page-header-container">
        <div className="products-heading main-page-heading">
          <h1 className="main-page-header featured-h1">
            Weekly
            <br />
            <span className="main-page-header-span">Sale</span>
          </h1>
        </div>
      </div>
      {!loading ? (
        <div
          className="weekly-sale-img"
          style={{
            backgroundImage: `url(${saleImage.promotion.bannerImageUrl})`,
          }}
        ></div>
      ) : (
        <div className="loader-container">
          <BeatLoader color="red" />
        </div>
      )}
    </div>
  );
};

// default export
export default WeeklySale;
