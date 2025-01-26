import React, { useEffect, useState } from 'react'

const Header = ({name, age, location, arr}) => {

  const [count, setCount] = useState(()=>{
    const savedCount = sessionStorage.getItem("count");
    return savedCount ? JSON.parse(savedCount) : 0;
  });

  const [array, setArray] = useState(arr);

  const [pas, setPaas] = useState("")

  const [flag, setFlag] = useState(true) 

  useEffect(()=>{
    sessionStorage.setItem("count", JSON.stringify(count));
  },[count])
  
 const handleFlag = ()=>{
  setFlag(!flag)

 }

  const Decrement  = ()=>{
    setCount(count-1)

  }
  const Reset = ()=>{
    setCount(0)
  }

  function handleClick(){
    setArray([...array, pas])
  }

  function handleChange(e){
  const art = e.target.value;
  setPaas(art)
  }

  return (
    <div>
      {
        flag ?  <h1 >My name is {name} & age is {age} live in {location}</h1> : ""

      }

      
      <button onClick={handleFlag}>Toggle H1</button>
      {
        <ul>
          {
            array.map((item, index)=>(
              <li key = {index}>{item}</li>
            ))
          }
        </ul>  
      }
      
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <p>Count is {count}</p>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
 
      <button onClick={handleClick}>Add To Array</button>
      <br></br>
      <input type= "text" placeholder='enter your name' onChange={handleChange}></input>
    {
      (count===10 ? "Counter Value is : 10" : "")
    }
     
     
    </div>
  )
}

export default Header
