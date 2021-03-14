import { ADD_TO_CART, CLEAR_CART } from './types';

// !For now we'll have an initial item inside the the cart
export const ini_state = () => {
  let cart = JSON.parse(localStorage.getItem("hhaCart"));
  if(!cart) {
    // if it doesn't exist then populate with empty cart later.
    localStorage.setItem('hhaCart', JSON.stringify(
    //   [{
    // id: 1,
    // quantity: 1,
    // }]
    []
  ))
  cart = [];
  }else {
    console.log(cart)
  }
  return cart;
}



const cartReducer = (state = ini_state, { type, payload }) => {
  switch (type) {
    case CLEAR_CART:
      return ini_state;
    case ADD_TO_CART:
      return [
        ...state,
        {
          id: payload.id,
          quantity: payload.quantity,
        },
      ];
    default:
      return state;
  }
};
export default cartReducer;
