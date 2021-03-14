import React, {useState, useEffect} from 'react'
import { CLEAR_CART, ADD_TO_CART } from './types';

export const useGetCart = (state,url, setData) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (state.length === 0) {
        try {
        setData([]);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
      } else {
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
  }, [url, setData]);
  return { loading, error };
};

export const clearCart = (dispatch) => {
  dispatch({
    type: CLEAR_CART,
    payload: {},
  });
};

export const addToCart = (id,quantity, dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: { id, quantity },
  });
};