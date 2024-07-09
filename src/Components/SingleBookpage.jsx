import React from 'react'

function SingleBookpage({title,source, price}) {
  return (
    <div className='w-full h-full bg-blue-200 flex p-3 gap-5'>
         <div className=' p-4 w-3/5  '>
               <img className='rounded-xl' src={'AMAZING PICTURES B.jpg'}  />
         </div>
         <div className='text-5xl    '>
            <br />
            <h1 className='font-thin'>AMAZING PICTURES B (Adisri Publications)</h1>
            <br />
             <h6 className='text-xl'>Description : <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ducimus facilis itaque qui quia totam ratione rerum quas maiores eligendi omnis distinctio, architecto nisi odit fugiat quisquam magni ab soluta expedita ipsa ut obcaecati. Libero assumenda dolor ex, omnis modi perferendis! Facere ea corporis quaerat provident repellat quisquam, consequatur sapiente.</h6>
            <br />
            <div className='flex text-4xl'>Price :&#x20b9;120/-&nbsp; 
            <div className='flex text-3xl line-through'>&#x20b9;180</div>
            </div>
            
            <br />
          <div className='flex gap-8'>
             <span className='text-white text-xl p-5 rounded-full  bg-blue-500 cursor-pointer w-40 text-center'> <span className='text-white'> WishList</span> &#10084;</span>
             <span className='text-xl p-5 rounded-full bg-black text-white cursor-pointer w-40 text-center'>Add To Cart</span>
          </div>
         </div>
    </div>
  )
}

export default SingleBookpage