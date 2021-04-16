/**
 * This file holds the actions that are called from the component.
 * All functions need the dispatch parameter if it will be passed to the
 * reducer to change the state of the cart.
 */
import { useState, useEffect } from 'react';
// import types
import {
  CLEAR_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
} from './types';

/**
 * Replaces the useFetch hook in the utils folder because we
 * can't wrap a hook in conditionals. Only difference is the
 * state is passed in and there is an if-else.
 * @param state cart
 * @param url of API
 * @param setData data useState setter
 * @returns loading and error states
 */
export const useGetCart = (state, url, setData) => {
  // states
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // rerender if url, setData, or state changes
  useEffect(() => {
    (async () => {
      if (state.length === 0) {
        // empty cart
        setData([]);
        setLoading(false);
      } else {
        // get json data
        try {
          const res = await fetch(url);
          const resJson = await res.json();
          setData(resJson);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      }
    })();
  }, [url, setData, state]);
  return { loading, error };
};

// This function clears the cart.
export const clearCart = dispatch => {
  dispatch({
    type: CLEAR_CART,
    payload: {},
  });
};

// This function is the basic version of adding an item to the cart.
export const addToCart = (id, quantity, dispatch) => {
  const newId = parseValue(id);
  const newQty = parseValue(quantity);

  dispatch({
    type: ADD_TO_CART,
    payload: { id: newId, quantity: newQty },
  });
};

// This function removes an item from the cart
export const removeFromCart = (id, dispatch) => {
  const newId = parseValue(id);
  dispatch({
    type: REMOVE_FROM_CART,
    payload: newId,
  });
};

// This function updates the quantity of an item
export const updateQuatity = (id, quantity, dispatch) => {
  const newId = parseValue(id);
  const newQty = parseValue(quantity);
  dispatch({
    type: UPDATE_QUANTITY,
    payload: { id: newId, quantity: newQty },
  });
};

// This function saves the summary info to local storage
export const saveLocal = ({ hhaSummary }) => {
  localStorage.setItem('hhaSummary', JSON.stringify(hhaSummary));
};

// check if value is int
const parseValue = value => {
  let val = value;
  if (typeof value === 'string') {
    val = parseInt(value);
  }
  return val
};
