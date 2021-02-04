import React from 'react';

const ProductThumbnail = () => {
  return (
    <div class="product">
        <a href="#" class="product-thumbnail-link w-inline-block">
            <div class="product-thumbnail-image"></div>
            <div class="cc-product-desc cc-product-desc-name">
                <div class="product-name-text">Product name</div>
            </div>
            <div class="cc-product-desc cc-product-desc-price">
                <div class="product-price-text">$XX.XX</div>
            </div>
        </a>
        <a href="#" class="product-thumbnail-button-link w-inline-block">
          <h6 class="product-thumbnail-button-text">in store only</h6>
        </a>
    </div>
  );
};

ProductThumbnail.propTypes = {};

export default ProductThumbnail;