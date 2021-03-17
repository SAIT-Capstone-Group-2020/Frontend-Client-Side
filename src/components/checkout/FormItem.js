import React from 'react';
import {removeFromCart} from '../hoc/cart.actions';

const FormItem = ({ id, itemName, weight, weightType, qty, price, image, dispatch }) => {
  const handleRemove = e => {
    e.preventDefault();
    removeFromCart(id,dispatch);
  }
  return (
    <div className="order-sum-item">
      <div className="order-sum-item-details">
        <div className="order-sum-item-detail-img">
          <div
            className="order-item-img"
            style={{ backgroundImage: `url(${image})` }}
          />
        </div>
        <div className="order-sum-item-desc">
          <div className="order-sum-item-info-wrap">
            <div className="order-sum-item-info-txt order-sum-item-title">
              {itemName}
            </div>
            <div className="order-sum-info-wrap">
              <div className="order-sum-item-atr">Weight:</div>
              <div className="order-sum-item-value">
                {`${weight} ${weightType}`}
              </div>
            </div>
            <div className="order-sum-info-wrap">
              <div className="order-sum-item-atr">Quantity:</div>
              <div className="order-sum-item-value">{qty}</div>
            </div>
          </div>
          <div className="order-sum-item-remove-wrap">
            <button className="order-det-rem w-button" onClick={handleRemove}>
              Remove
            </button>
            <button className="order-det-rem w-button">
              CHANGE
            </button>
          </div>
        </div>
      </div>
      <div className="order-sum-item-price-wrap">
        <div className="order-sum-item-price">${price}</div>
      </div>
    </div>
  );
};
export default FormItem;
