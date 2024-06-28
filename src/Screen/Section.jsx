import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PrePrimary from "./PrePrimary";
import OnetoEight from "./OnetoEight";
gsap.registerPlugin(ScrollTrigger);
export default function Section() {
  let outer = useRef(null);
  let inner1 = useRef(null);
  let inner2 = useRef(null);
  useEffect(() => {
    let out = outer.current;
    let in1 = inner1.current;
    let in2 = inner2.current;
    let h = document.querySelector(".scrolltab");
    let w = window.innerWidth;
    // gsap.to(out, {
    //   x: "-100%",
    //   scrollTrigger: {
    //     trigger: in1,
    //     markers: true,
    //     start: "top top ",
    //     end: "top bottom",
    //     pin: true,
    //   },
    //   scrub: true,
    // });
  });

  return (
    <>
      <div className="relative w-full newclass h-full bg-white  -z-10   ">
        <div ref={outer} className="w-full h-full   scrolltab ">
           <div className="w-full h-full overflow-hidden">
            {/* <PrePrimary /> */}
            </div>
            <div className="w-full h-full overflow-hidden">

            {/* <OnetoEight /> */}
            </div>
       
        </div>
      </div>
    </>
  );
}
