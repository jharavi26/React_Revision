

import { useState } from 'react'
import './App.css'
import Memo from './component/Memo'
import SumCalculator from './component/Memo_Hook';
import Callback2 from './component/Callback2';
import Loading from './component/Loading';
import Reducer from './component/Reducer';
import Timer from './Debounce/Timer';

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
    <Loading />\
    <Reducer/>
    <Timer/>
    </div>
  )
}

export default App
