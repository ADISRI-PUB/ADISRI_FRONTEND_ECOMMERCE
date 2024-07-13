import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SingleBookpage from './SingleBookpage'
import '../Css/IPrePrimary.css'

function ProdcutsCard({product}) {   
  return (
    <>
    
    <section className="w-1/3 max-sm:w-full max-sm:justify-center max-sm:flex card-book    ">

     
        <section className=" primary-card  shadow-black max-sm:w-1/2  text-center  transform duration-500  cursor-pointer content-product rounded-b-xl ">
          <div>
            <img className=' duration-300  hover:p-0 p-2  ' src={`http://127.0.0.1:8000/${product.Image}`} alt=""/>
            </div>
            <div className='p-2'>
          <div className='productname mt-3'><h1 className="">{product.Name}</h1></div>
          <div className='flex mt-3 max-sm:flex-wrap'>
            <div className='w-1/2 max-sm:w-full'>
            <button className="p-2 sm:w-13 mb-3 float-start w-1/2 cart-button text-white rounded-md "><svg className='m-auto' xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" width="1.3vw" fill="#FFFFFF"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg></button></div>
            <h2 className="font-semibold w-1/2 max-sm:w-full  prodcut-price flex logg justify-center  mb-3"> <span className='float-end '>&#x20b9;{product.Price}/-</span></h2>
            </div>
            </div>
        </section>
    </section>

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