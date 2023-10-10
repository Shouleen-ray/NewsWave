import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Newsitem from './components/Newsitem';

export default function App(){
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/'  element={<><Navbar/><News key="science" country={"in"} pagesize={6} category={"general"}/></>}/>
        <Route exact path='/Entertainment'  element={<><Navbar/><News key="entertainment" country={"in"} pagesize={6} category={"entertainment"}/></>}/>
        <Route exact path='/General'  element={<><Navbar/><News key="general" country={"in"} pagesize={6} category={"general"}/></>}/>
        <Route exact path='/Health'  element={<><Navbar/><News key="health" country={"in"} pagesize={6} category={"health"}/></>}/>
        <Route exact path='/Science'  element={<><Navbar/><News key="science" country={"in"} pagesize={6} category={"science"}/></>}/>
        <Route exact path='/Sports'  element={<><Navbar/><News key="sports" country={"in"} pagesize={6} category={"sports"}/></>}/>
        <Route exact path='/Technology'  element={<><Navbar/><News key="technology" country={"in"} pagesize={6} category={"technology"}/></>}/>
      </Routes>          
    </BrowserRouter>
    </>
  )
}