import { useEffect, useState } from 'react'
import './App.css'
import gsap from 'gsap'
import Home from './Screen/Home'
import Section from './Screen/Section'
import { BrowserRouter } from 'react-router-dom'
import { Route ,Routes } from 'react-router-dom'
import IPrePrimary from './Screen/IPrePrimary'
import Ionetoeight from './Screen/Ionetoeight'
import Iaboutus from './Screen/Iaboutus'
import { Link}  from 'react-router-dom'
import Hnavbar from './Screen/Hnavbar'
import Footer from './Screen/Footer'
function App() {
 
    return (
    <> 
    <BrowserRouter>
    <Hnavbar/>
    <Routes>
      <Route path='/' Component={Home}/>
     <Route path='/preprimary' Component={IPrePrimary}/>
     <Route path='/onetoeight' Component={Ionetoeight}/>
     <Route path='/aboutus' Component={Iaboutus}/> 
    
     </Routes>
     <Footer/>
     </BrowserRouter> 
    </>
  )
}

export default App
