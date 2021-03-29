import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductsHeader = ({ searchHandler }) => {
  const handleSearchInputChange = e => {
    searchHandler(e.target.value);
  };

  return (
    <div className="product-list-header-section cc-product-list-heading-section">
    <div className="product-list-header-container cc-heading-wrap">
      <h1 className="product-list-heading-1">Explore Our Products!</h1>
      <div className="store-product-search-bar-wrap">
        <form className="product-search-bar-wrapper w-form"><input onChange={handleSearchInputChange} type="text" className="search-bar-input-field w-input" maxlength="100" name="query" placeholder="Search for any product ..." required=""/><input type="submit" value="Search" className="search-button w-button" disabled/></form>
      </div>
      <div className="store-heading-categories-wrap cc-heading-category">
        <div className="category-link-list-wrapper cc-heading-category">
          <div className="category-link-list-wrap cc-category-list cc-heading-category">
            {/* <div className="category-link-wrapper cc-heading-category">
              <a href="/#/products" aria-current="page" className="category-link cc-heading-category w--current">All Products</a>
            </div> */}
            <div className="category-link-wrapper cc-heading-category">
              <Link to={{ pathname: '/products', state: { category: 'meat'} }} className="category-link cc-heading-category">
							meat
						</Link>
            </div>
              <div className="category-link-wrapper cc-heading-category">
                <Link to={{ pathname: '/products', state: { category: 'fruit'} }} className="category-link cc-heading-category">
							fruit &amp; vegetables
						</Link>
            </div>
            <div className="category-link-wrapper cc-heading-category">
              <Link to={{ pathname: '/products', state: { category: 'seafood'} }} className="category-link cc-heading-category">
							seafood
						</Link>
            </div>
            <div className="category-link-wrapper cc-heading-category">
              <Link to={{ pathname: '/products', state: { category: 'frozen'} }} className="category-link cc-heading-category">
							dairy &amp; frozen
						</Link>
            </div>
            <div className="category-link-wrapper cc-heading-category">
              <Link to={{ pathname: '/products', state: { category: 'snack'} }} className="category-link cc-heading-category">
							snacks
						</Link>
            </div>
            <div className="category-link-wrapper cc-heading-category">
              <Link
							to={{ pathname: '/products', state: { category: 'food essentials'} }}
							className="category-link cc-heading-category"
						>
							food essentials
						</Link>
            </div>
            <div className="category-link-wrapper cc-heading-category">
              <Link to={{ pathname: '/products', state: { category: 'beauty'} }} className="category-link cc-heading-category">
							beauty &amp; household
						</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

// ProductsHeader.propTypes = {};

export default ProductsHeader;
