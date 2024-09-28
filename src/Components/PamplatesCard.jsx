import React from 'react'
import ProdcutsCard from '../Components/ProdcutsCard'
// import "../Css/IPrePrimary.css";

function PamplatesCard({pamplat,id}) {
    
  return (
    <div >
        <div >
        <div id="for_hole_page " className='mt-2' >
            <div id="Pamplates_Images" className='mx-3 '> 
                <div className=' text-center '>
                <h1 className='bg-[#7143e0] inline-block text-white text-xl md:text-3xl lg:text-4xl font-serif w-[80%]  rounded-lg'> Presenting {pamplat.Name}</h1>
                </div>
                <div className='mt-1 justify-center mx-auto border-double border-4  border-red-400 rounded-lg md:w-[60%]  lg:w-[75%] '>
                <img src={pamplat.Pamplates_Image} 
                className='drop-shadow-2xl'/>
                </div>
                
            </div>

            <div id="For_Book_Image" className='mt-1'>
                <div className='  grid  auto-cols-max grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
                
            {
                pamplat.Pamplates_Book.map((book)=>{
                    return (
                        <div key={book.Product_Id} className=" ">
                        <ProdcutsCard key={book.Product_Id} product={book} id={1} />
                      </div>
                    )
                })
                    // pamplat.Pamplates_Book.map((book)=>(
                    //     <ProdcutsCard key={book.Product_Id} product={book} id={1} />
                    // ))
                }
                
            </div>
            </div>
        </div>
        </div>
    </div>
    
  )
}

export default PamplatesCard