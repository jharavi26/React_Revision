import React, { useState } from 'react';
import { useDebounce } from './useDobunce';
import { useThrottle } from './useThrottle';

function Timer() {
  const [query, setQuery] = useState("");
  const [input, setInput] = useState('');
  const throttledValue = useThrottle(input, 1000);
  const BounceValue = useDebounce(query, 2000);

  return (
    <div>
      <input type='text' placeholder='...Search' onChange={(e)=>setQuery(e.target.value)}></input>
      <p>Normal Value is : {query} </p>
      <hr/>
      <p>Debounce value is : {BounceValue} </p>
      <hr/>
      <input type = "text" value={input} onChange={(e) => setInput(e.target.value)} />
      <p>Input: {input}</p>
      <p>Throttled Value: {throttledValue}</p>
      
    </div>
  )
}

export default Timer
