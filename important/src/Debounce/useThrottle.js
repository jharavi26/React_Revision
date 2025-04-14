
import { useEffect, useState , useRef } from "react"

  export const useThrottle = (value, limit) => {
    const [throttled, setThrottled] = useState(value);
    const lastRan = useRef(Date.now());
  
    useEffect(() => {
      const handler = setTimeout(() => {
        if (Date.now() - lastRan.current >= limit) {
          setThrottled(value);
          lastRan.current = Date.now();
        }
      }, limit - (Date.now() - lastRan.current));
  
      return () => clearTimeout(handler);
    }, [value, limit]);
  
    return throttled;
  };
