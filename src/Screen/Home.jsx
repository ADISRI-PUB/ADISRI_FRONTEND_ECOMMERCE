import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import Crousal from "../Components/Crousal";
import OnetoEight from './OnetoEight'
import PrePrimary from "./PrePrimary";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
export default function Home() {
  let count = 0;
  const element = useRef(null);
  useEffect(() => {
    let temp = element.current;
    gsap.to('.pre-books',{
      backgroundColor:"#FCFFE0",
      scrollTrigger:{
        // markers:true,
        trigger:".sections1",
        start:"-30% top",
        end:"-30% -10%"
      }
    })

    gsap.to('._sections2',{
      backgroundColor:"#F4EEFF",
      scrollTrigger:{
        // markers:true,
        trigger:"._sections2",
        start:"-50% top",
        end:"-50% -10%"
      }
    })
    const typed = new Typed(temp, {
      strings: [
        "Books",
        "Primary Books",
        "1th TO 8th Books",
        "Best Series",
        "School TextBooks",
      ],
      typeSpeed: 40,
      loop: true,
      showCursor: false,
      autoInsertCss: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  const menuopen = () => {
  
    if (count == 0) {
      gsap.fromTo('.small-navbar',{
        opacity:0,
        stagger:0.2,
        duration:0.8 
     },{
       opacity:1,
       })
      document.querySelector(".row1").style.transform = "rotate(45deg)";
      document.querySelector(".row2").style.transform = "rotate(-45deg)";
      document.querySelector(".row1").style.top = "0";
      document.querySelector(".row2").style.top = "-2.3vh";
      document.querySelector('.navbar-small').style.transform='translateY(0%)'
      count++;
    } else {
      count = 0;
      gsap.fromTo('.small-navbar',{
        opacity:1,
        stagger:0.3,
        duration:0.9
     },{
       opacity:0,

       })
      document.querySelector('.navbar-small').style.transform='translateY(-200%)'
      document.querySelector(".row1").style.transform = "rotate(0deg)";
      document.querySelector(".row1").style.top = "0px";
      document.querySelector(".row2").style.top = "-2vh";
      document.querySelector(".row2").style.transform = "rotate(0deg)";
      
    
    }
  };

  useEffect(() => {
    // setTimeout(()=>{
    //   document.querySelector('.imagecontainer').classList.remove('overflow-hidden')
    // },2500)



  }, []);
  // sh21: " 0 0 5px white, 0 0 25px white, 0 0 50px white, 0 0 100px white, 0 0 200px white",
  return (
    <>
   
      <div className=" relative w-full z-30 h-navbar  flex justify-between">
        <img
          className=" float-start image-logo  sm:w-1/5 max-sm:w-1/4 "
          src="logo 2.jpg"
          alt=""
        />
        <div
          onClick={menuopen}
          className="float-end cursor-pointer menu z-30 sm:hidden max-sm:visible "
        >
          <span className="row1     inline-block"></span>
          <br />
          <span className="row2 "></span>
        </div>
       
        <div className="nav-content w-1/3 h-full  max-sm:hidden  ">
       
          <div className="flex justify-between nav-text h-full ">
            <Link
              to={"NULL"}
              className="  text-nav rounded-full transition-all duration-200 p-3 "
            >
              HOME
            </Link>
            <Link
              to={"NULL"}
              className=" text-nav rounded-full transition-all duration-200 p-3 "
            >
              PREPRIMARY
            </Link>
            <Link
              to={"NULL"}
              className=" text-nav rounded-full transition-all duration-200 p-3  "
            >
              1<sup>th</sup> TO 8<sup>th</sup>
            </Link>
            <Link
              to={"NULL"}
              className=" text-nav rounded-full transition-all duration-200 p-3 "
            >
              CAREER
            </Link>
            <Link
              to={"NULL"}
              className=" text-nav rounded-full transition-all duration-200 p-3 "
            >
              ABOUT US
            </Link>
          </div>
        </div>
       
        <div className="loginbutton w-1/4 relative flex space-x-3 max-sm:hidden  ">
          <div className=" w-2/3 flex  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              width="10vw"
              fill="#000"
            >
              <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
            </svg>
            <p className="cursor-pointer text-login">Login/signUp</p>
          </div>
        </div>
      
      </div>
      <div>
     
      </div>
    
      <div className="home-area z-20 bg-emerald-200 leading-snug">
      <div className="absolute navbar-small nav-closed z-20 transition-all duration-700 ">
        <Navbar/>
        </div>
        <p className="welcome-text p-3 text-center  block ">Welcome To,</p>
        <p className="brandtext ">Adisri Publications</p>
        <div className="auto-text-container">
          <div className="   m-auto flex justify-center">
            <div className="text-center inline deals-text  ">We Deals In-</div>
            <p className="text-white  deals-text inline" ref={element} />
          </div>
        </div>
        <br />
        <div className="w-11/12 relative overflow-hidden m-auto z-10 ">
          <Crousal />
        </div>
        <div className="sections1 ">
          <PrePrimary />
          <OnetoEight/>
        </div>
      </div>
    </>
  );
}
