import React, { useCallback, useState } from 'react'
import Callback1 from './Callback1';

function Callback2() {

  const arr = ["art", "arti","ravi", "rajan" , "rahul" , "anuj"];
  const[search ,setSearch ] = useState("");
  const[toggle , setToggle] = useState(false);

  const filterNames =  useCallback(()=>{
    return arr.filter((name)=> name.toLowerCase().includes(search.toLowerCase()))
  },[search])



  const handleChange = (e)=>{
    setSearch(e.target.value);
  }

  const handleToggle = ()=>{
    setToggle(!toggle)
  }

  return (
    <div>
      <div style={{backgroundColor : toggle ? "black" : "white" , color : toggle ? "white" : "black" , width : "100%" , height : "200px"}}>
      <input type='text' placeholder='enter the name for search' value = {search} onChange={handleChange}/> 
      <Callback1 filterNames = {filterNames} />
      <button onClick={handleToggle}>Toggle</button>
      </div>
      
      
    </div>
  )
}

export default Callback2
