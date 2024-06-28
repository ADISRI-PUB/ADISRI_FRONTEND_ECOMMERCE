import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function PrePrimary() {
  let [count,setcount] =useState(0)
  let [amoutscroll,setamountscroll]=useState(0)
  let left,right
  right =  ()=>{
    if (count<9) {
      console.log(count,amoutscroll);
      document.querySelector('.pre-books-gallery').style.transform =`translate(${-amoutscroll}%)`
      setcount(++count)
      setamountscroll(amoutscroll+=28)
    }
    else{
      document.querySelector('.pre-books-gallery').style.transform =`translate(0%)`
      // document.querySelector('.pre-books-gallery').style.transform =`translate(${-r_amount}%)`
      setamountscroll(amoutscroll=0)
    }
    
    
  }
   left = ()=>{
    if (count>0) {
      document.querySelector('.pre-books-gallery').style.transform =`translate(${amoutscroll}%)`
      setcount(--count)
      setamountscroll(amoutscroll-=28)
    }
    else{
    document.querySelector('.pre-books-gallery').style.transform= `translate(0%)`
    setamountscroll(0)
    }   
  }
  useEffect(()=>{
  
    
    
  }
  ,[])
  return (
    <>
    <br />
     <div className="preprimary-section">
      <div className="w-full">
      <div className="preprimary-text text-center">
          PrePrimary Books
          </div>
          <div className="">
            <p className="pre-books-description p-3">"Welcome to Adisri Publications, where learning begins with our vibrant collection of pre-primary books. Designed to <b className="bg-yellow-300"> spark curiosity </b> and foster early literacy skills, our books are tailored to engage young minds through captivating stories,  <b className="bg-yellow-300"> interactive activities </b>, and colorful illustrations. Whether you're looking to introduce basic concepts like numbers and letters or encourage creativity through imaginative tales, our curated selection offers something for every young learner. Explore our range and embark on a journey of discovery with your child today."</p>
          </div>
          </div>
          <div className="outer-container flex  justify-between  ">
            <div className="m-auto ">
          <svg onClick={left} className="cursor-pointer" xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" width="3vw" fill="#000"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
          </div>
          <div className="flex  w-4/5 overflow-hidden m-auto">
            <div className="flex pre-books-gallery transition-all duration-500 ">
            <img  className="w-1/6 p-4 max-sm:p-1 border-2 border-white bg-emerald-800 " src="ALL IN ONE READING.jpg" alt=""  />
            <img  className="w-1/6 p-4 max-sm:p-1 border-2 border-white bg-emerald-800 " src="ALL IN ONE WRITING BOOK HARD BOUND.jpg" alt=""  />
            <img  className="w-1/6 p-4 max-sm:p-1 border-2 border-white bg-emerald-800 " src="AMAZING PICTURES  A.jpg" alt=""  />
            <img  className="w-1/6 p-4 max-sm:p-1 border-2 border-white bg-emerald-800 " src="ART&CRAFT A.jpg" alt=""  />
            <img  className="w-1/6 p-4 max-sm:p-1 border-2 border-white bg-emerald-800 " src="ALL IN ONE WRITING BOOK HARD BOUND.jpg" alt=""  />
            <img  className="w-1/6 p-4 max-sm:p-1 border-2 border-white bg-emerald-800 " src="ART&CRAFT B.jpg" alt=""  />
            <img  className="w-1/6 p-4 max-sm:p-1 border-2 border-white bg-emerald-800 " src="AMAZING PICTURES C.jpg" alt=""  />
            <img  className="w-1/6 p-4 max-sm:p-1 border-2 border-white bg-emerald-800 " src="ART&CRAFT A.jpg" alt=""  />
            <img  className="w-1/6 p-4 max-sm:p-1 border-2 border-white bg-emerald-800 " src="ALL IN ONE WRITING BOOK HARD BOUND.jpg" alt=""  />
            <img  className="w-1/6 p-4 max-sm:p-1 border-2 border-white bg-emerald-800 " src="ART&CRAFT B.jpg" alt=""  />
            <img  className="w-1/6 p-4 max-sm:p-1 border-2 border-white bg-emerald-800 " src="AMAZING PICTURES C.jpg" alt=""  />
            {/* <img  className="w-1/6 p-4 border-2 border-white bg-emerald-800 " src="ART&CRAFT A.jpg" alt=""  /> */}
            {/* <img  className="w-1/6 p-4 border-2 border-white bg-emerald-800 " src="ALL IN ONE WRITING BOOK HARD BOUND.jpg" alt=""  /> */}
            {/* <img  className="w-1/6 p-4 border-2 border-white bg-emerald-800 " src="ART&CRAFT B.jpg" alt=""  />
            <img  className="w-1/6 p-4 border-2 border-white bg-emerald-800 " src="AMAZING PICTURES C.jpg" alt=""  /> */}
            </div>
          </div>
          <div className="m-auto">
          <svg onClick={right} className="rotate-180 cursor-pointer" xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" width="3vw" fill="#000"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
          </div>
          </div>
     </div>
    </>
  );
}
