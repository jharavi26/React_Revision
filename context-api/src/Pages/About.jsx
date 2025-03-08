import React from 'react'
import { MyContext } from '../context/Context';
import { useContext } from 'react';

function About() {

  const {name, changeName , theme , ToggleTheme } = useContext(MyContext);
  return (
    <div>
      <h1>About</h1>

      <input type = "text" onChange={changeName}></input>
      <p>{name}</p>
      
    </div>
  )
}

export default About
