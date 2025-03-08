import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import { MyContextProvider } from '../context/Context'

function Layout() {
  return (
    <div>
      <Navbar/>
      <Outlet/> 
    </div>
  )
}

export default Layout
