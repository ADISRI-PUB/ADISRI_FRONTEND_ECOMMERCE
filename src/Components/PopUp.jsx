import React from "react";

export default function PopUp() {

    const onmouse =()=>{
      document.querySelector('.pop-up').classList.remove('hidden')
      document.querySelector('.text-nav-about').classList.toggle('active')
    }
    const nomouse =()=>{
        document.querySelector('.text-nav-about').classList.toggle('active')
        document.querySelector('.pop-up').classList.add('hidden')
    }
  return (
    <>
      <div onMouseEnter={onmouse} onMouseLeave={nomouse} className="w-4/5   m-auto pop-up hidden transition-all duration-200 -z-10 ">
      <div className="grid grid-cols-3 grid-rows-1">
        <div className="p-4 bg-white ">
          <p>
            {" "}
            <b> About Us </b>
          </p>
          <ul className="targets">
            <a href=""> <li >Who We Are</li></a>

          <a href="">  <li> Our Distribution Centers</li></a>
            <a href=""> <li> Jaico Journey</li></a>
            <a href="https://drive.google.com/file/d/1_46HY9Y0bdyyTbkUIYupRLJ_0WAln0Ei/view?usp=sharing" download="catalog.pdf"> <li>Catalogue</li></a>
          </ul>
          <div className="h-12 bg-white">

          </div>
        </div>
        <div className="bg-purple-100 p-4">
          <p>
            {" "}
            <b> Career </b>
          </p>
          <ul className="targets">
          <a href="">  <li>Current Openings</li></a>
          </ul>
         
        </div>
        <div className="p-4 bg-white">
          <p>
            {" "}
            <b> Contact Us </b>
          </p>
          <ul className="targets">
           <a href=""> <li>Write To Us</li></a>
          </ul>
          <div className="h-10 bg-white ">

        </div>
        </div>
        </div>
      </div>
    </>
  );
}
