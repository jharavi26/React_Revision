import React, { useEffect, useRef, useState } from 'react'

const Conainer = () => {

  const [timer, setTimer] = useState(10);
  const [count, setCount] = useState(0);

  let id = useRef(null);

  const clear = ()=> window.clearInterval(id.current)

  useEffect(()=>{
    id.current = setInterval(()=>{
        setTimer((prevTimer)=> prevTimer-1);
  },1000) 
  return clear;
  },[])

  useEffect(()=>{
    if(timer===0){
      clear();
    }
  },[timer])

  return (
    <div>
       <h1 style={{fontSize:"20px"}}>Number of Click until time expire</h1>
      <div style = {{width:"350px", height:"300px", backgroundColor:"aqua", marginLeft:"350px"}}>
      <p>Time left is :{timer}</p>
      <p style={{color:"black"}}>Current Count is :{count}</p>
      {timer ==0 ? null : <button style = {{marginTop:"150px"}} onClick={()=>setCount(count+1)}>Number of Clicks</button>}
      </div>
      
    </div>
  )
}

export default Conainer
