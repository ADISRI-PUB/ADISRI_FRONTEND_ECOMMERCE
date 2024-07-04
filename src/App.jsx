import { useEffect, useState } from 'react'
import './App.css'
import gsap from 'gsap'
import Home from './Screen/Home'

import { BrowserRouter } from 'react-router-dom'
import { Route ,Routes } from 'react-router-dom'
import IPrePrimary from './Screen/IPrePrimary'
import Ionetoeight from './Screen/Ionetoeight'
import Iaboutus from './Screen/Iaboutus'
import { Link}  from 'react-router-dom'
import Hnavbar from './Screen/Hnavbar'
import Footer from './Screen/Footer'
import PopUp from './Components/PopUp'
import Navbar from './Screen/Navbar'
function App() {
 
  
    return (
    <> 
    <BrowserRouter>
    <Hnavbar/>
    <div className="absolute text-black navbar-small nav-closed z-20 transition-all duration-700 ">    
      <Navbar/>
        </div>
 
    <div className="w-3/5 m-auto z-20 absolute left-1/3 ">
    <PopUp />
       </div>
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
