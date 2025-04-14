import React, { useState } from 'react';
import { useDebounce } from './useDobunce';

function Timer() {
  const [query, setQuery] = useState("");
  const BounceValue = useDebounce(query, 2000)

  return (
    <div>
      <input type='text' placeholder='...Search' onChange={(e)=>setQuery(e.target.value)}></input>
      <p>Normal Value is : {query} </p>
      <hr/>
      <p>Debounce value is : {BounceValue} </p>
      
    </div>
  )
}

export default Timer
