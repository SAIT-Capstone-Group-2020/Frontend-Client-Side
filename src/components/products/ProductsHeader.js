/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const ProductsHeader = () => {
  return (
    <div className="product-list-header-section cc-product-list-heading-section">
    <div className="product-list-header-container cc-heading-wrap">
      <h1 className="product-list-heading-1">Explore Our Products!</h1>
      <div className="store-product-search-bar-wrap">
        <form action="/search" className="product-search-bar-wrapper w-form"><input type="search" className="search-bar-input-field w-input" maxlength="256" name="query" placeholder="Search for any product ..." id="search" required=""/><input type="submit" value="Search" className="search-button w-button"/></form>
      </div>
      <div className="store-heading-categories-wrap cc-heading-category">
        <div className="category-link-list-wrapper cc-heading-category">
          <div className="category-link-list-wrap cc-category-list cc-heading-category">
            <div className="category-link-wrapper cc-heading-category">
              <a href="products.html" aria-current="page" className="category-link cc-heading-category w--current">All Products</a>
            </div>
            <div className="category-link-wrapper cc-heading-category">
              <a href="#" className="category-link cc-heading-category">fruits &amp; vegetables</a>
            </div>
            <div className="category-link-wrapper cc-heading-category">
              <a href="#" className="category-link cc-heading-category">meat</a>
            </div>
            <div className="category-link-wrapper cc-heading-category">
              <a href="#" className="category-link cc-heading-category">seafood</a>
            </div>
            <div className="category-link-wrapper cc-heading-category">
              <a href="#" className="category-link cc-heading-category">dairy &amp; frozen</a>
            </div>
            <div className="category-link-wrapper cc-heading-category">
              <a href="#" className="category-link cc-heading-category">snacks</a>
            </div>
            <div className="category-link-wrapper cc-heading-category">
              <a href="#" className="category-link cc-heading-category">food essentials</a>
            </div>
            <div className="category-link-wrapper cc-heading-category">
              <a href="#" className="category-link cc-heading-category">beauty &amp; household</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

ProductsHeader.propTypes = {};

export default ProductsHeader;
