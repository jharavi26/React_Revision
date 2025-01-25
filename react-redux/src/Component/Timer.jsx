import React, { useState } from 'react'

const Timer = () => {
  const [timer, setTimer] = useState(0);
 

  const Start =()=>{
    window.myTimer = setInterval(() => { 
      setTimer(timer=>timer+1)   
    },1000);
  }

  const Reset  =()=>{
    clearInterval(window.myTimer);
    setTimer(0)
  }

  const Stop = ()=>{
    clearInterval(window.myTimer);
  }

  return (
    <div>
      <h1>
        Timer
      </h1>
      <span style={{padding:"10px"}}>{Math.trunc(timer / 60)} mins</span>
      <span>{timer % 60} sec</span>
      <br/>
      <button style ={{backgroundColor:"Green", marginRight:"10px"}} onClick={Start}>Start</button>
      <button style = {{backgroundColor:"Yellow", marginRight:"10px"}} onClick={Reset}>Reset</button>
      <button style = {{backgroundColor:"red"}} onClick={Stop}>Stop</button>
      
    </div>
  )
} 

export default Timer
