import React, {Suspense , lazy} from 'react';
import { BrowserRouter, Route , Routes } from 'react-router-dom';

const Home = lazy(() => import("../pages/Home"));
const Content = lazy(() => import("../pages/Content"));
const Footer = lazy(() => import("../pages/Footer"));


function Loading() {
  return (
    <BrowserRouter>
     <Suspense fallback={<h2>Loading...</h2>}>
    <Routes>
      <Route path = "/" element = {<Home/>}></Route>
      <Route path = "/content" element = {<Content/>}></Route>
      <Route path = "/footer" element = {<Footer/>}></Route>

    </Routes>
    </Suspense>
  
    </BrowserRouter>
  )
}

export default Loading
