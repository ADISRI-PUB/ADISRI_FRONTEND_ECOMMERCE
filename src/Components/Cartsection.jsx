import React, { useEffect, useState } from "react";
import '../Css/cart.css'
function Cartsection() {
  const [data, setData] = useState([
    {
      id: 1,
      book_title: "ALL IN ONE READING.jpg",
      book_price: 41.70,
      quantity: 23,
      class: 4,
      img:'ALL IN ONE READING.jpg'
    },
    {
      id: 2,
      book_title: "ALL IN ONE WRITING BOOK HARD BOUND.jpg",
      book_price: 49.67,
      quantity: 78,
      class: 1,
      img:'ALL IN ONE WRITING BOOK HARD BOUND.jpg'
    },
    {
      id: 3,
      book_title: "MY BOOK OF CURSIVE (CAPITAL LETTERS).jpg",
      book_price: 45.38,
      quantity: 29,
      class: 2,
      img:'MY BOOK OF CURSIVE (CAPITAL LETTERS).jpg'
    },
    {
      id: 4,
      book_title: "KIDS ACTIVITY B.jpg",
      book_price: 32.94,
      quantity: 13,
      class: 2,
      img:'KIDS ACTIVITY B.jpg'
    },
    {
      id: 5,
      book_title: "KIDS ACTIVITY C.jpg",
      book_price: 50.00,
      quantity: 46,
      class: 5,
      img:'KIDS ACTIVITY C.jpg'
    },
    

  ]);
  let [arraydata,setarraydata] =useState([...data])
  let [Price,setPrice] =useState(0)
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
      <br />
      <div className="bg-purple-100 p-3  sm:flex  ">
          <div className="w-3/5 max-sm:w-full">
      {
      
      arraydata.map((books, index) => {
        return (
            
        <div key={index} className="full relative products">
          <div className="absolute top-4 right-3 bg-pink-300 cursor-pointer rounded-full p-3" onClick={(e)=>productdiscard(books.id,e)}>
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" height="16px" width="16px" version="1.1" id="Capa_1" viewBox="0 0 490 490" xmlSpace="preserve">
<polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490   489.292,457.678 277.331,245.004 489.292,32.337 "/>
</svg>
          </div>
           <div className="  p-3  flex  logg   ">
           <div className="w-4/5 flex gap-6  space-y-4">
           <div className="w-1/5">
               <img  src={books.img} alt="" srcset="" />
           </div>
           <div className=" space-y-5 text-xl">
              <h2>{books.book_title}</h2>
              <p>Class :{books.class}</p>
              <span className="block">	
            <b> Price:</b> &#36;{books.book_price}<span className="line-through"> &#36;{Math.floor(books.book_price+20)}</span> </span>
              </div>
                 </div>
                 <div className="w-1/5 ">
                 <h3 className="flex gap-3  float-end p-3">
                <button className="cursor-pointer" onClick={(e)=>handlechangedecrease(books.id,e)}>
                <svg
                
                className="bg-purple-100"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#000"
                >
                  <path d="M200-440v-80h560v80H200Z" />
                </svg>
                </button>
                Quantity:{books.quantity}
                <button onClick={(e)=>handlechangeincrease(books.id,e)} >
                <svg
                
                className="bg-purple-100"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#000000"
                >
                  <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                </svg>
                </button>
              </h3> 
                </div>
            </div>
        </div>
          
          
        )
    })}
    </div>   
     <div className="w-2/5  p-4 rounded-xl h-96 max-sm:w-full right-0  logg flex justify-center ">
        <div className="bg-purple-200 border-2 border-white rounded-xl  h-full grid grid-rows-4 w-full   ">
           <h1 className="text-xl grid grid-cols-2  justify-center  m-auto"> <p className=" "> Total MRP &nbsp;&nbsp; </p><p>:&#36;{Price} </p> </h1>
        
           <h1 className="text-lg  grid grid-cols-2  justify-center m-auto "> <p className=" "> Discount &nbsp;&nbsp; </p><p>:&#36;0 </p> </h1>
        
           <h1 className="text-xl grid grid-cols-2  justify-center m-auto"> <p className=" "> Total &nbsp;&nbsp; </p><p>:&#36;{Price} </p> </h1>
        
           <h1 className="text-xl grid grid-cols-2  justify-center m-auto"> <p className=""> Grand Total &nbsp;&nbsp; </p><p>:&#36;{Price} </p> </h1>
        
           
        <button className="w-1/2 m-auto  overflow-hidden space-x-2 rounded-full text-center justify-center cursor-pointer p-4 hover:bg-purple-600 bg-purple-400 transition-all duration-200 flex">
        <svg className="" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/></svg>
        <span className="text-white">Checkout</span></button>
        <br />
        </div>
     </div>
     </div>
   
    </>
        );
  
}

export default Cartsection;
