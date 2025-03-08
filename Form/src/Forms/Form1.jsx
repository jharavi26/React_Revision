import React, { useState } from 'react'

function Form1() {
  const [inputValue , setInputValue] = useState("");
  const [checked , setChecked] = useState(false);
  const [gender , setGender] = useState("");
  const [sport, setSport] = useState("")
 
  const handleChange = (e)=>{
    setInputValue(e.target.value)
  }

  const handleChecked = ()=>{
    setChecked(!checked)
  }

  const handleRadio = (e)=>{
    setGender(e.target.value);
    console.log(e.target.value)
  }

  const handleSelect = (e)=>{
    setSport(e.target.value);
  }

  return (
    <div>
      <label>Name :
      <input type='text' placeholder='Enter Your Name' value = {inputValue} onChange={handleChange} />
      <p>{inputValue}</p>
      </label>

      <label> CheckBox :
        <input type='checkbox' checked = {checked} onChange={handleChecked}></input>
      </label>

      <label>
        <input type='radio' value = "male" checked = {gender === "male"} onChange={handleRadio}></input>
        Male:
      </label>
      <label>
        <input type='radio' value = "female" checked = {gender === "female"} onChange={handleRadio}></input>
        Female:
      </label>
      <label>
        <select value={sport} onChange = {handleSelect}>
          <option value = "cricket">Cricket</option>
          <option value = "Football">Football</option>
          <option value = "Tennis">Tennis</option>
          <option value = "Shooting">Shooting</option>
        </select>
      </label>


      
    </div>
  )
}

export default Form1