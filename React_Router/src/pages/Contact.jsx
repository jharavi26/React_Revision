import React from 'react'
import { useNavigate } from 'react-router-dom'

function Contact() {

  const navigate = useNavigate();

  const handleClick = ()=>{
    navigate("/dashboard/setting")
  }

  return (
    <div>
      <h1>Contact</h1>
      <button onClick={handleClick}> Go to Setting </button>
    </div>
  )
}

export default Contact
