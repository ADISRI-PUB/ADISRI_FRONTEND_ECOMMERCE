import React from "react";
import { Link } from "react-router-dom";

function PrePopup() {
  const breakhide = () => {
    document.querySelector(".second2").classList.remove("hidden");
    document.querySelector(".second2").classList.toggle("visited");
  };
  const showhide = () => {
    document.querySelector(".second2").classList.add("hidden");
    document.querySelector(".second2").classList.toggle("visited");
  };
  return (
    <div>
      <div
        className="bg-white  space-y-1 hidden second2      "
        onMouseEnter={breakhide}
        onMouseLeave={showhide}
      >
        <p className=" transition-all duration-200 hover:bg-[#FF5F5F]  p-2  text-gray-950 hover:text-black  cursor-pointer">
          Customized Corner
        </p>
        <Link to="/preprimary">
          <p className=" transition-all duration-200 hover:bg-[#FF5F5F]  p-2  text-gray-950 hover:text-black  cursor-pointer">
            All
          </p>
        </Link>
        <Link to="/playgroup">
          {" "}
          <p className=" transition-all duration-200 hover:bg-[#FF5F5F]  p-2  text-gray-950 hover:text-black  cursor-pointer">
            {" "}
            PlayGroup
          </p>
        </Link>
        <Link to="/nursery">
          {" "}
          <p className=" transition-all duration-200 hover:bg-[#FF5F5F]  p-2  text-gray-950 hover:text-black  cursor-pointer">
            Nursery
          </p>
        </Link>
        <Link to="/lowerlkg">
          {" "}
          <p className=" transition-all duration-200 hover:bg-[#FF5F5F]  p-2  text-gray-950 hover:text-black  cursor-pointer">
            Lower (LKG)
          </p>
        </Link>
        <Link to="/upperukg">
          <p className=" transition-all duration-200 hover:bg-[#FF5F5F]  p-2  text-gray-950 hover:text-black  cursor-pointer">
            Upper (UKG)
          </p>{" "}
        </Link>
        <Link to='/teachertraining'>
          <p className=" transition-all duration-200 hover:bg-[#FF5F5F]  p-2  text-gray-950 hover:text-black  cursor-pointer">
            Teacher Traning Program
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

export default PrePopup;
