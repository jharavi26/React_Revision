import React from 'react'
import {NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src="https://www.shutterstock.com/shutterstock/photos/2278726727/display_1500/stock-vector-minimalistic-circular-logo-sample-vector-2278726727.jpg" style={{ width: '100px', height: '80px' }} alt="Icon Image"/>
{/*
 
Navigation menu using NavLink to provide routing functionality
Each NavLink wraps a list item li representing a clickable navigation option
Active styling can be applied to NavLink elements to highlight the active route */}


      <ul>
        <NavLink to='/'><li>Home </li></NavLink>
        <NavLink to='/products'><li>Products</li></NavLink>
        <NavLink to='/about'><li>About</li></NavLink>
        <NavLink to='/contact'><li>Contact</li></NavLink>
      </ul>
      <button>Get Started</button>
      
    </div>
  )
}

export default Navbar
