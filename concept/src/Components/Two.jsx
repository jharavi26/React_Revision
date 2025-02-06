import React, { useEffect, useRef, useState } from 'react'

function Two() {
  const [time, setTime] = useState(()=>{
   const timer =  sessionStorage.getItem("time");
   return timer ? Number(timer)  : 0; 
  });
  const timeRef = useRef(null);
  

  const handleReset =()=>{
    clearInterval(timeRef.current)
    setTime(0);
  }

  useEffect(()=>{
    time && 
    sessionStorage.setItem("time", time);
  },[time])

  const handleStart = ()=>{
    timeRef.current = setInterval(() => {
      setTime((val)=>val+1);     
    },1000) 
  }

  const handleStop = ()=>{
    clearInterval(timeRef.current);
  }

  return (
    <div>
      <span> Mins : {Math.trunc(time/60)} </span>
      <span>Sec : {time%60}</span>
      <br/>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
      
    </div>
  )
}

export default Two
