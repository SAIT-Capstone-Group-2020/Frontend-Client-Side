import React from 'react';
import FormItem from './FormItem';

const Form = () => {
  return (
    <form
      id="email-form"
      name="email-form"
      data-name="Email Form"
      className="section cc-checkout-page"
    >
      <div className="order-details-wrapper">
        <a href="/products" className="button general-button back-btn w-button">
          Continue Shopping
        </a>
        <h1 className="order-summary-main-header">Review Your Order</h1>
        <div className="order-summary-items-wrap">
          <h3 className="order-summary-header">Items in Order</h3>
          <div className="order-sum-items-flex">
            <FormItem
              itemName={'Spaghetti'}
              weight={40}
              weightType={'g'}
              qty={1}
              price={25}
              image="https://images.unsplash.com/photo-1567423285116-c31e6a93e939?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"
            />
            <FormItem
              itemName={'Spaghetti'}
              weight={40}
              weightType={'g'}
              qty={1}
              price={25}
              image="https://images.unsplash.com/photo-1567423285116-c31e6a93e939?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"
            />
            <FormItem
              itemName={'Spaghetti'}
              weight={40}
              weightType={'g'}
              qty={1}
              price={25}
              image="https://images.unsplash.com/photo-1567423285116-c31e6a93e939?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"
            />
            <FormItem
              itemName={'Spaghetti'}
              weight={40}
              weightType={'g'}
              qty={1}
              price={25}
              image="https://images.unsplash.com/photo-1567423285116-c31e6a93e939?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"
            />
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
    </form>
  );
};
export default Form;
