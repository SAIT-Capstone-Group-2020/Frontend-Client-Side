/**
 * This file sets the state of the cart in local storage and in react.
 */

// import types
import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from './types';

/**
 * This function returns the cart from local storage for persistence.
 * If there is nothing in localstorage, an empty array will be set and returned.
 * @returns cart array
 */
export const ini_state = () => {
	// sending and retrieving the cart array from local storage needs JSON.parse and JSON.stringify
	let cart = JSON.parse(localStorage.getItem('hhaCart'));
	if (!cart) {
		// if it doesn't exist then populate with empty array.
		localStorage.setItem('hhaCart', JSON.stringify([]));
		cart = [];
	}
	return cart;
};

/**
 * This function is what sets the cart in local storage and the global state in react
 * @param state state of the cart
 * @param param1 type and payload from the actions
 * @returns the cart reducer
 */
const cartReducer = (state = ini_state, { type, payload }) => {
	switch (type) {
		case CLEAR_CART:
			const clearCart = [];
			localStorage.setItem('hhaCart', JSON.stringify(clearCart));
			return clearCart;
		case REMOVE_FROM_CART:
			// filter through cart, returning ids that do not match
			const removeCart = state.filter(({ id }) => id !== payload);
			localStorage.setItem('hhaCart', JSON.stringify(removeCart));
			return removeCart;
		case UPDATE_QUANTITY:
			// find matching ids and update quantity, else append
			let updateCart = [];
			state.forEach((item) => {
				if (item.id === payload.id) {
					updateCart.push({
						id       : payload.id,
						quantity : payload.quantity
					});
				}
				else {
					updateCart.push(item);
				}
			});
			localStorage.setItem('hhaCart', JSON.stringify(updateCart));
			return updateCart;
		case ADD_TO_CART:
			let secondAddCart = [...state];
			state.forEach((item) => {
        if (item.id === payload.id) {
					secondAddCart.push({
						id       : payload.id,
						quantity : payload.quantity
					});

					localStorage.setItem('hhaCart', JSON.stringify(secondAddCart));
					return secondAddCart;
				}
			});
			const addCart = [
				...state,
				{
					id       : payload.id,
					quantity : payload.quantity
				}
			];
			localStorage.setItem('hhaCart', JSON.stringify(addCart));
			return addCart;
		default:
			return state;
	}
};

// default export
export default cartReducer;
