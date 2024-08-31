import { useEffect, useState } from 'react'
import './App.css'
import gsap from 'gsap'
import Home from './Screen/Home'
// ankush
import { useSelector } from 'react-redux'
import Headroom from 'react-headroom'
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
import WriteToUs from './Screen/WriteToUs'
//kamal
import CareersScreen from './Screen/CareersScreen'
import SpecificCareer from './Screen/SpecificCareer'
import Cartsection from './Components/Cartsection'
import SignIn from './Screen/SignIn'
import Journey from './Screen/Journey'
import Checkout from './Screen/Checkout'
import Orders from './Screen/Orders'
import TrackOrder from './Components/TrackOrder'
import OrderSummary from './Screen/OrderSummary'
import MyProfile from './Screen/MyProfile'
import ErrorPage from './Components/ErrorPage'
import PlayGroup from './Screen/PlayGroup'
import Nursery from './Screen/Nursery'
import LowerLKG from './Screen/LowerLKG'
import UpperUKG from './Screen/UpperUKG'
import TeacherTraining from './Screen/TeacherTraining'
import FreeActivity from './Screen/FreeActivity'

function App({profile,logout}) {
  const items = useSelector((state)=>state.cart)
  const {cartItems} =items
  useEffect(()=>{
      //  document.querySelector('.cartsvg').classList.remove('carticons')
      //  document.querySelector('.cartsvg').classList.add('carticons')
  },[])
    return (
    <> 
    <BrowserRouter>
    <div className='w-12 max-sm:w-10 fixed z-50 cartsvg bottom-24 right-10 max-sm:right-5  ' >
    <div className=" flex  float-end relative ">
          
            <Link className="w-full  " to={`${import.meta.env.VITE_PHONE}`} target='_blank'>
            <img src="pngwing.com.png" alt="" />
           
          
            </Link>
         
          </div>
    </div>
    <div className='w-12 max-sm:w-10 fixed z-50 cartsvg bottom-10 right-10 max-sm:right-5  ' >
    <div className=" flex  float-end relative ">
          
            <Link className="w-full  " to="/cart">
    <img className='' src="pngegg (14) 6.png" alt="" />
              <span
                style={{ left: "25%", bottom: "15%" }}
                className="w-6 h-6 m-auto top-10 max-sm:top-8 -right-4  z-10 absolute text-lg  bg-red-500 rounded-full  text-black text-center"
              >
                {cartItems.length}
              </span>
          
            </Link>
           
          </div>
    </div>
   
  
   
  
       <Headroom className='relative z-50'><Hnavbar/></Headroom>
    <Routes>
      <Route path='/' Component={Home}/>
     <Route path='/preprimary' Component={IPrePrimary}/>
    
     <Route path='/onetoeight' Component={Ionetoeight}/>
     <Route path='/aboutus' Component={Iaboutus}/> 
     <Route path='/singlebook/:id' Component={SingleBookpage}/>
     <Route path='/careers' Component={CareersScreen}/> 
     <Route path='/careers/:id' Component={SpecificCareer}/> 
     <Route path='/cart/:id?' Component={Cartsection}/>
     <Route path='/checkout' Component={Checkout}/>
     <Route path='/SignIn' Component={SignIn}/>
     <Route path='/journey' Component={Journey}/>
     <Route path='/contact' Component={WriteToUs}/>
     <Route path='/myorders' Component={Orders}/>
     <Route path='/trackorder/:id' Component={TrackOrder}/>
     <Route path='/ordersummary' Component={OrderSummary}/>
     <Route path='/myprofile' Component={MyProfile}/>
     <Route path='/error' Component={ErrorPage}/>
     <Route path='/playgroup'Component={PlayGroup}/>
     <Route path='/nursery'Component={Nursery}/>
     <Route path='/lowerlkg'Component={LowerLKG}/>
     <Route path='/upperukg'Component={UpperUKG}/>
     <Route path='/teachertraining'Component={TeacherTraining}/>
     <Route path='/freeactivity' Component={FreeActivity}/>
     


     
     </Routes>
     
     <Footer/>
         </BrowserRouter> 
    </>
  )
}

export default App
