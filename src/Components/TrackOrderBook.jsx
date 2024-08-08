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
         image2 = data.Cover_Image;
        console.log(image); 
        // setbookeditems(image)
        // This will log the image after it's been assigned
        setI(image2)
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };
     getImage()
     },[i])
    
  return (
    <div>
          <div  className="p-4">
          

              <a
                href="#"
                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <img
                  className="w-1/5 max-sm:w-4/5"
                  src={i}
                  alt="product_image"
                />

                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {booked.Name}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Quantity :{booked.Qty}
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Price :{booked.Price}
                  </p>
                </div>
              </a>
            </div>
    </div>
  )
}
