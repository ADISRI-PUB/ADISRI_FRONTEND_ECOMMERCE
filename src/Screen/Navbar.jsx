
import React from "react"
import { Link } from "react-router-dom"
export default function Navbar(){
      

    return(
        <>
     
     <div className="navvv z-50">
      <div className="text-center bg-white space-y-6 sm:hidden max-sm:visible small-navbar-component transition-all duration-500   ">
        <Link
              to={"NULL"}
              className="  small-navbar  rounded-full transition-all duration-200 p-3 block "
            >
              HOME
            </Link>
            <Link
              to={"NULL"}
              className="   small-navbar transition-all duration-200 p-3 block"
            >
              PREPRIMARY
            </Link>
            <Link
              to={"NULL"}
              className=" small-navbar  transition-all duration-200  p-3  block"
            >
              1<sup>th</sup> TO 8<sup>th</sup>
            </Link>
         
            <Link
              to={"NULL"}
              className="small-navbar  rounded-full transition-all duration-200 p-3 block"
            >
              ABOUT US
            </Link>
            <Link
              to={"NULL"}
              className=" logg justify-center bg-slate-400 flex  text-white transition-all duration-200 p-3 "
            >
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              width="10vw"
              fill="#FFFFFF"
              className=""
              >
              <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
            </svg>
                <p className=""> Login/Signup</p>
            </Link>
            
        </div>
      </div>
        </>
    )
}