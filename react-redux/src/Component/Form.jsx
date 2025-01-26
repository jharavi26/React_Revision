import React, { useState } from 'react'

const Form = () => {

  const initialState = {
    username :"",
    name :"",
    age :""
  };

  const [value, setValue] = useState(initialState)

  const [display, setDisplay] = useState(false)

  const handleChange=(e)=>{
    const {name, value} = e.target;
    setValue((prevState)=>({...prevState,
      [name]: value}));
  }

 function handleClick(){
  setData(value)
 }

 const printValues=(e)=>{
  e.preventDefault();
  setDisplay(true)
 }

  return (
    <div>
      <form onSubmit={printValues}>
      <div><label htmlFor="UserName">
      UserName:
      <input type='text' placeholder='username' onChange={handleChange} value={value.username} name = "username" /></label></div>
      <div><label>Name:</label><input type = "text" placeholder='Name' onChange={handleChange} value={value.name} name  = "name" /></div>
      <div><label>Age:</label><input type = "number" placeholder='Age' onChange={handleChange} value={value.age} name = "age"/></div>
      <button onClick = {handleClick}>Submit</button><br/>
      </form>
      
      {
        display && <div>
          <h2>Request sent data to DataBase</h2>
          <ul>
            <li>UserName:  {value.username.toUpperCase()}</li>
            <li>Name:  {value.name.toUpperCase()}</li>
            <li>Age:  {value.age.toUpperCase()}</li>
          </ul>
        </div>

      }
    </div>
  )
}

export default Form
 