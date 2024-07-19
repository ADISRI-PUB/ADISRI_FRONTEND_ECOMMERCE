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
import SingleBookpage from './Components/SingleBookpage'

//kamal
import CareersScreen from './Screen/CareersScreen'
import SpecificCareer from './Screen/SpecificCareer'
import Cartsection from './Components/Cartsection'
import SignIn from './Screen/SignIn'


function App({profile,logout}) {
 
    return (
    <> 
    <BrowserRouter>
    <div className='z-20 '>
    <Hnavbar/>
    </div>
   <br />
    <div className="absolute text-black navbar-small w-full overflow-x-hidden  z-40 transition-all duration-700  ">    
      <Navbar/>
        </div>
 
    <br />
    <Routes>
      <Route path='/' Component={Home}/>
     <Route path='/preprimary' Component={IPrePrimary}>
     </Route>
     <Route path='/onetoeight' Component={Ionetoeight}/>
     <Route path='/aboutus' Component={Iaboutus}/> 
     <Route path='/singlebook/:id' Component={SingleBookpage}/>
     <Route path='/careers' Component={CareersScreen}/> 
     <Route path='/careers/:id' Component={SpecificCareer}/> 
     <Route path='/cart/:id?' Component={Cartsection}/>
     <Route path='/SignIn' Component={SignIn}/>
     
     </Routes>
     
     <Footer/>
         </BrowserRouter> 
    </>
  )
}

export default App
