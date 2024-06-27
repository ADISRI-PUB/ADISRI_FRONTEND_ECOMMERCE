import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function PrePrimary() {
    let imagearray = [
        "ALL IN ONE WRITING BOOK HARD BOUND.jpg",
        "ALL IN ONE READING.jpg",
        "ALL IN ONE WRITING BOOK HARD BOUND.jpg",
        "AMAZING PICTURES B.jpg",
        "AMAZING PICTURES  A.jpg",
      "AMAZING PICTURES C.jpg",
      "ART&CRAFT A.jpg",
      "ART&CRAFT B.jpg",
      "ART&CRAFT C.jpg",
      "KIDS ACTIVITY A.jpg",
      "KIDS ACTIVITY B.jpg",
      "KIDS ACTIVITY C.jpg",
    ];
    let count=0;
  let [Dimages,setDimages] =useState('ALL IN ONE WRITING BOOK HARD BOUND.jpg')
  useEffect(() => {

   let newimages =setInterval(()=>{
    if (count==imagearray.length) {
        count=0
        setDimages(imagearray[count])
    }
    gsap.fromTo('.Dimages2',{
        x:12000,
    },{
       x:0 
    })
            setDimages(imagearray[count])
            count++
    },2000)
   
    gsap.to(".rounded-white", {
      scale: 27,
     ease:"elastic.out",
      duration: 1,
      scrollTrigger: {
        trigger: ".section-scroll",
        // markers:true,
        scrub: true,
        start: "-30% top",
        end: "top bottom",
      },
    });
    gsap.to(".pre", {
      backgroundColor: "aquamarine",
      duration: 1,
      scrollTrigger: {
        trigger: ".section-scroll",
        // markers:true,
        start: "top top",
        end: "top bottom",
      },
      scrub: true,
    });
   return ()=>clearInterval(newimages)
  }, []);

  return (
    <>
      <div className="relative pre h-full w-full  z-20 transition-all duration-700 flex flex-wrap ">
        <div className="sm:w-1/2 max-sm:w-full sm:h-full gallery  absolute right-0 -z-10 ">
          <div className="w-full sm:h-1/2">
            <img
              className="m-auto w-1/3 relative top-7 transition-all duration-300 Dimages2 "
              src={Dimages}
              alt="primarybooks"
            />
          </div>
          <div className="w-full sm:h-1/2 max-sm:h-48  overflow-hidden outer_container ">
            <div className="w-full h-full  flex justify-evenly  gap-7 auto-scroll   ">
              <img
                className="m-auto books-slides  relative top-7 "
                src="KIDS ACTIVITY B.jpg"
                alt="primarybooks"
              />
              <img
                className="m-auto    books-slides relative top-7 "
                src="AMAZING PICTURES B.jpg"
                alt="primarybooks"
              />
              <img
                className="m-auto   books-slides  relative top-7 "
                src="MUSICAL RHYMES C.jpg"
                alt="primarybooks"
              />
              <img
                className="m-auto   books-slides  relative top-7 "
                src="MY BOOK OF CURSIVE (CAPITAL LETTERS).jpg"
                alt="primarybooks"
              />
              <img
                className="m-auto   books-slides  relative top-7 "
                src="ALL IN ONE READING.jpg"
                alt="primarybooks"
              />
              <img
                className="m-auto    books-slides relative top-7 "
                src="ALL IN ONE WRITING BOOK HARD BOUND.jpg"
                alt="primarybooks"
              />
              <img
                className="m-auto   books-slides  relative top-7 "
                src="KIDS ACTIVITY C.jpg"
                alt="primarybooks"
              />
              <img
                className="m-auto   books-slides  relative top-7 "
                src="KIDS ACTIVITY A.jpg"
                alt="primarybooks"
              />
              <img
                className="m-auto   books-slides  relative top-7 "
                src="AMAZING PICTURES C.jpg"
                alt="primarybooks"
              />
              <img
                className="m-auto   books-slides  relative top-7 "
                src="AMAZING PICTURES  A.jpg"
                alt="primarybooks"
              />
            </div>
          </div>
        </div>
        <div className="w-20 h-20 -translate-x-full shadow-sm  shadow-black/40 absolute transition-all duration-700 rounded-white rounded-full bg-teal-200 -z-40  ">
        </div>
        <div className="head-text-section text-black w-1/2 h-full max-sm:h-1/2 max-sm:w-full ">
        
          <p className="head-text  "> Pre-Primary </p>
        </div>
      </div>
    </>
  );
}
