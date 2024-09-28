import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";
import { Link } from "react-router-dom";
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
export default function Navbar({ menuopen }) {
  const [profile, setProfile] = useState(null);
  const [token, setToken] = useState(null);
  const [flag, setflag] = useState(false);
  const timer = setInterval(() => {
    const stroedProfile = localStorage.getItem("profile");
    const storedToken = localStorage.getItem("token");

    if (storedToken && stroedProfile) {
      setToken(storedToken);
      setProfile(JSON.parse(stroedProfile));
      //  console.log("home ", stroedProfile, storedToken);

      clearInterval(timer);
      setflag(true);
    }
  }, 1000);

  const opendropdown = () => {
    document.querySelector(".list-dropdown").classList.toggle("hidden");
    document.querySelector(".svg-open").classList.toggle("rotate-180");
  };
  const opendropdown2 = () => {
    document.querySelector(".list-dropdown2").classList.toggle("hidden");
    document.querySelector(".svg-open2").classList.toggle("rotate-180");
  };
  const opendropdown3 = () => {
    document.querySelector(".list-dropdown3").classList.toggle("hidden");
    document.querySelector(".svg-open3").classList.toggle("rotate-180");
  };

  const opendropdown4 = (e) => {
    document.querySelector(".list-dropdown4").classList.toggle("hidden");
    document.querySelector(".svg-open4").classList.toggle("rotate-180");
  };

  useEffect(() => {}, [flag]);
  const logout = () => {
    googleLogout();
    localStorage.removeItem("profile");
    localStorage.removeItem("token");
    setProfile(null);
    setToken(null);
    setflag(false);
  };
  let count = 0;

  return (
    <>
        <Accordion>
      <div className="w-[90%] absolute transition-all duration-200  right-0 hidden translate-x-full side-bar bg-white   text-black shadow-black min-h-screen overflow-visible">
        <div className="w-full m-auto text-center relative top-1">
          {flag ? (
            <img
              className="  w-[30%] m-auto border-2 rounded-full p-1 "
              src={profile.picture}
              alt={profile.name}
            />
          ) : (
            <img
              className="w-[30%] m-auto border-2 rounded-full p-1"
              src="PngItem_203432.png"
              alt=""
            />
          )}
          {flag ? (
            <p className=" mt-2 mb-2">
              {" "}
              <Link to="/myprofile">
                <span
                  className="p-2 rounded-lg border w-1/2 m-auto border-gray-200 block text-xs "
                  onClick={menuopen}
                >
                  My Profile
                </span>
              </Link>
            </p>
          ) : (
            <p className="mt-2 mb-2 ">
              <Link to="/SignIn">
                <span
                  className="p-2 rounded-lg border w-1/2 m-auto border-gray-200 block text-xs"
                  onClick={menuopen}
                >
                  signIn/signUp
                </span>
              </Link>
            </p>
          )}
            
       
        </div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "p-3 tex-sm w-full block  "
              : "p-3 tex-sm w-full block"
          }
          onClick={menuopen}
        >
          <span className=" p-3 "> HOME</span>
        </NavLink>
        <AccordionItem
        header={({ state }) => (
          <div className="accordion-header flex ">
            <span className="px-3 ml-3 text-[1rem]">PRE SCHOOL SOLUTIONS</span>
            <span className={`arrow ${state.isExpanded ? 'expanded' : 'notexpended'} `}><svg  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M480-360 280-560h400L480-360Z"/></svg>
            </span>
          </div>
        )}
      >
         <Link className="left-0 font-normal p-2 ml-5 relative top-2  block     border-b-[1px] " to="/preprimary"onClick={menuopen} >PRE SCHOOL SOLUTIONS</Link>
              <Link to='/customizedcorner' className="left-0 font-normal p-2 ml-5 block   border-b-[1px] "  onClick={menuopen} >Customized Corner</Link>
              <Link to='/playgroup' className="left-0 font-normal p-2 ml-5  block   border-b-[1px] "  onClick={menuopen} >PlayGroup</Link>
              <Link to='/nursery' className="left-0 font-normal p-2 ml-5 block   border-b-[1px] "  onClick={menuopen} >Nursery</Link>
              <Link to='/lowerlkg' className="left-0 font-normal p-2 ml-5 block    border-b-[1px] "  onClick={menuopen} >Lower (LKG)</Link>
              <Link to='/upperukg' className="left-0 font-normal p-2 ml-5  block   border-b-[1px] "  onClick={menuopen} >Upper (UKG)</Link>
              <Link to='/teachertraining' className="left-0 font-normal ml-5 p-2  block   border-b-[1px] "  onClick={menuopen} >Teacher Training Program</Link>
                  <Link to='/freeactivity' className="left-0 font-normal ml-5 p-2 block    border-b-[1px] "  onClick={menuopen} >Free Activity Sheets</Link>
                  {/* <Link to='/freeactivity' className="left-0 font-normal ml-5 p-2 block    border-b-[1px] "  onClick={menuopen} >Free Activity Sheets</Link> */}
      </AccordionItem>
         {/* <AccordionItem className="px-6 tex-sm w-full block " header={`PRE SCHOOL SOLUTIONS`} >
              <Link className="left-0 font-normal p-2 relative top-2  block " to="/preprimary"onClick={menuopen} >PRE SCHOOL SOLUTIONS</Link>
              <Link to='/customizedcorner' className="left-0 font-normal p-2  block"  onClick={menuopen} >Customized Corner</Link>
              <Link to='/playgroup' className="left-0 font-normal p-2  block"  onClick={menuopen} >PlayGroup</Link>
              <Link to='/nursery' className="left-0 font-normal p-2  block"  onClick={menuopen} >Nursery</Link>
              <Link to='/lowerlkg' className="left-0 font-normal p-2 block "  onClick={menuopen} >Lower (LKG)</Link>
              <Link to='/upperukg' className="left-0 font-normal p-2  block"  onClick={menuopen} >Upper (UKG)</Link>
              <Link to='/teachertraining' className="left-0 font-normal p-2  block"  onClick={menuopen} >Teacher Training Program</Link>
                  <Link to='/freeactivity' className="left-0 font-normal p-2 block "  onClick={menuopen} >Free Activity Sheets</Link>
           </AccordionItem> */}
        <AccordionItem
        header={({ state }) => (
          <div className="accordion-header flex  py-4">
            <span className="px-3 ml-3 text-[1rem]">SCHOOL SOLUTIONS</span>
            <span className={`arrow ${state.isExpanded ? 'expanded' : 'notexpended'} `}><svg  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M480-360 280-560h400L480-360Z"/></svg>
            </span>
          </div>
        )}
      >
        <div className="">
         <Link className="left-0 font-normal p-2 ml-5 block border-b-[1px]" to="/onetoeight"onClick={menuopen} >SCHOOL SOLUTIONS</Link>
              <Link to='/customizedcorner' className="left-0 font-normal p-2 ml-5 block border-b-[1px]"  onClick={menuopen} >Customized Corner</Link>
              <Link to='/teachertraining' className="left-0 font-normal ml-5 p-2  block border-b-[1px]"  onClick={menuopen} >Teacher Training Program</Link>
                  <Link to='/freeactivity' className="left-0 font-normal ml-5 p-2 block border-b-[1px]"  onClick={menuopen} >Free Activity Sheets</Link>
                  </div>
                  <br />
      </AccordionItem>
        {/* <NavLink
          to="/onetoeight"
          className={({ isActive }) =>
            isActive
              ? "bg-[#DBEAFE] p-3 tex-sm w-full block  "
              : "p-3 tex-sm w-full block "
          }
          onClick={menuopen}
        >
          <span className=" px-3 "> */}
            {" "}
            {/* 1<sup>st</sup> TO 8<sup>th</sup> */}
            {/* SCHOOL SOLUTION
          </span>
        </NavLink> */}
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? " p-3 tex-sm w-full block  "
              : " tex-sm w-full block "
          }
          onClick={menuopen}
        >
          <span className=" px-6 "> Contact</span>
        </NavLink>
        <AccordionItem className="px-6 py-3 tex-sm w-full block" header={`ABOUT`} >
            
            
          
        {/* <div
          // to="/aboutus"
          className="p-3 tex-sm w-full block"
        >
          <p className="flex logg justify-between  " onClick={opendropdown}>
            <span className=" relative left-2 font-semibold"> ABOUT </span>
            <svg
              className="svg-open transition-all durartion-300"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000"
            >
              <path d="M480-360 280-560h400L480-360Z" />
            </svg>
          </p>
        </div> */}
        <div className=" transition-all duration-300 list-dropdown  w-[90%]  m-auto  ">
          <div>
            <div className=" p-2 leading-loose " onClick={opendropdown2}>
              <p className="flex justify-between border-b-[1px] ">
                {" "}
                <span className=""> About us</span>{" "}
                <svg
                  className="svg-open2 transition-all durartion-300"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#000"
                >
                  <path d="M480-360 280-560h400L480-360Z" />
                </svg>{" "}
              </p>
              <div className="list-dropdown2 hidden">
                <Link to="/aboutus" className="block" onClick={menuopen}>
                  About Us
                </Link>
                <Link to="/" className="block" onClick={menuopen}>
                  Who We Are
                </Link>
                <Link to="/journey" className="block" onClick={menuopen}>
                  Adisri Journey
                </Link>
                <a
                  className="block "
                  href="https://drive.google.com/file/d/1_46HY9Y0bdyyTbkUIYupRLJ_0WAln0Ei/view?usp=sharing"
                  download="catalog.pdf"
                  target="_blank"
                  onClick={menuopen}
                >
                  {" "}
                  <span>Catalogue</span>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className=" p-2 leading-loose " onClick={opendropdown3}>
              <p className="flex justify-between border-b-[1px] ">
                {" "}
                <span className=""> Career</span>{" "}
                <svg
                  className="svg-open3 transition-all durartion-300"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#000"
                >
                  <path d="M480-360 280-560h400L480-360Z" />
                </svg>{" "}
              </p>
              <div className="list-dropdown3 hidden">
                <Link to="/careers" onClick={menuopen} className="block">
                  Current Openings
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className=" p-2 leading-loose " onClick={opendropdown4}>
              {/* <p className="flex justify-between border-b-[2px] ">
                {" "}
                <span className="font-semibold">Our Policy</span>{" "}
                <svg
                  className="svg-open4 transition-all durartion-300"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#000"
                >
                  <path d="M480-360 280-560h400L480-360Z" />
                </svg>{" "}
              </p> */}
              <div className="list-dropdown4 hidden">
                {/* <Link to="/privacy" onClick={menuopen} className="block">
                  Privacy Policy
                </Link> */}
              </div>
            </div>
          </div>
        </div>
        </AccordionItem>
        {/* <Accordion>
      <AccordionItem header="What is Lorem Ipsum?">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </AccordionItem>

      <AccordionItem header="Where does it come from?">
        Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla
        vel erat quis sodales. Nam ex enim, eleifend venenatis lectus
        vitae, accumsan auctor mi.
      </AccordionItem>

      <AccordionItem header="Why do we use it?">
        Suspendisse massa risus, pretium id interdum in, dictum sit
        amet ante. Fusce vulputate purus sed tempus feugiat.
      </AccordionItem>
    </Accordion> */}
    
        <div
          // to="/aboutus"
          className="px-4 tex-sm w-full block"
        >
          <div className="flex logg justify-between  px-2  " >

          {
            flag ?(
              <AccordionItem className="relative   block w-full" header={`More Options`} >
              <Link className="left-0 font-normal p-2 relative top-2 border-b-[1px] block " to="/myorders" onClick={menuopen}>My Orders</Link>
              <p className="left-0 font-normal p-2 border-b-[1px] mt-2 "  onClick={()=>{
                 logout()
                 menuopen()
              }} >Logout</p>
           </AccordionItem>
            ):(
              <Link to='/SignIn' >SignIn</Link>
            )
          }
       
          </div>
        </div>
      
        {/* <div className="list-dropdown  hidden">
           <div className="grid grid-cols-3 text-xs  ">
               <ul className="bg-pink-200"> <span className=" text-sm block"> About us</span>
                <li className="p-1">Who we are</li>
                <li className="p-1">Our Distribution Center</li>
                <Link to='/journey' onClick={menuopen} className="p-1">Adisri Journey</Link>
                <a href="https://drive.google.com/file/d/1_46HY9Y0bdyyTbkUIYupRLJ_0WAln0Ei/view?usp=sharing" download="Adisricatalogue.pdf" target="_blank"> <li className="p-1">Catalogue</li></a>
               </ul>
               <ul className="border-l-2 border-slate-100"> <span className=" text-sm block">Career </span>
                <Link to='/careers' onClick={menuopen} className="flex logg justify-center p-1">Current Opening</Link>
                
                
               </ul>
               <ul className="border-l-2 border-slate-100 bg-pink-200"> <span className=" text-sm block" >Contact us</span>
                <Link to='/contact' onClick={menuopen} className="p-1 flex logg justify-center">Write To Us</Link>
                
                
               </ul>
           </div>
           </div> */}
        {/* 
            {
                flag ?(
                  <>
                  <div className="w-full p-2 grid grid-cols-2 m-auto bg-slate-300 ">
                  <div className="w-4/6 ">
                    <img
                      className="  bg-blue-200 w-2/6 rounded-full m-auto"
                       src={profile.picture}
                       alt={profile.name}
                       
                    />
                    </div>
                    
                  <div  className="profile-info  cursor-pointer p-1 w-4/5 flex logg m-auto  justify-center -space-x-6 rounded-full bg-zinc-700 hover:bg-blue-200 hover:text-black trainsition-all duration-500 text-white" onClick={logout}>
                    <button  >Logout</button>
                    </div>
                  </div>
                
                </>
                ):(
<NavLink
              to="/SignIn"
              className="box-border p-4 logg justify-center bg-slate-200 flex  text-white transition-all duration-200  "
              onClick={menuopen}
            >
           <button
  aria-label="Sign in with Google"
  className="flex  logg bg-black/5 border border-button-border-light  rounded-full p-0.5 pr-4"
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
  <span className="text-sm text-google-text-gray tracking-wider p-3">Sign with Google</span>
</button>
            </NavLink>
                )
               
            } */}
      </div>
      </Accordion>
    </>
  );
}
