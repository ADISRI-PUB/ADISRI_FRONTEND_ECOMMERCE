import React from "react";
import { Link } from "react-router-dom";

function Onetorightpopup() {
  const breakhide = () => {
    document.querySelector(".second3").classList.remove("hidden");
    document.querySelector(".second3").classList.toggle("visited");
  };
  const showhide = () => {
    document.querySelector(".second3").classList.add("hidden");
    document.querySelector(".second3").classList.toggle("visited");
  };
  return (
    <div>
      <div
        className="bg-white  space-y-1 hidden second3 border-2 border-yellow-300      "
        onMouseEnter={breakhide}
        onMouseLeave={showhide}
      >
        <p className=" transition-all duration-200 hover:bg-[#FF5F5F]  p-2  text-gray-950 hover:text-black  cursor-pointer">
          Customized Corner
        </p>
      
      
        
        <Link to='/onetoeight'>
          <p className=" transition-all duration-200 hover:bg-[#FF5F5F]  p-2  text-gray-950 hover:text-black  cursor-pointer">
           All
          </p>
        </Link>
        <Link to='/teachertraining'>
          <p className=" transition-all duration-200 hover:bg-[#FF5F5F]  p-2  text-gray-950 hover:text-black  cursor-pointer">
            Teacher Training Program
          </p>
        </Link>
        <div >
          {" "}
          <p className=" transition-all duration-200 hover:bg-[#FF5F5F]  p-2  text-gray-950 hover:text-black  cursor-pointer">
            Free Activity Sheets
          </p>
        </div>
      </div>
    </div>
  );
}

export default Onetorightpopup;
