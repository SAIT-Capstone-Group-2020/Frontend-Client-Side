// import node_modules
import React, { useState, useEffect } from 'react';
import { BeatLoader } from 'react-spinners';
// import local scripts
import NewItem from './NewItem';
import useFetch from '../../utils/useFetch.hook';

/**
 * This function returns the jsx of the What's New section of the home page.
 * @returns WhatsNew component jsx
 */
const WhatsNew = () => {
  // states
  const [items, setItems] = useState();
  const [loading, setLoading] = useState(true);
  // rerender when items changes
  useEffect(() => {
    // if items !== null
    if (items) {
      // set loading to false to remove loading animation
      setLoading(false);
    }
  }, [items]);

  // call useFetch hook to get data from API
  useFetch(
    'https://hha-capstone.herokuapp.com/api/customer/search?sort=product_id:desc&page=1',
    setItems,
  );
  // jsx
  return (
    <div className="whats-new-wrapper">
      <div className="container main-page-header-container">
        <div className="products-heading main-page-heading">
          <h1 className="main-page-header">
            New
            <br />
            <span className="main-page-header-span">Products</span>
          </h1>
        </div>
      </div>
      <div className="collection-list-wrapper">
        {loading ? (
          <div className="loader-container">
            <BeatLoader color="red" />
          </div>
        ) : (
          <div className="collection-grid-wrapper">
            {items.content.map(
              ({
                product_id,
                discount_price,
                image_url,
                is_discount,
                original_price,
                product_name,
              }) => (
                <NewItem
                  key={product_id}
                  id={product_id}
                  image={image_url}
                  itemName={product_name}
                  price={is_discount ? discount_price : original_price}
                  isDiscount={is_discount}
                  ogPrice={original_price}
                />
              ),
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// default export
export default WhatsNew;
