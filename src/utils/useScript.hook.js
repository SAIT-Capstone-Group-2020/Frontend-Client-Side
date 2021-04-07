// import node_modules
import { useEffect } from 'react';

/**
 * This function loads a script tag into the body. Used for hamburger menu, drop down, and slider functionalities
 * @param url of external script
 */
const useScript = url => {
  // useEffect is called whenever the component is mounted
  useEffect(() => {
    // calls removeScript function
    removeScript(url);

    // This creates a script element
    const script = document.createElement('script');
    // set properties for script tag
    script.type = 'text/javascript';
    script.className = 'useScript';
    script.src = url;
    // used to ensure sequential script loading
    script.defer = true;

    // add to bottom of body
    document.body.appendChild(script);

    // called when the component dismounts
    return () => {
      removeScript(url);
    };
  }, [url]);
};

/**
 * This function removes the script from the document if it is already in the body.
 * @param url of script
 */
const removeScript = url => {
  // gets all the scripts with the className = useScript
  const scripts = document.getElementsByClassName('useScript');

  // for each element in the scripts constant, remove the script if it already exists in the array
  Array.from(scripts).forEach(elem => {
    if (elem.src === url) {
      document.body.removeChild(elem);
    }
  });
};

// default export
export default useScript;
