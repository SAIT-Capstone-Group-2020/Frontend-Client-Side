import React, { useEffect, useState } from 'react';
import useFetch from '../../utils/useFetch.hook';
import { BeatLoader } from 'react-spinners';

const WeeklySale = () => {
  const [saleImage, setSaleImage] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (saleImage) {
      setLoading(false);
    }
  }, [saleImage]);
  useFetch(
    'https://hha-merge.herokuapp.com/api/v2/ui/allbanner_tf2',
    setSaleImage,
  );
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

export default WeeklySale;
