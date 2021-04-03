import { useEffect } from 'react';

const useScript = url => {
  useEffect(() => {
    removeScript(url)
    
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.className = "useScript"
    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      removeScript(url);
    };
  }, [url]);
};

const removeScript = (url) => {
  const scripts = document.getElementsByClassName("useScript");
    Array.from(scripts).forEach(elem=>{
      if(elem.src === url) {
        document.body.removeChild(elem);
      }
    })
}

export default useScript;
