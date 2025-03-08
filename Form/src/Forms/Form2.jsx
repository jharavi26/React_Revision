import React, { useRef, useState } from 'react'

function Form2() {

const inputRef = useRef(null);
const passwordRef = useRef(null);
const [state, setState] = useState("")

const handleClick = ()=>{
  setState(inputRef.current.value);
}



  return (
    <div>
   
        <input type='text' placeholder='Enter Your Name' ref ={inputRef}></input>
        <br/>
        <input type='password' placeholder='enter your password' ref = {passwordRef}></input>
        <br/>
        <button onClick={handleClick}>Show-Data</button>
        <p>{state}</p>
       
   
   
      
    </div>
  )
}
 export default Form2;
