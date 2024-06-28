import React, { useEffect, useState } from "react";
import gsap from "gsap";

export default function Crousal() {
  let count=1;
  useEffect(() => {
  let time=  setInterval(() => {
     if (count==7) {
      count=0
     }
      document.querySelector(".imagescontainer").style.transform = `translate(${count*-100}%)`;
     count++  
      // document.querySelector(".images").style.transform = "translate(100%)";

    }, 3000);
 
    return ()=>{
      clearInterval(time)
    }

  }, []);

  return (
    <>
      <div className="  bg-black  flex   imagescontainer  transition-all duration-1000   ">
        <div className="min-w-full im1 transition-all duration-500">
          <img
            src="https://www.bookswagon.com/bannerimages/84_inr.jpg?v=5.2"
            alt=""
          />
        </div>
        <div className="min-w-full im2">
          <img
            src="https://www.bookswagon.com/bannerimages/85_inr.jpg?v=5.2"
            alt=""
          />
        </div>
        <div className="min-w-full">
          <img
            src="https://www.bookswagon.com/bannerimages/80_inr.jpg?v=5.2"
            alt=""
          />
        </div>
        <div className="min-w-full">
          <img
            src="https://www.bookswagon.com/bannerimages/79_inr.jpg?v=5.2"
            alt=""
          />
        </div>
        <div className="min-w-full">
          <img
            src="https://www.bookswagon.com/bannerimages/83_inr.jpg?v=5.2"
            alt=""
          />
        </div>
        <div className="min-w-full">
          <img
            src="https://www.bookswagon.com/bannerimages/85_inr.jpg?v=5.2"
            alt=""
          />
        </div>
        <div className="min-w-full">
          <img
            src="https://www.bookswagon.com/bannerimages/84_inr.jpg?v=5.2"
            alt=""
          />
        </div>
        <div className="min-w-full">
          <img
            src="https://www.bookswagon.com/bannerimages/84_inr.jpg?v=5.2"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
