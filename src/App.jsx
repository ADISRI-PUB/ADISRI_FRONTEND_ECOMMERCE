import { useEffect, useState } from 'react'
import './App.css'
import gsap from 'gsap'
import Home from './Screen/Home'
// ankush
import { useSelector } from 'react-redux'
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
  const items = useSelector((state)=>state.cart)
  const {cartItems} =items

  useEffect(()=>{
       document.querySelector('.cartsvg').classList.remove('carticons')
       document.querySelector('.cartsvg').classList.add('carticons')
  },[])
    return (
    <> 
    <BrowserRouter>
    <div className='w-12 max-sm:w-10 fixed z-50 cartsvg bottom-10 right-10 max-sm:right-5  ' >
    <div className=" flex  float-end relative ">
            <Link className="w-full  " to="/cart">
    <img className='' src="https://e7.pngegg.com/pngimages/264/321/png-clipart-shopping-cart-computer-icons-symbol-shopping-cart-angle-orange.png" alt="" />
              <span
                style={{ left: "25%", bottom: "15%" }}
                className="w-6 h-6 m-auto top-10 max-sm:top-8 -right-4  z-10 absolute text-lg  bg-red-500 rounded-full  text-black text-center"
              >
                {cartItems.length}
              </span>
          
            </Link>
          </div>
    </div>
    <Hnavbar/>
    <div className="absolute text-black bg-white navbar-small w-full overflow-x-hidden  z-40 transition-all duration-700  ">    
      <br /><br /> <br />
      <Navbar/>
        </div>
<br /> <br />
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
