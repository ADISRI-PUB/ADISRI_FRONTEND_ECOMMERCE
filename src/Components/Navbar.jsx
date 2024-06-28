import React from "react";
import gsap from "gsap";
export default function Navbar(){
      

    return(
        <>
     
         <div className="  text-center  tex-black  navbar transition-all duration-500 w-full bg-white h-full      border-white z-50 overflow-hidden">
         <div className="w-20 h-20 colors transition-all duration-200   rounded-full  ">
        
          </div>
            <div className="w-full h-full relative navbar-content max-sm:top-24 space-y-10 ">
             <p className=" z-50 block text-3xl  linktext  hover:scale-150 transition-all duration-300  text-white  cursor-pointer" href="#">HOME</p>
             <p className=" z-50 block text-3xl linktext hover:scale-150 transition-all duration-300  text-white cursor-pointer" href="#">PREPRIMARY</p>
             <p className=" z-50 text-3xl linktext   hover:scale-150 transition-all duration-300 text-white cursor-pointer" href="#">1<sup>th</sup> TO 8<sup>th</sup></p>
             <p  className=" z-50  text-3xl linktext  hover:scale-150 transition-all duration-300  text-white cursor-pointer"href="#">ABOUT US</p>
             </div>
         </div>
        </>
    )
}