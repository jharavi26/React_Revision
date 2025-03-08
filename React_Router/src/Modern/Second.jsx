import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'

function Second() {

const router = createBrowserRouter([
  {
    path : "/",
    element : <Home/>,
  },
  {
    path : "/about",
    element : <About/>
  },
  {
    path : "/Contact",
    element : <Contact/>
  },
  
])

  return <RouterProvider router={router}>

  </RouterProvider>
}

export default Second
