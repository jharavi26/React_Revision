import { useEffect, useRef, useState } from 'react'
import './App.css'


function App() {
  const [value, setValue] = useState("");
  const [text, setText] =useState("")

  const timeoutRef = useRef(null);

  useEffect(()=>
  {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(()=>{
      setText(value);
    },2000)

    return ()=>clearTimeout(timeoutRef.current);
  },[value])
    
  
const handleChange =(e)=>{
 setValue(e.target.value)
} 
  
  return (
    <>
    <h1>Debouncing Concept </h1>
    <input type="text" placeholder='enter the text' value={value} onChange={handleChange}></input>
    <p>{text}</p>
    
     </>
  )
}

export default App
