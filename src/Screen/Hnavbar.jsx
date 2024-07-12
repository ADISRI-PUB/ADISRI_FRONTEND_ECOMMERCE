import React, { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./Home";
import gsap from "gsap";
import "../Css/Home.css";
import PopUp from "../Components/PopUp";
function Hnavbar() {
  let count = 0;
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
    setTimeout(() => {
      if (document.querySelector(".pop-up").classList.contains(".show-popup")) {
        clearInterval();
      } else {
        document.querySelector(".text-nav-about").classList.toggle("active");
        document.querySelector(".pop-up").classList.add("hidden");
      }
    }, 200);
    document.querySelector(".pop-up").classList.remove("show");
  };


       
      

  return (
    <>
      <div className=" z-50 w-full fixed h-navbar bg-white  flex justify-between   ">
        <img
          className=" float-start image-logo  sm:w-1/5 max-sm:w-2/3 flex logg  "
          src="logo 2.jpg"
          alt=""
        />

        <div
          onClick={menuopen}
          className="float-end cursor-pointer menu z-30 sm:hidden max-sm:visible  relative  top-4 right-2  h-full"
        >
          <span className="row1 h-0.5  max-sm:w-6 transition-all duration-200   bg-black block"></span>

          <span className="row2 mt-3  h-0.5 max-sm:w-6 transition-all duration-200 bg-black block "></span>
        </div>

        <div className="nav-content w-1/3 h-full  max-sm:hidden  ">
          <div className="flex justify-between nav-text h-full ">
            <NavLink
              to="/"
              className="  text-nav rounded-full transition-all duration-300 p-3 "
            >
              HOME
            </NavLink>
            <NavLink
              to="/preprimary"
              className=" text-nav rounded-full transition-all duration-300 p-3 "
            >
              PREPRIMARY
            </NavLink>
            <NavLink
              to="/onetoeight"
              className=" text-nav rounded-full transition-all duration-200 p-3  "
            >
              1<sup>th</sup> TO 8<sup>th</sup>
            </NavLink>

            <NavLink
              to="/aboutus"
              onMouseEnter={show}
              onMouseLeave={hide}
              className=" text-nav text-nav-about rounded-full transition-all duration-200 p-3 flex space-x-2"
            >
              <p>ABOUT US </p>
              <svg
                className="-rotate-90 arrow-svg  transition-all duration-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                width="1vw"
                fill="#FFFFFF"
              >
                <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
              </svg>
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
                5
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
          <div className=" w-1/2 flex logg  relative justify-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              width="2vw"
              fill="#000"
            >
              <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
            </svg>
            <p className="cursor-pointer text-login">Login/signUp</p>
          </div>
        </div>
      </div>
      <div className="fixed w-3/5 m-auto top-20 right-12 z-50">
        <PopUp />
      </div>
      <div className="sm:h-3"></div>

      <Outlet />
    </>
  );
}

export default Hnavbar;
