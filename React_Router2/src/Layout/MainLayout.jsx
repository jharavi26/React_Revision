import React from 'react';
import Navbar from '../../React_Router/src/components/Navbar';
import { Outlet } from 'react-router';


function MainLayout() {
  return (
    <div>
      <Navbar/>
      <div className='container'>
      <Outlet/>
      </div>
      
      
    </div>
  )
}

export default MainLayout
