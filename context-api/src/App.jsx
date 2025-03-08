import React, { useContext } from 'react';
import "./App.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Content from './Pages/Content'
import { MyContext, MyContextProvider } from './context/Context';


const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout/>,
    children : [
      {
        path : "/",
        element : <Home/>
      },
      {
        path : "/about",
        element : <About/>
      },
      {
        path : "/Content",
        element : <Content/>,
      }
    ],
  }
])

function App() {
  const { theme } = useContext(MyContext);
  return (
    <div className = {theme === "light" ? "light" : "dark"}>

      <RouterProvider router={router}/>

    </div>
  )
}

export default App
