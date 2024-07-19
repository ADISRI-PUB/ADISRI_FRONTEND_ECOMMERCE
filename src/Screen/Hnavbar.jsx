//Hnavbar
import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./Home";
import gsap from "gsap";
import "../Css/Home.css";
import PopUp from "../Components/PopUp";
import { useDispatch, useSelector } from "react-redux";

function Hnavbar() {
  //kamal
  const [profile, setProfile] = useState(null);
  const [token, setToken] = useState(null);
  const [userInfo, setuserInfo] = useState(null);

  useEffect(() => {
    const stroedProfile = localStorage.getItem("profile");
    const storedToken = localStorage.getItem("token");

    if (storedToken && stroedProfile) {
      const setuserInfo = "Yes";
      console.log("home ", stroedProfile, storedToken);
    }
  }, []);

  //kamal
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
        <img
          className=" float-start image-logo  sm:w-1/5 max-sm:w-2/3 flex logg  "
          src="ADISRI LOGO 2.png"
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

          <div className=" w-1/2 flex logg gap-3 relative justify-center bg-blue-200 ">
            {profile ? (
              <>
                <div className="logo">
                  <img
                    className="w-1/4"
                    src={profile["picture"]}
                    alt={profile["name"]}
                  />
                  <h2>Welcome, {profile["name"]}!</h2>
                </div>
                <div className="profile-info">
                  <button onClick={logout}>Logout</button>
                </div>
              </>
            ) : (
              <Link to="/SignIn">
                <div className="flex items-center justify-center  bg-gray-100 ">
                  <button className="flex items-center bg-white  border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    <svg
                      className="h-6 w-6 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="800px"
                      height="800px"
                      viewBox="-0.5 0 48 48"
                      version="1.1"
                    >
                      {" "}
                      <title>Google-color</title>{" "}
                      <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                      <g
                        id="Icons"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        {" "}
                        <g
                          id="Color-"
                          transform="translate(-401.000000, -860.000000)"
                        >
                          {" "}
                          <g
                            id="Google"
                            transform="translate(401.000000, 860.000000)"
                          >
                            {" "}
                            <path
                              d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                              id="Fill-1"
                              fill="#FBBC05"
                            >
                              {" "}
                            </path>{" "}
                            <path
                              d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                              id="Fill-2"
                              fill="#EB4335"
                            >
                              {" "}
                            </path>{" "}
                            <path
                              d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                              id="Fill-3"
                              fill="#34A853"
                            >
                              {" "}
                            </path>{" "}
                            <path
                              d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                              id="Fill-4"
                              fill="#4285F4"
                            >
                              {" "}
                            </path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>{" "}
                    </svg>
                    <span>Continue with Google</span>
                  </button>
                </div>
              </Link>
            )}
            
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
