import React, { useContext, useState } from 'react'
import { MyContext } from './Context/context'

function Bonus() {

  const {text, setText} = useContext(MyContext);

  const handleChange = ()=>{
    setText("Ravikumar")
  }

  
  return (
    <div>
      <button onClick={handleChange}>Change</button>
      <p>{text}</p>

    </div>

  )
}

export default Bonus
