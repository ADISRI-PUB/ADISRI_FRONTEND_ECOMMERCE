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
    <>
    <Link to={`/singlebook/${product.Product_Id}`}>
    {/* <section id='newcolor' classNameName="max-sm:w-1/2 m-auto rounded-lg ">

     
        <section classNameName="   shadow-black max-sm:w-full  text-center  transform duration-500  cursor-pointer content-product rounded-b-xl ">
          <div>
            <img classNameName=' duration-300  hover:p-0 p-2  ' src={`${product.Image}`} alt=""/>
            </div>
            <div classNameName='p-2'>
          <div classNameName='productname mt-3'><h1 classNameName="">{product.Name}</h1></div>
          <div classNameName='flex mt-3 max-sm:flex-wrap'>
            <div classNameName='w-1/2 max-sm:w-full flex justify-center max-sm:m-auto'>
            <button classNameName=" mb-3  float-start w-1/2 max-sm:w-1/2 cart-button text-black rounded-lg p-2 productname max-sm:p-1 max-sm:rounded-lg ">View</button></div>
            <h2 classNameName="font-semibold w-1/2 max-sm:w-full  prodcut-price flex logg justify-center  mb-3 productname"> <span classNameName='float-end '>&#x20b9;{product.Price}/-</span></h2>
            </div>
            </div>
        </section>
    </section> */}
    <div className="mx-auto mt-11 max-sm:w-4/5 min-w-16 transform overflow-hidden rounded-lg bg-white  shadow-md duration-300 hover:scale-105 hover:shadow-lg">
  <img className=" w-full object-cover object-center" src={product.Image} alt="Product Image" />
  <div className="p-4">
    <h2 className="mb-2 text-lg font-medium  text-gray-900">{product.Name}</h2>
    <p className="mb-2 text-base flex flex-wrap  text-gray-700"> <span> <b> Class : </b> {product.Class}</span>,<span> <b> SUBJECT :</b> {product.Subject}</span></p>
    <div className="flex items-center">
      <p className="mr-2 text-lg font-semibold text-gray-900 ">&#x20b9; {product.Price}/-</p>
      <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">&#x20b9; {product.Price+10}</p>
      <p className="ml-auto text-base font-medium text-green-500">~10% off</p>
    </div>
  </div>
</div>
    </Link>

     {/* <div classNameName='cards bg-purple-200 p-5 '>
         <div classNameName=' bg-violet-400  w-full  rounded-xl '>
  
     <br />
       <h3 classNameName='text-center text-white  '>asdad</h3>
       <h4 classNameName='text-white  text-center p-2'> Price  <span classNameName='text-xl'>	&#x20b9;adsa</span>   <span classNameName='line-through'>&#x20b9;180</span>  </h4>
     <h5>{product.Name}</h5>
     <h5>{product.Subject}</h5>
     <h5>{product.Price}</h5>
         </div>
      </div> */}
      



    </>
  )
}

export default ProdcutsCard