import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../context/Context'

function Navbar() {

  const {toggleTheme} = useContext(MyContext)

  return (
    <div >
      <nav style={{display : "flex" , justifyContent : "center", gap : "10px"}}>
        <Link to = "/">Home</Link>
        <Link to = "/about">About</Link>
        <Link to = "/Content">Content</Link>
        <button onClick={toggleTheme}>☀️</button>
      </nav>
      
    </div>
  )
}

export default Navbar
