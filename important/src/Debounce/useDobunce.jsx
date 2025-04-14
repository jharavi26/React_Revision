import React, { useEffect, useState } from 'react'

export const useDebounce = (value, delay)=>{
  const [debounceValue, setDobounceValue] = useState(value)

  useEffect(()=>{
    const handler = setTimeout(() => {
      setDobounceValue(value);
    },delay);
    return ()=> clearTimeout(handler);
  }, [value, delay])
  return debounceValue;
}


