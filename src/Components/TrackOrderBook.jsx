import React, { useEffect, useState } from 'react'
const BASE_URL =import.meta.env.VITE_URL
export default function TrackOrderBook({booked ,image}) {
    let image2=''
    const [i,setI] =useState()
     useEffect(()=>{
   const getImage = async () => {
     try {
       const response = await fetch(`${BASE_URL}/data/products/${booked.product}`);
       if (!response.ok) {
         throw new Error('Network response was not ok');
        }
        const data = await response.json();
         image2 = data.Image[0];
        // console.log(image); 
        // setbookeditems(image)
        // This will log the image after it's been assigned
        setI(image2)
      } catch (error) {
        // console.error('There was a problem with the fetch operation:', error);
      }
    };
     getImage()
     },[i])
    
  return (
    <div>
          <div  className="p-4">
          

              <a
                href="#"
                className="flex flex-col items-center w-4/5 m-auto bg-[#445862] border  shadow-md md:flex-row md:max-w-xl "
              >
                <img
                  className="w-[30%]  max-sm:w-2/5 "
                  src={i}
                  alt="product_image"
                />

                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-[1.3vw] max-sm:text-[4vw] font-semibold tracking-tight text-white ">
                    {booked.Name}
                  </h5>
                  <p className="mb-3 font-normal text-white">
                    Quantity :{booked.Qty}
                  </p>
                  <p className="mb-3 font-normal text-white">
                    Price :{booked.Price}
                  </p>
                </div>
              </a>
            </div>
    </div>
  )
}
