import React from "react";
import { Link } from "react-router-dom";
export default function Footer(){
    return(
        <>
         
         <footer className="relative">
    <div className="mx-auto  w-full">
        <div>
            <img className="m-auto max-sm:w-[70%]" src="ADISRI LOGO 2.png" alt=""  />
        </div>
        <div className="w-4/5 m-auto ">
      <div className="grid grid-cols-2    gap-8 max-sm:gap-3  max-sm:py-10 px-4 py-6 lg:py-8 md:grid-cols-3 ">
        <div className="">
            <div className="m-auto w-max max-sm:w-full  ">
            <h2 className="mb-6 text-sm max-sm:text-xs font-semibold text-gray-900 uppercase  ">Company</h2>
            <ul className="text-gray-500 dark:text-gray-400  font-medium ">
                <li className="mb-4">
                    <Link to='/aboutus' className=" hover:underline">About</Link>
                </li>
                <li className="mb-4">
                    <Link to='/careers' className="hover:underline">Careers</Link>
                </li>
                <li className="mb-4">
                    <a className="hover:underline decoration-none">Brand Center :Noida</a>
                </li>
            

            </ul>
            </div>
        </div>
        <div>
            <div className="m-auto w-max max-sm:w-full ">
            <h2 className="mb-6 text-sm max-sm:text-xs font-semibold text-gray-900 uppercase ">Help center</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              
                <li className="mb-4">
                    <a href="https://www.facebook.com/adisripublications/" target="_blank" className="hover:underline">Facebook</a>
                </li>
                <li className="mb-4">
                    <Link to="/contact" className="hover:underline">Contact Us</Link>
                </li>
            </ul>
            </div>
        </div>
        {/* <div>
            <div className="m-auto w-max max-sm:w-full ">
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Licensing</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                </li>
            </ul>
            </div>
        </div> */}
        <div className="">
            <div className="m-auto w-max  max-sm:w-full">
            <h2 className="mb-6 text-sm max-sm:text-xs font-semibold text-gray-900 uppercase  ">Careers</h2>
            <ul className="text-gray-500 dark:text-gray-400  font-medium ">
                <li className="mb-4">
                    <Link to='/careers' className=" hover:underline">Current opening</Link>
                </li>
            
            
            </ul>
            </div>
        </div>
        <div>
           
        
        </div>
    </div>
    </div>
    <div className="px-4 py-6  w-full m-auto bg-gray-700 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2024 <a href="https://flowbite.com/">Adisri | Publications&#xae;</a>. All Rights Reserved.
        </span>
        <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                    </svg>
                  <span className="sr-only">Facebook page</span>
              </a>
            <a href="https://www.linkedin.com/company/adisri-publications/" target="_blank" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
            <svg className="w-4 h-4 " xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="currentcolor"  version="1.1" id="Capa_1" viewBox="0 0 260.366 260.366" xmlSpace="preserve">
<g>
	<path d="M34.703,0.183C15.582,0.183,0.014,15.748,0,34.884C0,54.02,15.568,69.588,34.703,69.588   c19.128,0,34.688-15.568,34.688-34.704C69.391,15.75,53.83,0.183,34.703,0.183z"/>
	<path d="M60.748,83.531H8.654c-2.478,0-4.488,2.009-4.488,4.489v167.675c0,2.479,2.01,4.488,4.488,4.488h52.093   c2.479,0,4.489-2.01,4.489-4.488V88.02C65.237,85.539,63.227,83.531,60.748,83.531z"/>
	<path d="M193.924,81.557c-19.064,0-35.817,5.805-46.04,15.271V88.02c0-2.48-2.01-4.489-4.489-4.489H93.424   c-2.479,0-4.489,2.009-4.489,4.489v167.675c0,2.479,2.01,4.488,4.489,4.488h52.044c2.479,0,4.489-2.01,4.489-4.488v-82.957   c0-23.802,4.378-38.555,26.227-38.555c21.526,0.026,23.137,15.846,23.137,39.977v81.535c0,2.479,2.01,4.488,4.49,4.488h52.068   c2.478,0,4.488-2.01,4.488-4.488v-91.977C260.366,125.465,252.814,81.557,193.924,81.557z"/>
</g>
</svg>
                  <span className="sr-only">LinkedIn</span>
              </a>
          
             
             
             
           
        </div>
      </div>
    </div>
</footer>


        </>
    )
}