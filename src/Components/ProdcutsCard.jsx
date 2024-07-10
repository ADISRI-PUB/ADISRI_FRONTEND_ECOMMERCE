import React from 'react'
import { Link } from 'react-router-dom'
import SingleBookpage from './SingleBookpage'


function ProdcutsCard({product}) {
  return (
    <>
     {/* <div className='cards bg-purple-200 p-5 '>
         <div className=' bg-violet-400  w-full  rounded-xl '>
   <Link to='/singlebook'> <img className='rounded-t-xl m-auto' src={source} alt="product_image" /></Link> 
     <br />
       <h3 className='text-center text-white  '>{title}</h3>
       <h4 className='text-white  text-center p-2'> Price  <span className='text-xl'>	&#x20b9;{Price}</span>   <span className='line-through'>&#x20b9;180</span>  </h4>
         </div>
     </div> */}
     <h5>{product.Name}</h5>
     <h5>{product.Subject}</h5>
     <h5>{product.Price}</h5>




    </>
  )
}

export default ProdcutsCard