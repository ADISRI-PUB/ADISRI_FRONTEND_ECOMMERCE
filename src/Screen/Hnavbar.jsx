//Hnavbar
import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";
import gsap from "gsap";
import "../Css/Home.css";
import { logout } from "../actions/UserAction";
import PopUp from "../Components/PopUp";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllOrderDetails } from '../actions/OrderActions'
function Hnavbar() {
  //kamal
 const [flag ,setflag] =useState(false)
  const home =useNavigate()
//  ANKUSH WORK //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 const dispatch =useDispatch()
 let {userprofile} =useSelector((state)=>state.user)
  const handleprofile =()=>{
 

   document.querySelector('#profilearrow').classList.toggle('rotate-180')
   document.querySelector(".drop-down").classList.toggle('hidden')
   document.querySelector(".drop-down").classList.toggle('show')
   document.querySelector(".click").classList.toggle("hidden")
  }
  
 
  useEffect(() => { 
    if(Object.keys(userprofile).length!=0  ){
   setflag(true)
   let path = window.location.pathname

     if (path=='/SignIn') {
       
        home("/")
     }
    }
    else{
         setflag(false)
    }
  }, [userprofile]);
 
  //kamal
  let count = 0;
  
  
  const menuopen = () => {
    if (document.querySelector('.list-dropdown').classList.contains('hidden')) {  
    }
    else{
      document.querySelector('.list-dropdown').classList.add('hidden')
    }
    
    if (count == 0) {
      gsap.fromTo(
        ".small-navbar",
        {
          opacity: 0,
          stagger: 0.2,
          duration: 0.8,
          delay: 0.2,
        },
        {
          delay: 0.2,
          stagger: 0.2,
          opacity: 1,
        }
      );
      document.querySelector(".row1").style.transform = "rotate(45deg)";
      document.querySelector(".row2").style.transform = "rotate(-45deg)";
      document.querySelector(".row2").style.marginTop = "-1px";
      document.querySelector(".navbar-small").style.transform =
        "translateY(0%)";
      count++;
    } else {
      count = 0;
      gsap.fromTo(
        ".small-navbar",
        {
          opacity: 1,
          stagger: 0.3,
          duration: 0.9,
        },
        {
          opacity: 0,
        }
      );
      document.querySelector(".navbar-small").style.transform =
        "translateY(-200%)";
      document.querySelector(".row1").style.transform = "rotate(0deg)";
      document.querySelector(".row2").style.transform = "rotate(0deg)";
      document.querySelector(".row2").style.marginTop = "12px";
    }
  };
  const removepopup = () => {
    document.querySelector(".pop-up").classList.add("hidden");
  };
  const show = () => {
    document.querySelector(".pop-up").classList.remove("hidden");
  };
  const hide = () => {
    let popup = setTimeout(() => {
      if (document.querySelector(".pop-up").classList.contains(".show-popup")) {
        clearInterval(popup);
      } else {
        document.querySelector(".pop-up").classList.add("hidden");
        document.querySelector(".pop-up").classList.add("hidden");
      }
    }, 160);
    document.querySelector(".pop-up").classList.remove("show");
  };


  const orderAll =(e)=>{
    e.preventDefault()
    dispatch(getAllOrderDetails())
    home('/myorders')
  }

  return (
    <>
    <div onClick={handleprofile} className="w-screen h-screen bg-transparent absolute click  hidden">

    </div>
    <div className="block ">
      <div className=" z-50 w-full sticky top-0  h-navbar bg-white/50 backdrop-blur-sm border-b-2 border-white  flex justify-between  max-sm:p-0 max-sm:h-max ">
       <Link to='/' className="float-start image-logo  sm:min-w-36 sm:max-w-96 min-w-32 max-sm:w-2/3"> <img
          className=""
          src="ADISRI LOGO 2.png"
          alt=""
        />
        </Link>

        <div
          onClick={menuopen}
          className="float-end cursor-pointer menu z-30 sm:hidden max-sm:visible  relative  rounded-lg top-1 right-2 flex logg justify-center  "
        >
           <div className="">
          <span className="row1 h-0.5  max-sm:w-6 transition-all duration-200   bg-black block"></span>

          <span className="row2 mt-3  h-0.5 max-sm:w-6 transition-all duration-200 bg-black block "></span>
          </div>
        </div>

        <div className="nav-content w-1/3 h-full  max-sm:hidden  ">
          <div className="flex justify-between nav-text h-full ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-homebutton rounded-full p-3 transition-all duration-200"
                  : " "
              }
            >
              HOME
            </NavLink>
            <NavLink
              to="/preprimary"
              className={({ isActive }) =>
                isActive
                  ? "bg-primarybutton p-3 rounded-full transition-all duration-200"
                  : ""
              }
            >
              PRE-PRIMARY
            </NavLink>
            <NavLink
              to="/onetoeight"
              className={({ isActive }) =>
                isActive
                  ? "bg-onetoeightbutton  active p-3 rounded-full transition-all duration-200"
                  : ""
              }
            >
              1<sup>st</sup> TO 8<sup>th</sup>
            </NavLink>

            <NavLink
              to="/aboutus"
              onClick={removepopup}
              onMouseEnter={show}
              onMouseLeave={hide}
              className={({ isActive }) =>
                isActive
                  ? "text-nav-about  bg-aboutusbutton rounded-full transition-all duration-200 p-3 space-x-2 flex "
                  : ""
              }
            >
              <span>ABOUT US</span>
            </NavLink>
           
           
          </div>
        </div>

        <div className="loginbutton   w-1/4  flex logg justify-center relative  max-sm:hidden   ">
          
          
          <div className="  w-full justify-center   ">
          {
            flag  ?(
              <>
                <div className="w-4/5 flex justify-center  ">
                <div className="space-x-3 flex   ">
                <div  className=" trainsition-all duration-500  space-x-2 relative cursor-pointer bg-blue-400 rounded-lg    flex logg m-auto  justify-center  hover:bg-blue-200 text-black  " onClick={()=>{
                  handleprofile() 
                }
                }>
                  {/* <h6 style={{fontSize:"0.8vw"}}>{(userprofile.name).split(" ")[0]}</h6>
                  <svg id="profilearrow" className="rotate-90" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg> */}
                  <button id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation" className="text-white relative  nav-text    font-medium rounded-lg  px-5 py-2.5 text-center inline-flex items-center   " type="button">{(userprofile.name).split(" ")[0]}<svg className=" transition-all duration-200 w-2.5 h-2.5 ms-3 " id="profilearrow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"  d="m1 1 4 4 4-4"/>
</svg>
              
                <div className=" transition-all duration-150 translate-y-12 w-full drop-down rounded-lg -top-1 left-0 bg-blue-100 absolute hidden text-black" >
                  <ul className=" text-sm ">
                    <Link to='/myprofile' className=" transition-all duration-200 border-b-2 p-1 flex border-white hover:bg-blue-300 space-x-1 "> <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg> <span>My Profile</span></Link>
                    <button onClick={(e)=>{
                      orderAll(e)
                    }}>
                     <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000">
                     <path d="M160-160v-516L82-846l72-34 94 202h464l94-202 72 34-78 170v516H160Zm240-280h160q17 0 28.5-11.5T600-480q0-17-11.5-28.5T560-520H400q-17 0-28.5 11.5T360-480q0 17 11.5 28.5T400-440ZM240-240h480v-358H240v358Zm0 0v-358 358Z"/>
                     </svg> <span> Orders</span></button>
                     <p>--</p>
                  <li onClick={()=>{
                         googleLogout()
                        dispatch(logout())
                        setflag(false)
                  }} className=" transition-all duration-200 p-2 hover:bg-blue-300 flex space-x-1  "> <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg><span> Sign Out</span></li>
                 
                    
               
                  </ul>
                  
               </div>
</button>
                  </div> 
                  <img
                    className=" w-10  h-10  bg-blue-200  rounded-full "
                     src={userprofile.picture}
                     alt={userprofile.name}
                  />
                     
                  </div>
                  
            
                </div>
              
              </>
            ):(
              <Link to='/SignIn' className="transition-all duration-200 flex hover:scale-125  loginbuttons    m-auto   ">
              <button
  aria-label="Sign in with Google "
  className="flex logg bg-black text-white    rounded-full p-0.5 pr-4  "
>
  <div className="flex items-center justify-center bg-white w-9 h-9 rounded-full">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        className="fill-google-logo-blue"
      ></path>
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        className="fill-google-logo-green"
      ></path>
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        className="fill-google-logo-yellow"
      ></path>
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        className="fill-google-logo-red"
      ></path>
    </svg>
  </div>
  <span className="text-sm text-google-text-gray tracking-wider ml-2">Sign/Google </span>
</button>
              </Link>
            )}
            
          </div>
        </div>
      </div>
      <div className="fixed w-3/5 m-auto top-20 right-12 z-50">
        <PopUp />
      </div>
      </div>
      
    </>
  );
}

export default Hnavbar;
