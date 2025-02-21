import React from 'react'
import {Route, BrowserRouter, Routes, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import MainLayout from './Layout/MainLayout'

const App = () => {


  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
    <Route index element={<Home/>} />
    <Route path='/products/:id' element={<Products />}/>
    <Route path='about' element={<About />}/>
    <Route path='contact' element={<Contact/>}/>
    </Route>
   )
  );


  return (
    <RouterProvider router = {router}/>   
  )
}

export default App
