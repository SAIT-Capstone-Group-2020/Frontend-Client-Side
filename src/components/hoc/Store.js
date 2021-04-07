/**
Context and Reducer initial setup.
This acts a global object that any component can access if imported. 
(Look at Form.js)
*/
// import node_modules
import React, { createContext, useReducer } from 'react';
// import local scripts
import cart, { ini_state } from './cart.reducer';

// Called in components that will use global object
export const Store = createContext();

/**
 * Wraps all of our routes so all routes have access. Only needed for ini setup
 * @param param0 Components inside of the wrapper
 * @returns Store Provider
 */
export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cart, ini_state());
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
};
