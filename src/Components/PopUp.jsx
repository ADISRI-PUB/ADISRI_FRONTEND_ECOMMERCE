import React from "react";
import { Link } from 'react-router-dom'
export default function PopUp() {

    const onmouse =()=>{
     
        document.querySelector('.pop-up').classList.remove('hidden')
        document.querySelector('.pop-up').classList.add('.show-popup')
      
    }
    const nomouse =()=>{

        document.querySelector('.pop-up').classList.remove('.show-popup')
         document.querySelector('.pop-up').classList.add('hidden') 
        
    }
  return (
    <>
      <div onMouseEnter={onmouse} onMouseLeave={nomouse} className="w-4/5    m-auto pop-up hidden transition-all duration-800   ">
      <div className="grid grid-cols-3 grid-rows-1 ">
        <div className="p-4 bg-white ">
          <p>
            <b> About Us </b>
          </p>
          <ul className="targets">
            <a href=""> <li >Who We Are</li></a>

          <a href="">  <li> Our Distribution Centers</li></a>
            <a href=""> <li> Adisri Journey</li></a>
            <a href="https://drive.google.com/file/d/1_46HY9Y0bdyyTbkUIYupRLJ_0WAln0Ei/view?usp=sharing" download="catalog.pdf" target="_blank"> <li>Catalogue</li></a>
          </ul>
          <div className="h-12 bg-white">

          </div>
        </div>
        <div className="bg-purple-100 p-4">
          <p>
            <b> Career </b>
          </p>
          <ul className="targets">
          <Link to='/careers'>  <li>Current Openings</li></Link>
          </ul>
         
        </div>
        <div className="p-4 bg-white">
          <p>
        
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
