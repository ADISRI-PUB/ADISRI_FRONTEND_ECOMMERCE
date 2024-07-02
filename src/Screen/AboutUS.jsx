import React from 'react'
import CountingEffect from '../Components/CountingEffect'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Clients from '../Components/Cilents';
import {useInView} from 'react-intersection-observer'
gsap.registerPlugin(ScrollTrigger)
export default function AboutUS(){
  
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
    return(
        <>
        <div className='h-20 new-space-color'>
           
        </div>
         <div ref={ref} className='about-sections '>
             <p className='abouttext text-black'>ABOUT US</p>
             <br />
             <br />
             <div className='counting-container grid grid-cols-3 grid-rows-1 '>
                <div className='box1   bg-green-200 p-3 text-center'>
                    <div>
                 <p className='st-cover'>Student covered</p>
                    <svg className='m-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="4vw" fill="#000"><path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"/></svg>
                 </div>
                <div className='counting1'>
                  <CountingEffect finalCount={20000} duration ={1} />
                </div>
                </div>
                <div className='box1  bg-white p-3 text-center'>
                    <div>
                 <p className='st-cover'>Books Collection</p>
                 <svg className='m-auto' xmlns="http://www.w3.org/2000/svg" width="4vw" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 128 128" xmlSpace="preserve">

<g>
	<path d="M110.6,38.3H106v-3.5c0-1-0.8-1.7-1.7-1.8c0,0,0,0,0,0H70.8c-2.7,0-5.2,1.2-6.8,3.3c-1.6-2.1-4.1-3.3-6.8-3.3H23.7   c-1,0-1.7,0.8-1.7,1.8v3.5h-4.6c-1,0-1.8,0.8-1.8,1.8v57c0,1,0.8,1.7,1.8,1.8h93.1c1,0,1.7-0.8,1.8-1.8V40   C112.3,39.1,111.5,38.3,110.6,38.3z M70.8,36.5h31.7v51.9H70.8c-2.9,0-4.6,1.4-5,1.6V41.6c0-0.4,0-0.7-0.1-1.1   C66.2,38.3,68.3,36.5,70.8,36.5z M25.5,36.5h31.7c2.6,0,4.7,1.9,5,4.1c0,0.4-0.1,0.7-0.1,1.1v48.3c-0.3-0.1-2.1-1.6-5-1.6H25.5   L25.5,36.5L25.5,36.5z M19.2,41.8H22v48.3c0,1,0.8,1.8,1.8,1.8h33.5c2,0,3.9,1.1,4.8,3.4H19.2L19.2,41.8z M108.8,95.3H66   c0.8-2.2,2.8-3.4,4.8-3.4h33.5c1,0,1.8-0.8,1.8-1.8V41.8h2.8L108.8,95.3z"/>
	<path d="M32.7,50h22.5c1,0,1.8-0.8,1.8-1.8s-0.8-1.8-1.8-1.8H32.7c-1,0-1.8,0.8-1.8,1.8S31.7,50,32.7,50z"/>
	<path d="M32.7,59.3h22.5c1,0,1.8-0.8,1.8-1.8s-0.8-1.8-1.8-1.8H32.7c-1,0-1.8,0.8-1.8,1.8S31.7,59.3,32.7,59.3z"/>
	<path d="M32.7,68.7h22.5c1,0,1.8-0.8,1.8-1.8s-0.8-1.8-1.8-1.8H32.7c-1,0-1.8,0.8-1.8,1.8S31.7,68.7,32.7,68.7z"/>
	<path d="M32.7,78h22.5c1,0,1.8-0.8,1.8-1.8s-0.8-1.8-1.8-1.8H32.7c-1,0-1.8,0.8-1.8,1.8S31.7,78,32.7,78z"/>
	<path d="M72.8,50h22.5c1,0,1.8-0.8,1.8-1.8s-0.8-1.8-1.8-1.8H72.8c-1,0-1.8,0.8-1.8,1.8S71.9,50,72.8,50z"/>
	<path d="M72.8,59.3h22.5c1,0,1.8-0.8,1.8-1.8s-0.8-1.8-1.8-1.8H72.8c-1,0-1.8,0.8-1.8,1.8S71.9,59.3,72.8,59.3z"/>
	<path d="M72.8,68.7h22.5c1,0,1.8-0.8,1.8-1.8s-0.8-1.8-1.8-1.8H72.8c-1,0-1.8,0.8-1.8,1.8S71.9,68.7,72.8,68.7z"/>
	<path d="M72.8,78h22.5c1,0,1.8-0.8,1.8-1.8s-0.8-1.8-1.8-1.8H72.8c-1,0-1.8,0.8-1.8,1.8S71.9,78,72.8,78z"/>
</g>
</svg>
                 </div>
                <div className='counting1'>
                  <CountingEffect finalCount={10000} duration ={8} />
                </div>
                </div>
                <div className='box1  bg-white p-3 text-center'>
                    <div>
                 <p className='st-cover'> Our Clients </p>
                 <svg className='m-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="4vw" fill="#000"><path d="M475-160q4 0 8-2t6-4l328-328q12-12 17.5-27t5.5-30q0-16-5.5-30.5T817-607L647-777q-11-12-25.5-17.5T591-800q-15 0-30 5.5T534-777l-11 11 74 75q15 14 22 32t7 38q0 42-28.5 70.5T527-522q-20 0-38.5-7T456-550l-75-74-175 175q-3 3-4.5 6.5T200-435q0 8 6 14.5t14 6.5q4 0 8-2t6-4l136-136 56 56-135 136q-3 3-4.5 6.5T285-350q0 8 6 14t14 6q4 0 8-2t6-4l136-135 56 56-135 136q-3 2-4.5 6t-1.5 8q0 8 6 14t14 6q4 0 7.5-1.5t6.5-4.5l136-135 56 56-136 136q-3 3-4.5 6.5T454-180q0 8 6.5 14t14.5 6Zm-1 80q-37 0-65.5-24.5T375-166q-34-5-57-28t-28-57q-34-5-56.5-28.5T206-336q-38-5-62-33t-24-66q0-20 7.5-38.5T149-506l232-231 131 131q2 3 6 4.5t8 1.5q9 0 15-5.5t6-14.5q0-4-1.5-8t-4.5-6L398-777q-11-12-25.5-17.5T342-800q-15 0-30 5.5T285-777L144-635q-9 9-15 21t-8 24q-2 12 0 24.5t8 23.5l-58 58q-17-23-25-50.5T40-590q2-28 14-54.5T87-692l141-141q24-23 53.5-35t60.5-12q31 0 60.5 12t52.5 35l11 11 11-11q24-23 53.5-35t60.5-12q31 0 60.5 12t52.5 35l169 169q23 23 35 53t12 61q0 31-12 60.5T873-437L545-110q-14 14-32.5 22T474-80Zm-99-560Z"/></svg>
                 </div>
                <div className='counting1'>
                  <CountingEffect finalCount={5000} duration ={8} />
                </div>
                </div>
             </div>
              <br />
             <div className='w-full'>
             <div>
             <div className='h-20 new-space-color'>
           
           </div>
            <p className='our-clients2 text-violet-500zz'>Our Clients</p>
          </div>
          <div className='h-5 new-space-color'>
           
           </div>
              <Clients/>
             </div>
             <br /> <br />
         </div>
        </>
    )
}