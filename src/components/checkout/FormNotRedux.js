import React, { useState, useEffect, useContext } from 'react';
import FormItem from './FormItem';
import { BeatLoader } from 'react-spinners';
import useFetch from '../../utils/useFetch.hook';
import Navbar from '../hoc/Navbar';
import Summary from './Summary';
import { Store } from '../hoc/Store';
import {useGetCart} from '../hoc/cart.actions'

const Form = () => {
  const { state, dispatch } = useContext(Store);

  const [cartItems, setCartItems] = useState();
  const [loading, setLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false)
  useEffect(() => {
    if (cartItems) {
      setLoading(false);
    }
  }, [cartItems]);
  // Get item data from cart
  let url = 'https://hha-capstone.herokuapp.com/api/customer/order?';
  state.forEach(({ id }) => {
    url += `id=${id}&`;
  });

  useGetCart(state,url, setCartItems);
  const test = () =>{
    setIsSuccess(true)
  }
  return !isSuccess ? <form
      id="email-form"
      name="email-form"
      data-name="Email Form"
      className="section cc-checkout-page"
    >
      <div className="order-details-wrapper">
        <a href="/products" className="button general-button back-btn w-button">
          Continue Shopping
        </a>
        <button onClick={test}>Test</button>
        <h1 className="order-summary-main-header">Review Your Order</h1>
        <div className="order-summary-items-wrap">
          <h3 className="order-summary-header">Items in Order</h3>
          <div className="order-sum-items-flex">
            {loading ? (
              <div className="loader-container-checkout">
                <BeatLoader color="red" />
              </div>
            ) : (
              <div>
                {cartItems.map(
                  (
                    {
                      product_id,
                      discount_price,
                      image_url,
                      is_discount,
                      original_price,
                      product_name,
                      weight_value,
                      weight_type_name,
                    },
                    index,
                  ) => (
                    <FormItem
                      key={product_id}
                      id={product_id}
                      image={image_url}
                      itemName={product_name}
                      price={is_discount ? discount_price : original_price}
                      isDiscount={is_discount}
                      ogPrice={original_price}
                      qty={state[index].quantity}
                      weight={weight_value}
                      weightType={weight_type_name}
                    />
                  ),
                )}
              </div>
            )}
          </div>
        </div>
        <div className="order-sum-payment-wrap">
          <h3 className="order-summary-header">Payment Info</h3>
          <h6 className="checkout-input-head">Name</h6>
          <input
            type="text"
            className="checkout-input w-input"
            autoFocus="true"
            maxLength="256"
            name="name"
            data-name="name"
            placeholder="John Doe"
            id="name"
            required=""
          />
          <h6 className="checkout-input-head">Email</h6>
          <input
            type="email"
            className="checkout-input w-input"
            maxLength="256"
            name="email"
            data-name="email"
            placeholder="jdoe@gmail.com"
            id="email"
            required=""
          />
          <h6 className="checkout-input-head">Confirm Email</h6>
          <input
            type="email"
            className="checkout-input w-input"
            maxLength="256"
            name="confirmEmail"
            data-name="confirmEmail"
            placeholder="jdoe@gmail.com"
            id="confirmEmail"
            required=""
          />
          <h6 className="checkout-input-head">Phone</h6>
          <input
            type="tel"
            className="checkout-input w-input"
            maxLength="256"
            name="phone"
            data-name="phone"
            placeholder="403-123-4567"
            id="phone"
            required=""
          />
        </div>
      </div>
      <div className="order-summary-wrapper">
        <div className="order-summary-wrap order-sum">
          <h3 className="order-summary-header">Order Summary</h3>
          <div className="summary-price-container">
            <div className="summary-desc">Total before tax: </div>
            <div className="summary-price">$100.00 CAD</div>
          </div>
          <div className="summary-price-container">
            <div className="summary-desc">Calculated GST:</div>
            <div className="summary-price">$5.00 CAD</div>
          </div>
          <div className="order-summary-total-container">
            <h5 className="order-total-price">Order Total: </h5>
            <h5 className="order-total-price">$105.00 CAD</h5>
          </div>
          <input
            type="submit"
            value="Pay in Store"
            className="button general-button order-checkout-btn w-button"
          />
        </div>
      </div>
    </form> : <div><Navbar /> <Summary /></div>;
};

export default Form;

