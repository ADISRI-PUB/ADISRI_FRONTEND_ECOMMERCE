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
      <div onMouseEnter={onmouse} onMouseLeave={nomouse} className="    m-auto pop-up hidden transition-all duration-800 relative z-20 border-2 border-yellow-300  ">
      <div className="grid grid-cols-2 grid-rows-1 ">
        <div className="p-2 bg-white ">
          <p>
            <b> About Us </b>
          </p>
          <ul className="  ">
            <a href=""> <li className="hover:bg-[#FF5F5F] p-2">Who We Are</li></a>

          <a href="">  <li className="hover:bg-[#FF5F5F] p-2"> Our Distribution Centers</li></a>
            <Link to='/'> <li className="hover:bg-[#FF5F5F] p-2"> Adisri Journey</li></Link>
            <a href="https://drive.google.com/uc?export=download&id=1aCRy4BfWLZ02ivUPVGwraHMXfCQE_MbC" download="catalog.pdf" >
  <li className="hover:bg-[#FF5F5F] p-2">Catalogue</li>
</a>
          </ul>
          <div className="h-12 bg-white">

          </div>
        </div>
        <div className="bg-white p-2">
          <p >
            <b> Career </b>
          </p>
          <ul className="targets">
          <Link to='/careers'>  <li className="hover:bg-[#FF5F5F] p-2">Current Openings</li></Link>
          </ul>
         
        </div>
        {/* <div className="p-4 bg-white">
          <p>
        
            <b> </b>
          </p>
          <ul className="targets">
           {/* <Link to='/contact'> <li>Write To Us</li></Link> */}
           {/* <Link to='/contact'> <li>Privacy Policy</li></Link>
         
          </ul>
          <div className="h-10 bg-white ">

        </div>
        </div> */}
        </div>
      </div>
    </>
  );
}
