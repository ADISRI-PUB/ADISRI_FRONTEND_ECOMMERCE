import React from 'react'
import { useSelector } from 'react-redux'
import '../Css/Order.css'
function TrackOrder() {
  const {userprofile} =useSelector(state=>state.user)
  return (
    <div className='min-h-screen'>
 <h1  className='ml-2 max-sm:ml-0 p-4 font-semibold confirm-text '>
       Your Order Is Confirmed !
     </h1>
     <p  className='ml-8 max-sm:ml-4 font-medium border-b border-slate-200 User-name'> Hi, {userprofile.name} !</p>
     <div className=' border-b p-4 m-auto checked-shipment grid grid-cols-4  justify-center  logg '>
             {/* <input type="range" min="0" max="100" step="25"  /> */}
             <div className='m-auto text-center w-full  relative checked-shipment-container ' >
              <span className='h-1 max-sm:h-0.5 bg-gray-200 flex logg right-0 element -z-10 w-1/2 absolute'></span>
               <div className='circles-shipment m-auto bg-green-400 rounded-full '></div>
               <svg className='m-auto' xmlns="http://www.w3.org/2000/svg" height="3.5vw" viewBox="0 -960 960 960" width="3.5vw" fill="#000"><path d="m691-150 139-138-42-42-97 95-39-39-42 43 81 81ZM240-600h480v-80H240v80ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40ZM120-80v-680q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v267q-19-9-39-15t-41-9v-243H200v562h243q5 31 15.5 59T486-86l-6 6-60-60-60 60-60-60-60 60-60-60-60 60Zm120-200h203q3-21 9-41t15-39H240v80Zm0-160h284q38-37 88.5-58.5T720-520H240v80Zm-40 242v-562 562Z"/></svg>
               Order Placed
             </div>
             <div className='m-auto  text-center w-full  relative checked-shipment-container '>
             <span className='h-1 max-sm:h-0.5 bg-gray-200 flex logg right-0 element -z-10 w-full absolute'></span>
             <div className='circles-shipment bg-gray-300 rounded-full  m-auto'></div>
             <svg className='m-auto ' xmlns="http://www.w3.org/2000/svg" height="3.5vw" viewBox="0 -960 960 960" width="3.5vw" fill="#000"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg>
             Processing
             </div>
             <div className='text-center m-auto w-full relative checked-shipment-container'>
             <span className='h-1 max-sm:h-0.5 bg-gray-200 flex logg right-0 element -z-10 w-full absolute'></span>
             <div className='circles-shipment bg-gray-300 rounded-full m-auto '></div>
             <svg className='m-auto' xmlns="http://www.w3.org/2000/svg" height="3.5vw" viewBox="0 -960 960 960" width="3.5vw" fill="#000"><path d="M240-160q-50 0-85-35t-35-85H40v-440q0-33 23.5-56.5T120-800h560v160h120l120 160v200h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85H360q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T280-280q0-17-11.5-28.5T240-320q-17 0-28.5 11.5T200-280q0 17 11.5 28.5T240-240ZM120-360h32q17-18 39-29t49-11q27 0 49 11t39 29h272v-360H120v360Zm600 120q17 0 28.5-11.5T760-280q0-17-11.5-28.5T720-320q-17 0-28.5 11.5T680-280q0 17 11.5 28.5T720-240Zm-40-200h170l-90-120h-80v120ZM360-540Z"/></svg>
             Shipped
             </div>
             <div className=' m-auto text-center relative w-full checked-shipment-container'>
             <span className='h-1 max-sm:h-0.5 bg-gray-200 flex logg left-0 element -z-10 w-1/2 absolute'></span>
             <div className='circles-shipment bg-gray-300 rounded-full m-auto '></div>
             <svg className='m-auto' xmlns="http://www.w3.org/2000/svg" height="3.5vw" viewBox="0 -960 960 960" width="3.5vw" fill="#000"><path d="M480-510ZM160-160v-375l-72 55-47-63 439-337 440 336-48 64-392-300-240 184v356h120v80H160Zm437 80L428-250l56-57 113 113 227-226 56 57L597-80Z"/></svg> 
             Delivered
             </div>
             
            
          </div>
     <div>
      <br />
     </div>
     <div>
      <p className='leading-loose ml-8  w-4/5 m-auto border-slate-200 order-id'>Order ID : #45096</p>
      <a className='ml-20 max-sm:ml-10 border-b  cursor-pointer ' >View Invoice</a>
      <br />
      <br />
      <div className=' p-4 leading-loose border-b gap-20 border-slate-200 info-container max-sm:space-y-10'>
         <div>
                        <p className='font-medium'>Delivery Address</p>
                        <p>D-258, Sector 63, Noida, Uttar Pradesh 201301</p>
          </div>
         <div>
                        <p className='font-medium'>Billing  Address</p>
                        <p className=''>D-258, Sector 63, Noida, Uttar Pradesh 201301</p>
          </div>
         <div>
                        <p className='font-medium'>Contact Help</p>
                        <p className=' flex logg  '><svg className='mr-2' xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
                        0120 433 7735
                        </p>
                        <p className=' flex logg'><svg className='mr-2' xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
                        Contact@Adisri.com
                        </p>
          </div>
         <div>
                        <p className='font-medium'>Payment Method</p>
                        <p className='flex logg'>
                        <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000"><path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z"/></svg>
                          Cash On Delivery
                          </p>
          </div>
     </div>
      </div>
     <div>
       
     </div>
     <div className='p-4'>

     <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="w-1/5 max-sm:w-4/5" src="KIDS ACTIVITY C.jpg" alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">KIDS ACTIVITY C</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Quantity :2</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Price :180/-</p>
=======
     <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="KIDS ACTIVITY C.jpg" alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">KIDS ACTIVITY C</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Quantity :2</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Price :180/-</p>

    </div>
</a>
     </div>
    </div>
  )
}

export default TrackOrder