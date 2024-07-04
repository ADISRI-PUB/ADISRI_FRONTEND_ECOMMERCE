import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import '../Css/Home.css'
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import Crousal from "../Components/Crousal";
import OnetoEight from "./OnetoEight";
import PrePrimary from "./PrePrimary";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutUS from "./AboutUS";
import Clients from "../Components/Cilents"; 
import Footer from "./Footer";
import PopUp from "../Components/PopUp";
import Hnavbar from "./Hnavbar";
gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  let count = 0;
  const element = useRef(null);
  useEffect(() => {
    let temp = element.current;

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
 
  // const show = () => {
  //   document.querySelector(".arrow-svg").classList.add("rotate-90");
  //   document.querySelector(".arrow-svg").classList.remove("-rotate-90");
  //   document.querySelector(".arrow-svg").setAttribute("fill", "#FFFFFF");
  //   document.querySelector(".pop-up").classList.remove("hidden");
  //   document.querySelector(".pop-up").classList.add("show");
  //   let element = document.querySelector(".text-nav-about");
  //   element.classList.add("active");
  //   console.log(element);
  // };
  // const hide = () => {
  //   document.querySelector(".arrow-svg").classList.remove("rotate-90");
  //   document.querySelector(".arrow-svg").classList.add("-rotate-90");
  //   document.querySelector(".pop-up").classList.add("hidden");
  //   document.querySelector(".text-nav-about").classList.toggle("active");
  //   document.querySelector(".pop-up").classList.remove("show");
  // };

  // sh21: " 0 0 5px white, 0 0 25px white, 0 0 50px white, 0 0 100px white, 0 0 200px white",
  return (
    <>
    
       {/* <Hnavbar/> */}
      <div className="home-area z-20  leading-snug">
       
     
        <p className="welcome-text p-3 text-center  block ">Welcome To,</p>
        <p className="brandtext ">Adisri Publications</p>
        <div className="auto-text-container">
          <div className="   m-auto flex justify-center">
            <div className="text-center inline deals-text  ">We Deals In-</div>
            <p className="text-white  deals-text inline" ref={element} />
          </div>
        </div>
        <br />
        <div className=" ">
          <Crousal />
          {/* <Clients/> */}
        </div>
        <div className="sections1 ">
          <PrePrimary />
          <OnetoEight />

          <AboutUS />

          
        </div>
      </div>
    </>
  );
}
