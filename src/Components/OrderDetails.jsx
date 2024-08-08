import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails } from "../actions/OrderActions";
import { deleteorderid } from "../actions/OrderActions";
function OrderDetails({ time, items=[], order_id, total_amount }) {
  const dispatch = useDispatch();
  //  const [id,setId] =useState(details.Order_Id)
  //  const [items,setItems] =useState([])
  //  const orderDetails =useSelector(state =>state.orderDetails)

  useEffect(() => {
   
    //  time.substr(0,time.indexOf("T")) 
   
    
     
    // console.log(items);
    
  }, []);

  return (
    <>
      {/* CreateAt : "2024-08-03T10:11:25.485417Z" Delivered_At : null Is_Delivered
      : false Order_Id : 3 Shipping_Price : null Tax_Price : null Total_Price :
      null user : 21 */}
      {/* <h1>Hi HCL, it is in sec 16 ,Noida{id}</h1> */}
      <div className="border-b">
      
      <div className="sm:ml-10 p-4 text-center sm:text-lg order-detials  ">
        <h3 className=" "> <b> Order ID :</b>{order_id}</h3>
        <h4 className=" "> <b> Order on :</b>{
        time.substr(0,time.indexOf("T"))
        }</h4>
        <h5 className=""> <b> Total Amount :</b>&#x20B9; {total_amount}</h5>
       
      </div>
      <div className="  relative">
       <div className="w-[30%] m-auto   max-sm:w-4/5 max-sm:p-0    space-y-3 p-2">
            <button onClick={()=>{ dispatch( deleteorderid(order_id))}} className=" w-3/5 flex justify-center m-auto border-2 border-gray-900 p-5 ">
              CANCEL ORDER
            </button>
            <Link to={`/trackorder/${order_id}`}>
              <button className=" w-3/5 flex m-auto text-white justify-center bg-gray-400 transition-all duration-200 hover:bg-gray-900 p-5 mt-3">
                TRACK ORDER
              </button>
            </Link>
          </div>
          </div>
          <div className="order-detials2">
      {
 

         items.map((e,index)=>{
         
          
return(
 
  
  <div key={index} className="w-4/5 max-sm:w-full  sm:m-auto  p-2  ">
          {/* <div className='col-span-2 space-x-10 flex w-4/5 m-auto' >
     <img className='w-1/5' src="KIDS ACTIVITY C.jpg" alt="ProductPhoto"  />
     <div className=' grid logg '>
     <p className='font-medium sm:text-2xl'>KIDS ACTIVITY C</p>
     <p className='font-medium sm:text-2xl'>Price : &#x20B9;180</p>
     <p className='font-medium sm:text-2xl'>Quantity : 2</p>
     </div>
     </div> */}
     
          <div className="">
            <div className="m-10 space-x-3 w-80 max-sm:w-60 flex  rounded-lg border-2 border-gray-100 p-3 shadow-lg shadow-gray-200">
              {/* <div className="w-2/5">
                <img src={e.Image} alt="product image" />
              </div> */}
              <div className="w-full  text-center  ">
                <p className="text-lg font-bold">{e.Name}</p>
                <p className="text-sm font-semibold text-gray-500"></p>
                <p className="mt-3 text-2xl font-bold">&#x20B9;{e.Price}</p>
                <ul className="mt-4 space-y-2 font-semibold">
                  <li className="">
                    <span>Quantity : {e.Qty}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
       
        </div>
  )
    })
  }
  </div>
  </div>
      </>
  );
}

export default OrderDetails;
