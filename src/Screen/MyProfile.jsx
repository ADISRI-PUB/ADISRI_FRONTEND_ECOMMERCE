import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import '../Css/Order.css'
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../Components/Loader'
function MyProfile() {
  const history =useNavigate()
  const [loader,setLoader] =useState(true)
  useEffect(()=>{
    if (!localStorage.getItem('token')) {
       history('/')
    }
    
 })
    let {userprofile}=useSelector(state=>state.user)
        
  return (
      <>
       {
          ! userprofile ?(
             <div className='flex justify-center min-h-screen'>
               <Loader/>
             </div>
           ):(
            <div className='min-h-screen'>
            <section className="w-full overflow-hidden min-h-screen  dark:bg-indigo-100">
          <div className="w-full mx-auto ">
            <div className='h-80 max-sm:h-40 flex justify-between  bg-indigo-50 overflow-hidden'>
            <img  src="pngegg (18)23.png" alt="User Cover"
                       className=" h-full object-cover " /> 
            <img  src="pngegg (18)23.png" alt="User Cover"
                       className=" h-full object-cover  rotate-90" /> 
                       
            </div>
             
              <div className="w-full mx-auto flex justify-center max-sm:relative max-sm:-top-12">
                  <img src={userprofile.picture} alt="User Profile"
                          className="rounded-full object-cover xl:w-[16rem] xl:h-[16rem] lg:w-[16rem] lg:h-[16rem] md:w-[12rem] md:h-[12rem] sm:w-[10rem] sm:h-[10rem] xs:w-[8rem] xs:h-[8rem] outline outline-2 outline-offset-2 outline-white shadow-xl relative xl:bottom-[7rem] lg:bottom-[8rem] md:bottom-[6rem] sm:bottom-[5rem] xs:bottom-[4.3rem]" />
              </div>
      
              <div
                  className="xl:w-[80%] lg:w-[90%] md:w-[94%] sm:w-[96%] xs:w-[92%] mx-auto   gap-4 justify-center items-center relative xl:-top-[6rem] lg:-top-[6rem] md:-top-[4rem] sm:-top-[3rem] xs:-top-[2.2rem]">
                  
                  <h1 className="text-center text-gray-800  text-4xl font-serif  max-sm:text-sm">{userprofile.name}</h1>
                 
             
              <div className='order-detials sm:top-6 relative' >
                      <div className='w-4/5 max-sm:w-full m-auto bg-indigo-200 shadow-xl hover:scale-105 transition-all duration-200 p-5 '>
                      <div className='justify-center  -space-x-1    flex'>
                      <svg className='mr-3 ' xmlns="http://www.w3.org/2000/svg" width="40px" viewBox="0 -960 960 960"  fill="#000"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
                   <span className='m-auto'> <b> Phone :</b> 6069597969</span>
                   </div>
                      </div>
                      <div className='w-4/5 max-sm:w-full m-auto bg-indigo-200 shadow-xl hover:scale-105 transition-all duration-200 p-5'>
                      <div className='justify-center -space-x-2    flex'>
                  
      <svg className='mr-4' xmlns="http://www.w3.org/2000/svg" width="40px"  viewBox="0 -960 960 960"  fill="#000"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
      <span className='m-auto '> <b> Email : </b>{userprofile.email}</span>
                   </div>
                      </div>
                      <Link to="/myorders">
                      <div className='w-4/5 max-sm:w-full m-auto  bg-indigo-200 shadow-xl hover:scale-105 transition-all duration-200 p-5'>
                      <div className='justify-center -space-x-2    flex'>
                      <svg className='mr-4' xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000"><path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z"/></svg>
                   <span className='m-auto '>View Order</span>
                   </div>
                      </div>
                   </Link>
                     
                     
              </div>
              </div>
          </div>
      </section>
      
        
      
      
          </div>
           )
       }
      </>
  
  )
}

export default MyProfile