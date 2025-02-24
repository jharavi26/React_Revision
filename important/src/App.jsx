

import { useState } from 'react'
import './App.css'
import Memo from './component/Memo'
import SumCalculator from './component/Memo_Hook';
import Callback2 from './component/Callback2';

function App() {
  const [count, setCount] = useState(0);

  const Addition =()=>{
    setCount(prev=>prev+1)
  }

  return (
    <div>
    <Memo name = "art"/>
      <p>{count}</p>
          <button onClick={Addition}>Increase</button>
    <SumCalculator />
    <Callback2 />
    </div>
  )
}

export default App
