import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div style={{display : "flex" , justifyContent : "center" , gap: "100px"}}>
      <nav style={{display : "flex" , gap : "10px" , textDecoration : "none" }}>
        <Link to = "/" >Home</Link>
        <Link to = "/about">About</Link>
        <Link to = "/contact">Contact</Link>
      </nav>
      
    </div>
  )
}

export default Navbar
