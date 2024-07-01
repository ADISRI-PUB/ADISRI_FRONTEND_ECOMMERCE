import React, { createElement, useEffect, useState } from "react";
import gsap from "gsap";

export default function Crousal() {
  let count=1;
  let imagesarray =['https://www.bookswagon.com/bannerimages/84_inr.jpg?v=5.2','https://www.bookswagon.com/bannerimages/85_inr.jpg?v=5.2','https://www.bookswagon.com/bannerimages/80_inr.jpg?v=5.2','https://www.bookswagon.com/bannerimages/79_inr.jpg?v=5.2','https://www.bookswagon.com/bannerimages/79_inr.jpg?v=5.2','https://www.bookswagon.com/bannerimages/85_inr.jpg?v=5.2']
  let [nextimages,setImages] =useState('')
 
  useEffect(() => {
  let time=  setInterval(() => {
     if (count==7) {
      count=0
      
     }
    
     document.querySelector(".imagescontainer").style.transform = `translate(-${count*100}%)`; 
     count++
      // let div  =document.createElement('div')
      // div.setAttribute('class','min-w-full new transition-all z-10 duration-500')
      // let img = document.createElement('img')
      // img.setAttribute('src',nextimages)
      // div.appendChild(img)
      // let tree = document.querySelector('.imagescontainer')
      // tree.appendChild(div) 
    
    
      // document.querySelector(".images").style.transform = "translate(100%)";
     
    }, 3000);

 
    return ()=>{
      clearInterval(time)
    }

  }, []);

  return (
    <>
      <div className="  bg-black  flex   imagescontainer  transition-all duration-1000  ">

        <div className="min-w-full im1 transition-all z-10 duration-500">
          <img
            src="https://www.bookswagon.com/bannerimages/84_inr.jpg?v=5.2"
            alt=""
          />
        </div>
        <div className="min-w-full z-10  im3 transition-all duration-500">
          <img
            src="https://www.bookswagon.com/bannerimages/85_inr.jpg?v=5.2"
            alt=""
          />
        </div>
        <div className="min-w-full z-10  im2 transition-all duration-500">
          <img
            src="https://www.bookswagon.com/bannerimages/79_inr.jpg?v=5.2"
            alt=""
          />
        </div>
        <div className="min-w-full z-10  im2 transition-all duration-500">
          <img
            src="https://www.bookswagon.com/bannerimages/83_inr.jpg?v=5.3"
            alt=""
          />
        </div>
        <div className="min-w-full z-10  im2 transition-all duration-500">
          <img
            src="https://www.bookswagon.com/bannerimages/84_inr.jpg?v=5.3"
            alt=""
          />
        </div>
        <div className="min-w-full z-10  im2 transition-all duration-500">
          <img
            src="https://www.bookswagon.com/bannerimages/81_inr.jpg?v=5.3"
            alt=""
          />
        </div>
        <div className="min-w-full z-10  im2 transition-all duration-500">
          <img
            src="https://www.bookswagon.com/bannerimages/85_inr.jpg?v=5.3"
            alt=""
          />
        </div>
       
       
       
      </div>
    </>
  );
}
