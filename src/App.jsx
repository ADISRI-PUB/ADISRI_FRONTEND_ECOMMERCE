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
import CareersScreen from './Screen/CareersScreen'
import SingleBookpage from './Components/SingleBookpage'
function App() {
  const show = () => {
    document.querySelector(".arrow-svg").classList.add("rotate-90");
    document.querySelector(".arrow-svg").classList.remove("-rotate-90");
    document.querySelector(".arrow-svg").setAttribute("fill", "#FFFFFF");
    document.querySelector(".pop-up").classList.remove("hidden");
    document.querySelector(".pop-up").classList.add("show");
    let element = document.querySelector(".text-nav-about");
    element.classList.add("active");
    console.log(element);
  };
  const hide = () => {
    document.querySelector(".arrow-svg").classList.remove("rotate-90");
    document.querySelector(".arrow-svg").classList.add("-rotate-90");
    document.querySelector(".pop-up").classList.add("hidden");
    document.querySelector(".text-nav-about").classList.toggle("active");
    document.querySelector(".pop-up").classList.remove("show");
  };
  
    return (
    <> 
    <BrowserRouter>
    <div className='z-20 '>
    <Hnavbar/>
    </div>
   <br />
    <div className="absolute text-black navbar-small w-full overflow-x-hidden  z-20 transition-all duration-700  ">    
      <Navbar/>
        </div>
 
    <div className="w-3/5 m-auto z-20 absolute left-1/3 ">
    <PopUp />
       </div>
    <Routes>
      <Route path='/' Component={Home}/>
     <Route path='/preprimary' Component={IPrePrimary}>
     </Route>
     <Route path='/onetoeight' Component={Ionetoeight}/>
     <Route path='/aboutus' Component={Iaboutus}/> 

     <Route path='/singlebook' Component={SingleBookpage}/>
     <Route path='/careers' Component={CareersScreen}/> 
     {/* <Route path='/careers/:id' Component={Career}/>  */}
    
     </Routes>
     
     <Footer/>
         </BrowserRouter> 
    </>
  )
}

export default App
