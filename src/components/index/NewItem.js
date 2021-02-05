import React from 'react';

const NewItem = ({ image }) => {
  return (
    <div className="collection-item main-collection-item grid-collection-item">
      <a
        href="/404"
        className="product-image-home main-product-image-grid-home w-inline-block"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="cc-product-desc-home cc-desc-grid-home">
          <div className="product-name-text-wrap">
            <div className="product-name-text-home first-lang">Spaghetti</div>
          </div>
          <div className="product-price-text-home">$12.99</div>
        </div>
      </a>
    </div>
  );
};
export default NewItem;
