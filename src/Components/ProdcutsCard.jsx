import React from 'react'

function ProdcutsCard() {
  return (
    <>
     <div className='sm:w-4/5 bg-violet-300'>
         <div className='w-1/6 bg-violet-400 p-4'>
     <img src="AMAZING PICTURES  A.jpg" alt="product_image" />
     <br />
       <h3 className='text-center text-white '>AMAZING PICTURES  A (Adisri Publications)</h3>
       <h4 className='text-white  text-center'> Price  <span className='text-xl'>	&#x20b9;120</span>   <span className='line-through'>&#x20b9;180</span>  </h4>
         </div>
     </div>

    </>
  )
}

export default ProdcutsCard