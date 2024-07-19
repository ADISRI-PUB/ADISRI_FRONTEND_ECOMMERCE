import React, { useEffect, useState } from "react";
import '../Css/cart.css'

function Cartsection() {
  // const [data, setData] = useState([
  //   {
  //     id: 1,
  //     book_title: "ALL IN ONE READING.jpg",
  //     book_price: 41.70,
  //     quantity: 23,
  //     class: 4,
  //     img:'ALL IN ONE READING.jpg'
  //   },
  //   {
  //     id: 2,
  //     book_title: "ALL IN ONE WRITING BOOK HARD BOUND.jpg",
  //     book_price: 49.67,
  //     quantity: 78,
  //     class: 1,
  //     img:'ALL IN ONE WRITING BOOK HARD BOUND.jpg'
  //   },
  //   {
  //     id: 3,
  //     book_title: "MY BOOK OF CURSIVE (CAPITAL LETTERS).jpg",
  //     book_price: 45.38,
  //     quantity: 29,
  //     class: 2,
  //     img:'MY BOOK OF CURSIVE (CAPITAL LETTERS).jpg'
  //   },
  //   {
  //     id: 4,
  //     book_title: "KIDS ACTIVITY B.jpg",
  //     book_price: 32.94,
  //     quantity: 13,
  //     class: 2,
  //     img:'KIDS ACTIVITY B.jpg'
  //   },
  //   {
  //     id: 5,
  //     book_title: "KIDS ACTIVITY C.jpg",
  //     book_price: 50.00,
  //     quantity: 46,
  //     class: 5,
  //     img:'KIDS ACTIVITY C.jpg'
  //   },
    

  // ]);
  // let [arraydata,setarraydata] =useState([...data])
  const [Price,setPrice] =useState(0)
  const handlechangeincrease =(ids,e)=>{
       e.preventDefault()
      let change =  arraydata.map((book)=>{
          if (book.id===ids) {
            setPrice(Math.floor(Price-=book.book_price))
             book.quantity++
            
          }
           return book
       
      })
   setarraydata(change)
      
  }
  let handlechangedecrease =(ids,e)=>{
    e.preventDefault()
        let change =arraydata.map((books)=>{
              if (books.id===ids) {
                if (books.quantity>0) {
                    setPrice(Math.floor(Price-=books.book_price))
                    books.quantity-- 
                }
                else{

                }
              }
            return books
        })
        setarraydata(change)
  }
  const productdiscard=(id,e)=>{
      let price=0
        let books = arraydata.filter((book)=>{
            if (book.id!=id) {
                price+=Math.floor(book.book_price*book.quantity)
                return book
            }
            
        })
        setPrice(price)
        setarraydata(books)
  }
  useEffect(()=>{
    let temp =0
     arraydata.map((books)=>{
         temp+=Math.floor(books.book_price*books.quantity)
    })
    setPrice(temp)
  },[])
  return (
  <>
   <div className="flex flex-col space-y-4">
                <a
                  className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
                  
                >
                  <span>
                    <svg
                      className="w-5 h-5 text-gray-800 fill-current group-hover:text-white"
                      viewBox="0 0 16 16"
                      version="1.1"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                      ></path>
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-gray-800 group-hover:text-white">Google</span>
                </a>
              </div>
  </>
        );
  
}

export default Cartsection;
