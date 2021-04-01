import { useEffect } from 'react';

const useScript = url => {
  useEffect(() => {
    const scripts = document.getElementsByClassName("useScript");
    Array.from(scripts).forEach(elem=>{
      if(elem.src === url) {
        document.body.removeChild(elem);
      }
    })
    
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.className = "useScript"
    script.src = url;
    script.defer = true;

    document.body.appendChild(script);

    // return () => {
    //   document.body.removeChild(script);
    // };
  }, [url]);
};

export default useScript;
