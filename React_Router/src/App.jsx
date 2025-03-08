import React from 'react'
import { BrowserRouter , Route, Routes  } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Navbar from './Component/Navbar'
import ProductDetails from './Pages/ProductDetails'
import Dashboard from './Component/Dashboard'
import Setting from './Pages/Setting'
import NotFound from './Component/NotFound'
import Second from './Modern/Second'



function App() {

  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/about' element = {<About/>} />
        <Route path='/contact' element = {<Contact/>} />
        <Route path = "/product/:id" element = {<ProductDetails/>} />
        <Route path = "/dashboard" element = {<Dashboard/>}>
        <Route path = "setting" element = {<Setting/>}/>
        </Route>
        <Route path = "*" element = {<NotFound/>}/>
      </Routes>

      </BrowserRouter>

{/* <Second/> */}
      
    </div>
  )
}

export default App
