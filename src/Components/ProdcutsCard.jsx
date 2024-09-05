import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Css/IPrePrimary.css'
import SingleBookpage from './SingleBookpage'
import '../Css/IPrePrimary.css'
import '../Css/onetoeight.css'

function ProdcutsCard({product,id}) {
  useEffect(()=>{
    if (id==0) {
      let el= document.querySelectorAll('#newcolor')
      el.forEach((el)=>{
        let temp= el.getElementsByclassNameName('cart-button')
         el.style.backgroundColor='#eefdff'
      })
    }   
    else{
      let el= document.querySelectorAll('#newcolor')
      el.forEach((el)=>{
         el.style.backgroundColor='#ffe2ad'
      })
    }
 
  },[])

  return (
    
   
   
    <div  className="mx-auto  sm:aspect-[4/9]   max-sm:mt-4 max-sm:w-4/5  bg-white transform overflow-hidden rounded-lg relative shadow-md duration-300  hover:shadow-lg max-sm:leading-snug">
      <div className='relative w-[90%] h-[58%] flex logg  m-auto justify-center  ' style={{perspective:'900px'}}>
  <div className=' sm:absolute image-card  w-full m-auto'>
  <img className="w-[90%] m-auto " src={product.Image} alt="Product Image" />
</div>
</div>
  <div className="p-4 max-sm:p-2 relative">
    <h2 className=" text-lg max-sm:text-[10px] font-medium  text-gray-900 max-sm:leading-normal">{product.Name}</h2>
    <p className="mb-2 text-base  max-sm:text-[8px] sm:text-lg text-gray-700"> <span> <b> SUBJECT :</b> {product.Subject}</span></p>
    <div className="flex items-center">
      <p className=" sm:text-xl max-sm:text-[10px] font-semibold text-gray-900 w-full mt-1"> <span className='font-sans' > <span className='text-[13px] max-sm:text-[6px]  relative -top-[5px] max-sm:-top-1'> &#x20b9;</span>{product.Price}/-</span> <span className='text-gray-400'>M.R.P</span></p>
    </div>
   <p className='text-[#4d6963] font-semibold max-sm:text-[8px] '>Paperback</p>

  </div>
    <Link to={`/singlebook/${product.Product_Id}`}
     className='relative'
    >  <button className='m-auto flex space-x-4 justify-center  max-sm:space-x-1  relative  logg   py-2 px-5 max-sm:px-2 rounded-full bg-gray-800 text-white  hover:svg-rotate'>
       <span className='sm:text-sm max-sm:text-[8px]  '>View Book</span>
      <svg id='_45' className=' transition-all duration-200 max-sm:w-3  sm:w-5' xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"  fill="#e8eaed"><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></svg></button> </Link>
      <div className='sm:hidden max-sm:visible h-1'>

      </div>
</div>
   
  )
}

export default ProdcutsCard