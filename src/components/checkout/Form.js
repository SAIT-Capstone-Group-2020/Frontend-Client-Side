import React, { useState, useEffect, useContext } from 'react';
import FormItem from './FormItem';
import { BeatLoader } from 'react-spinners';
import Navbar from '../hoc/Navbar';
import Summary from './Summary';
// ! Import for Context/reducer
import { Store } from '../hoc/Store';
import {useGetCart, addToCart, clearCart} from '../hoc/cart.actions'

const Form = () => {
  // ! Gain access to Context/Reducer
  const { state, dispatch } = useContext(Store);

  const [orderSummary, setOrderSummary] = useState({});
  const [inputs, setInputs] = useState({});
  const [cartItems, setCartItems] = useState();
  const [loading, setLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false)
  useEffect(() => {
    if (cartItems) {
      if(state.length === cartItems.length && state.length !== 0){
        let total = 0;
      state.forEach((item,index)=>{
        if(cartItems[index].is_discount) {
          total += cartItems[index].discount_price * item.quantity;
        } else {
          total += cartItems[index].original_price * item.quantity;
        }
      })
      const gst = total * 0.05;
      const finalTotal = total + gst;
      setOrderSummary({
        total: (Math.round(total * 100) / 100).toFixed(2), 
        gst: (Math.round(gst * 100) / 100).toFixed(2), 
        finalTotal: (Math.round(finalTotal * 100) / 100).toFixed(2)
      })
      } else if (state.length === 0) {
        setOrderSummary({
        total: 0.00, 
        gst: 0.00, 
        finalTotal: 0.00
      })
      }
      
      setLoading(false);
    }
  }, [cartItems, state]);
  // Get item data from cart
  let url = 'https://hha-capstone.herokuapp.com/api/customer/order?';
  state.forEach(({ id }) => {
    url += `id=${id}&`;
  });
  // ! Grabs cart item info from API of items in state 
  useGetCart(state, url, setCartItems);

  // ! Tests / demo how to use the cart.actions
  const testAdd = e =>{
    e.preventDefault()
    addToCart(1,1,dispatch);
  }
  const testClear = e =>{
    e.preventDefault()
    clearCart(dispatch);
  }

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs({ ...inputs, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault();
    const {name, email, confirmEmail, phone} = inputs;
     setIsSuccess(true)
  }
  return !isSuccess ? <form
      id="email-form"
      name="email-form"
      data-name="Email Form"
      className="section cc-checkout-page"
      onSubmit={handleSubmit}
    >
      <div className="order-details-wrapper">
        <a href="/products" className="button general-button back-btn w-button">
          Continue Shopping
        </a>
        <button onClick={testAdd}>
          Add Item
        </button>
        <button onClick={testClear}>Clear Items</button>
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
                {state.length === cartItems.length ?
                  cartItems.map(
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
                      dispatch={dispatch}
                    />
                  ),
                ) : null
                }
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
            maxLength="256"
            name="name"
            data-name="name"
            placeholder="John Doe"
            id="name"
            required
            onChange={handleChange}
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
            required
            onChange={handleChange}
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
            required
            onChange={handleChange}
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
            required
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="order-summary-wrapper">
        <div className="order-summary-wrap order-sum">
          <h3 className="order-summary-header">Order Summary</h3>
          <div className="summary-price-container">
            <div className="summary-desc">Total before tax: </div>
            <div className="summary-price">${orderSummary.total} CAD</div>
          </div>
          <div className="summary-price-container">
            <div className="summary-desc">Calculated GST:</div>
            <div className="summary-price">${orderSummary.gst} CAD</div>
          </div>
          <div className="order-summary-total-container">
            <h5 className="order-total-price">Order Total: </h5>
            <h5 className="order-total-price">${orderSummary.finalTotal} CAD</h5>
          </div>
          <input
            type="submit"
            value="Pay in Store"
            className="button general-button order-checkout-btn w-button"
          />
        </div>
      </div>
    </form> : <div><Navbar /> <Summary inputs={inputs} cartItems={cartItems} cart={state} orderSummary={orderSummary} /></div>;
};

export default Form;

