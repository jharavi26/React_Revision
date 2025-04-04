import React, { useContext } from 'react';
import "./App.css";
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Content from './Pages/Content'
import { MyContext, MyContextProvider } from './context/Context';
import Navbar from './components/Navbar';


function App() {
  const { theme } = useContext(MyContext);
  return (
    <div className = {theme === "light" ? "light" : "dark"}>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/content' element={<Content/>}></Route>
      <Route path='/about' element={<About/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
