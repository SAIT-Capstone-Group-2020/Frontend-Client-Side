// import node_modules
import { useState, useEffect } from 'react';

/**
 * This function gets data from an API endpoint and sets the state data.
 * @param url of JSON API
 * @param setData useState setter reference
 * @returns loading and error states
 */
const useFetch = (url, setData) => {
  // error state
  const [error, setError] = useState(null);
  // loading state
  const [loading, setLoading] = useState(true);

  // called everytime the component rerenders
  useEffect(() => {
    // creates an anonymouse async function
    (async () => {
      try {
        // fetches data from endpoint
        const res = await fetch(url);
        // gets json from the data
        const resJson = await res.json();
        // sets data state from parameters
        setData(resJson);
      } catch (err) {
        // catches and sets error state
        setError(err);
      } finally {
        // sets loading state to false fetch is complete
        setLoading(false);
      }
    })();
    // dependent on if parameters change
  }, [url, setData]);
  return { loading, error };
};
// default export
export default useFetch;
