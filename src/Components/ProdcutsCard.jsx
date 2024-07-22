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
        let temp= el.getElementsByClassName('cart-button')
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
    <>
    <Link to={`/singlebook/${product.Product_Id}`}>
    <section id='newcolor' className="max-sm:w-1/2 m-auto rounded-lg ">

     
        <section className="   shadow-black max-sm:w-full  text-center  transform duration-500  cursor-pointer content-product rounded-b-xl ">
          <div>
            <img className=' duration-300  hover:p-0 p-2  ' src={`${product.Image}`} alt=""/>
            </div>
            <div className='p-2'>
          <div className='productname mt-3'><h1 className="">{product.Name}</h1></div>
          <div className='flex mt-3 max-sm:flex-wrap'>
            <div className='w-1/2 max-sm:w-full flex justify-center max-sm:m-auto'>
            <button className="p-2  mb-3  float-start w-1/2 max-sm:w-1/2 cart-button text-black rounded-ful productname max-sm:p-1 max-sm:rounded-lg ">View...</button></div>
            <h2 className="font-semibold w-1/2 max-sm:w-full  prodcut-price flex logg justify-center  mb-3 productname"> <span className='float-end '>&#x20b9;{product.Price}/-</span></h2>
            </div>
            </div>
        </section>
    </section>
    </Link>

     {/* <div className='cards bg-purple-200 p-5 '>
         <div className=' bg-violet-400  w-full  rounded-xl '>
  
     <br />
       <h3 className='text-center text-white  '>asdad</h3>
       <h4 className='text-white  text-center p-2'> Price  <span className='text-xl'>	&#x20b9;adsa</span>   <span className='line-through'>&#x20b9;180</span>  </h4>
     <h5>{product.Name}</h5>
     <h5>{product.Subject}</h5>
     <h5>{product.Price}</h5>
         </div>
      </div> */}
      



    </>
  )
}

export default ProdcutsCard