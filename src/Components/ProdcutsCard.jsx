import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
    
    <Link to={`/singlebook/${product.Product_Id}`}>
   
    <div className="mx-auto  max-sm:mt-4 max-sm:w-4/5 min-w-10 bg-white transform overflow-hidden rounded-lg  shadow-md duration-300 hover:scale-105 max-sm:min-h-[260px] sm:min-h-[490px] hover:shadow-lg max-sm:leading-snug">
  <div className='w-[100%]  '> <img className="object-cover " src={product.Image} alt="Product Image" /></div>
  <div className="p-4 max-sm:p-2">
    <h2 className=" text-lg max-sm:text-[10px] font-medium  text-gray-900 max-sm:leading-normal">{product.Name}</h2>
    <p className="mb-2 text-base flex flex-wrap max-sm:text-[8px] sm:text-lg text-gray-700"> <span> <b> Class : </b> {product.Class}</span>,<span> <b> SUBJECT :</b> {product.Subject}</span></p>
    <div className="flex items-center">
      <p className=" sm:text-md max-sm:text-[8px] font-semibold text-gray-900 w-full  text-center "> Price : &#x20b9;{product.Price}/-</p>
      
   
    </div>
  </div>
</div>
    </Link>

  )
}

export default ProdcutsCard