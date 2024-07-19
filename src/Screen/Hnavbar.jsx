import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import gsap from "gsap";
import "../Css/Home.css";
import PopUp from "../Components/PopUp";
import { useDispatch, useSelector } from "react-redux";
import { Logindata} from "./SignIn";
function Hnavbar({ profile, logout }) {
  const  [imageprofile,setimageProfile] =useState('pngegg (14).png')
  const [signintext,setsignintext] =useState('Login/Signup')
  let count = 0;
  const items = useSelector((state)=>state.cart)
  const {cartItems} =items
  useEffect(()=>{
         if (profile) {
          setimageProfile(profile["picture"])
          setsignintext('Logout')
    console.log(Logindata);
          console.log(profile);
         }
         else{
          setimageProfile('pngegg (14).png')
          setsignintext('Login/signup')
         }
  },[profile])
  const menuopen = () => {
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
      document.querySelector(".row2").style.marginTop = "0px";
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

  return (
    <>
      <div className=" z-50 w-full fixed h-navbar bg-white/50 backdrop-blur-sm border-b-2 border-white  flex justify-between   ">
       <Link to='/' className="float-start image-logo  sm:w-1/5 max-sm:w-2/3"> <img
          className="    "
          src="ADISRI LOGO 2.png"
          alt=""
        />
        </Link>

        <div
          onClick={menuopen}
          className="float-end cursor-pointer menu z-30 sm:hidden max-sm:visible  relative  top-4 right-2  "
        >
          <span className="row1 h-0.5  max-sm:w-6 transition-all duration-200   bg-black block"></span>

          <span className="row2 mt-3  h-0.5 max-sm:w-6 transition-all duration-200 bg-black block "></span>
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
                  : " "
              }
            >
              PREPRIMARY
            </NavLink>
            <NavLink
              to="/onetoeight"
              className={({ isActive }) =>
                isActive
                  ? "bg-onetoeightbutton  active p-3 rounded-full transition-all duration-200"
                  : ""
              }
            >
              1<sup>th</sup> TO 8<sup>th</sup>
            </NavLink>

            <NavLink
              to="/aboutus"
              onClick={removepopup}
              onMouseEnter={show}
              onMouseLeave={hide}
              className={({ isActive }) =>
                isActive
                  ? "text-nav-about  bg-aboutusbutton rounded-full transition-all duration-200 p-3 space-x-2 flex "
                  : " "
              }
            >
              <span>ABOUT US</span>
            </NavLink>
          </div>
        </div>

        <div className="loginbutton    w-1/4 flex justify-center  relative space-x-3 max-sm:hidden   ">
          <div className="w-1/2  flex  float-end ">
            <Link className="w-full" to="/cart">
              <span
                style={{ left: "25%", bottom: "15%" }}
                className="w-6 h-6 m-auto z-10  rounded-full absolute bg-black text-white text-center"
              >
                 {cartItems.length}
              </span>
              <svg
                className="m-auto cursor-pointer relative z-0"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="40px"
                version="1.1"
                id="Layer_1"
                viewBox="0 0 505 505"
                xmlSpace="preserve"
              >
                <circle
                  style={{ fill: "#FD8469" }}
                  cx="252.5"
                  cy="252.5"
                  r="252.5"
                />
                <path
                  style={{ fill: "#324A5E" }}
                  d="M381.6,265.9c-3.1,0-5.7-2.5-5.7-5.7c0-72.6-55.4-131.6-123.4-131.6s-123.4,59-123.4,131.6  c0,3.1-2.5,5.7-5.7,5.7s-5.7-2.5-5.7-5.7c0-78.8,60.4-142.9,134.7-142.9s134.7,64.1,134.7,142.9  C387.2,263.4,384.7,265.9,381.6,265.9z"
                />
                <path
                  style={{ fill: "#FFD05B" }}
                  d="M384.7,259.1c-122.6,27.7-244.4,4.2-264.3,0c-1.3-0.3-2.5,0.9-2.3,2.3l24.2,128  c2.4,12.9,13.8,22.3,26.9,22.3h166.7c13.2,0,24.5-9.4,26.9-22.3l24.2-128C387.2,259.9,386,258.8,384.7,259.1z"
                />
                <path
                  style={{ fill: "#F9B54C" }}
                  d="M383.8,278.1l3.2-16.8c0.3-1.4-1-2.5-2.3-2.2c-122.6,27.7-244.4,4.2-264.3,0  c-1.3-0.3-2.5,0.9-2.3,2.3l3.2,16.8C143.5,282.7,263.2,305.1,383.8,278.1z"
                />
                <g>
                  <path
                    style={{ fill: "#CED5E0" }}
                    d="M236.2,133.2c0,0-28.9,32.8-13.4,72.9l9.5-9.5l10.1,9.5c0,0-12-44.4,8.7-64.7"
                  />
                  <path
                    style={{ fill: "#CED5E0" }}
                    d="M268.8,133.2c0,0,28.9,32.8,13.4,72.9l-9.5-9.5l-10.1,9.5c0,0,12-44.4-8.7-64.7"
                  />
                </g>
                <g>
                  <path
                    style={{ fill: "#E6E9EE" }}
                    d="M306.9,120.6c-1.2,13.6,21,35.9-24.6,24.6c-13.2-3.3-29.7-11-29.7-24.6s16.5-21.5,29.7-24.6   C328.1,85.1,307.7,111,306.9,120.6z"
                  />
                  <path
                    style={{ fill: "#E6E9EE" }}
                    d="M198.1,120.6c1.2,13.6-21,35.9,24.6,24.6c13.2-3.3,29.7-11,29.7-24.6S235.9,99.1,222.7,96   C176.9,85.1,197.3,111,198.1,120.6z"
                  />
                </g>
                <circle
                  style={{ fill: "#FFFFFF" }}
                  cx="252.5"
                  cy="120.8"
                  r="20.6"
                />
              </svg>
            </Link>
          </div>
          
          <div className=" w-1/2 flex logg gap-3 relative justify-center p-3 ">
          {
            profile ?(
              <>
                 <div className="logo">
                  {/* <img className="w-1/4" src={profile["picture"]} alt={profile["name"]} />
                  <h2>Welcome, {profile["name"]}!</h2> */}
                </div>
                <div className="profile-info">
                  <button onClick={logout}>Logout</button>
                </div>
               
              </>
            ):(
              <Link to='/SignIn' className="p-3">
              <button
  aria-label="Sign in with Google"
  class="flex items-center bg-black/5 border border-button-border-light rounded-full p-0.5 pr-4"
>
  <div className="flex items-center justify-center bg-white w-9 h-9 rounded-full">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        className="fill-google-logo-blue"
      ></path>
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        class="fill-google-logo-green"
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
  <span className="text-sm text-google-text-gray tracking-wider">Sign with Google</span>
</button>
              </Link>
            )
          }
         
            
           
          </div>
        </div>
      </div>
      <div className="fixed w-3/5 m-auto top-20 right-12 z-50">
        <PopUp />
      </div>
      <div className="sm:h-5 max-sm:relative max-sm:-top-3"></div>
      {/* <Outlet /> */}
      
    </>
  );
}

export default Hnavbar;
