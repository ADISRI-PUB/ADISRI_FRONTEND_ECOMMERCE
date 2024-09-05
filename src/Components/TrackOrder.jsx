import React, { useState, useEffect,useMemo } from "react";
import { useParams, useNavigate, json } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrderDetails, getOrderDetails } from "../actions/OrderActions";
import { listProductsDetails } from "../actions/ProductsActions";
import { deleteorderid } from "../actions/OrderActions";
import { Helmet } from 'react-helmet';
import "../Css/Order.css";
import TrackOrderBook from "./TrackOrderBook";
import emailjs from '@emailjs/browser';
import Loader from "./Loader";
import Take from "/Take.png"
const BASE_URL = import.meta.env.VITE_URL;
function TrackOrder() {
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, error, loading } = orderDetails;
  const dispatch = useDispatch();
  const history = useNavigate();
  const { id } = useParams();
  useEffect(()=>{
    if (!localStorage.getItem('token')) {
       history('/')
    }
   
 })
 
  // const {} 
  // console.log(order);
   useEffect(()=>{
     if (order) {
    // setTimeout(()=>{
    //   const orderItems = [];
    //   order.orderItems.map((products,index)=>{
    //     orderItems.push({
    //        Name:products.Name,
    //        Quantity:products.Qty  
    //     })
    //   })
    //   let orderDetailsmail = '';
    //   orderItems.forEach((item, index) => {
    //     orderDetailsmail  += `Item ${index + 1}:  ,`;
    //     orderDetailsmail  += ` Product Name: ${item.Name} `;
    //     orderDetailsmail  += ` Quantity: ${item.Quantity}  -----------------`;
    //   });
    //   let shipping  =`${order.shippingAddress.Address},${order.shippingAddress.City}-${order.shippingAddress.PostalCode}`
      
    //   const emailParams = {
    //      name: order.user.name,
    //      email: order.user.email,
    //      phone:order.shippingAddress.Phone_Number,
    //      school_name:order.shippingAddress.School_name,
    //     order_details: orderDetailsmail,
    //     shipping:shipping,
    //     Total_Price:order.Total_Price,
    //   };     
    //   console.log(emailParams);
    // //   emailjs.send('service_cgmvlif', 'template_ias4gas', emailParams)
    // //   .then(function(response) {
    // //      console.log('Email sent successfully!', response.status, response.text);
    // //      alert('Your order has been submitted successfully!');
    // //   }, function(error) {
    // //      console.error('Failed to send email.', error);
    // //      alert('There was an error sending your order. Please try again.');
    // //   });
    // },5000)
  }
   },[order])
  const { shippingAddress } = useSelector((state) => state.cart);
  // const {shippingAddress} =useSelector(state=>state.cart)
  // const productDetails = useState(state=> state.productDetails)
  // const {product} =productDetails
  const [bookeditems, setbookeditems] = useState([]);
  const [loader,setLoader] =useState(true)
  

  let imagearray = [];
  const { userprofile } = useSelector((state) => state.user);
  const step = ["Placed", "Processing", "Shipped", "Delivered"];
  const step2 = [
    {
      step: "Placed",
      icon: (
        <svg
        className="m-auto"
        xmlns="http://www.w3.org/2000/svg"
        height="31px"
          viewBox="0 -960 960 960"
          width="31px"
          fill="#000"
          >
          <path d="m691-150 139-138-42-42-97 95-39-39-42 43 81 81ZM240-600h480v-80H240v80ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40ZM120-80v-680q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v267q-19-9-39-15t-41-9v-243H200v562h243q5 31 15.5 59T486-86l-6 6-60-60-60 60-60-60-60 60-60-60-60 60Zm120-200h203q3-21 9-41t15-39H240v80Zm0-160h284q38-37 88.5-58.5T720-520H240v80Zm-40 242v-562 562Z" />
        </svg>
      ),
    },
    {
      step: "Processing",
      icon: (
        <svg
        className="m-auto "
        xmlns="http://www.w3.org/2000/svg"
        height="31px"
        viewBox="0 -960 960 960"
        width="31px"
        fill="#000"
        >
          <path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" />
        </svg>
      ),
    },
    {
      step: "Shipped",
      icon: (
        <svg
        className="m-auto"
        xmlns="http://www.w3.org/2000/svg"
        height="31px"
        viewBox="0 -960 960 960"
        width="31px"
        fill="#000"
        >
          <path d="M240-160q-50 0-85-35t-35-85H40v-440q0-33 23.5-56.5T120-800h560v160h120l120 160v200h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85H360q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T280-280q0-17-11.5-28.5T240-320q-17 0-28.5 11.5T200-280q0 17 11.5 28.5T240-240ZM120-360h32q17-18 39-29t49-11q27 0 49 11t39 29h272v-360H120v360Zm600 120q17 0 28.5-11.5T760-280q0-17-11.5-28.5T720-320q-17 0-28.5 11.5T680-280q0 17 11.5 28.5T720-240Zm-40-200h170l-90-120h-80v120ZM360-540Z" />
        </svg>
      ),
    },
    {
      step: "Dilevered",
      icon: (
        <svg
        className="m-auto"
        xmlns="http://www.w3.org/2000/svg"
        height="31px"
        viewBox="0 -960 960 960"
        width="31px"
          fill="#000"
        >
          <path d="M480-510ZM160-160v-375l-72 55-47-63 439-337 440 336-48 64-392-300-240 184v356h120v80H160Zm437 80L428-250l56-57 113 113 227-226 56 57L597-80Z" />
        </svg>
      ),
    },
  ];
   
    // const result =useMemo(()=>getImage(),[bookeditems])
  const [currentstep, setCurrentstep] = useState(1);
  const deletehandler = (e) =>{
    e.preventDefault()
    dispatch(deleteorderid(order.Order_Id))
    dispatch(getAllOrderDetails())
    setTimeout(()=>{
      history('/myorders')

 },1000)
  }
  useEffect(() => {
    dispatch(getOrderDetails(id));
    // setLoader(false)

  }, [dispatch]);
  
  const title = `Track Order #${order?.Order_Id} - Adisri Publications`;
  const description = `Track the status of your order #${order?.Order_Id} at Adisri Publications. Your order is currently Placed `;
  const keywords = `Track Order, Order ${order?.Order_Id},  Adisri Publications`;

  return (
    <>
    {
      loading ?(
      <div className="min-h-screen flex justify-center">
     <Loader/>
     </div>
    ):(
        <div className="min-h-screen  ">
          <div className="application">
      <Helmet>
        <title>{title}</title>
        <meta 
          name="description" 
          content={description} 
        />
        <meta 
          name="keywords" 
          content={keywords}
    
        />
      </Helmet></div>
               
          <div className=" grid grid-cols-2 logg">
          <div className="ml-2">
        <h1 className="ml-2 max-sm:ml-0  font-semibold confirm-text ">
       
          Your Order Is Confirmed !
        </h1>
        
        <p className="ml-8 max-sm:ml-4 font-medium  border-slate-200 User-name">
          {" "}
          Hi, {userprofile.name} !
        </p>
          </div>
          <div className="m-auto flex justify-center">
         
               <img className="w-2/6" src={Take} alt="" />
               </div>
        </div>
        <div className="flex justify-between  w-full">
          {step2.map((e, index) => {
            return (
              
              <div
                key={index}
                className={`items-of-step p-3  ${
                  currentstep >= index + 1
                    ? "before:bg-[#74c271]"
                    : "before:bg-slate-300"
                } `}
              >
                <p
                  className={` max-sm:w-16 max-sm:h-16 max-sm:text-xs w-20 h-20  relative z-10 flex text-sm justify-center logg flex-col transition-all duration-300   rounded-full  text-black ${
                    currentstep >= index + 1 ? "actives" : "bg-slate-300"
                  }`}
                >
                  {" "}
                  <span> {e.icon}</span>
                </p>
                {e.step}
              </div>
            );
          })}
          {/* <input type="range" min="0" max="100" step="25"  /> */}
          {/* <div className='m-auto text-center w-full  relative checked-shipment-container ' >
                <span className='h-1 max-sm:h-0.5 bg-gray-200 flex logg right-0 element -z-10 w-1/2 absolute'></span>
                 <div className='circles-shipment m-auto bg-green-400 rounded-full '></div>
                 <svg className='m-auto' xmlns="http://www.w3.org/2000/svg" height="3.5vw" viewBox="0 -960 960 960" width="3.5vw" fill="#000"><path d="m691-150 139-138-42-42-97 95-39-39-42 43 81 81ZM240-600h480v-80H240v80ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40ZM120-80v-680q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v267q-19-9-39-15t-41-9v-243H200v562h243q5 31 15.5 59T486-86l-6 6-60-60-60 60-60-60-60 60-60-60-60 60Zm120-200h203q3-21 9-41t15-39H240v80Zm0-160h284q38-37 88.5-58.5T720-520H240v80Zm-40 242v-562 562Z"/></svg>
                 Order Placed
               </div>
               <div className='m-auto  text-center w-full  relative checked-shipment-container '>
               <span className='h-1 max-sm:h-0.5 bg-gray-200 flex logg right-0 element -z-10 w-full absolute'></span>
               <div className='circles-shipment bg-gray-300 rounded-full  m-auto'></div>
               <svg className='m-auto ' xmlns="http://www.w3.org/2000/svg" height="3.5vw" viewBox="0 -960 960 960" width="3.5vw" fill="#000"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg>
               Processing
               </div>
               <div className='text-center m-auto w-full relative checked-shipment-container'>
               <span className='h-1 max-sm:h-0.5 bg-gray-200 flex logg right-0 element -z-10 w-full absolute'></span>
               <div className='circles-shipment bg-gray-300 rounded-full m-auto '></div>
               <svg className='m-auto' xmlns="http://www.w3.org/2000/svg" height="3.5vw" viewBox="0 -960 960 960" width="3.5vw" fill="#000"><path d="M240-160q-50 0-85-35t-35-85H40v-440q0-33 23.5-56.5T120-800h560v160h120l120 160v200h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85H360q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T280-280q0-17-11.5-28.5T240-320q-17 0-28.5 11.5T200-280q0 17 11.5 28.5T240-240ZM120-360h32q17-18 39-29t49-11q27 0 49 11t39 29h272v-360H120v360Zm600 120q17 0 28.5-11.5T760-280q0-17-11.5-28.5T720-320q-17 0-28.5 11.5T680-280q0 17 11.5 28.5T720-240Zm-40-200h170l-90-120h-80v120ZM360-540Z"/></svg>
               Shipped
               </div>
               <div className=' m-auto text-center relative w-full checked-shipment-container'>
               <span className='h-1 max-sm:h-0.5 bg-gray-200 flex logg left-0 element -z-10 w-1/2 absolute'></span>
               <div className='circles-shipment bg-gray-300 rounded-full m-auto '></div>
               <svg className='m-auto' xmlns="http://www.w3.org/2000/svg" height="3.5vw" viewBox="0 -960 960 960" width="3.5vw" fill="#000"><path d="M480-510ZM160-160v-375l-72 55-47-63 439-337 440 336-48 64-392-300-240 184v356h120v80H160Zm437 80L428-250l56-57 113 113 227-226 56 57L597-80Z"/></svg> 
               Delivered
               </div> */}
        </div>
        <div>
          <br />
        </div>
        <div>
          <p className="leading-loose ml-8  w-4/5 m-auto border-slate-200 order-id">
            Order ID : {order ? order.Order_Id : " "}
          </p>
          <a className=" m-auto block ml-[2%]   cursor-pointer ">
            {
              currentstep >=3 ?(<></>):(
               
          <button onClick={deletehandler}  className=" w-1/5 max-sm:w-[60%] justify-center m-auto border-2 transition-all duration-200 hover:bg-red-500 hover:text-white  border-gray-900 sm:p-5 max-sm:p-2 cancel-order ">
              CANCEL ORDER
            </button>
              )
            }
          </a>
          <br />
          <br />
          <div className=" p-4 leading-loose border-b gap-20 border-slate-200 info-container max-sm:space-y-10">
            <div>
              <p className="font-medium">Delivery Address</p>
              <p>
                {shippingAddress.address}, {shippingAddress.city} -{" "}
                {shippingAddress.postalcode}
              </p>
              {/* <p>Address : {order ? order['shippingAddress']['Address'] : " "}</p>
                          <p>City : {order ? order['shippingAddress']['City'] : " "}</p>
                          <p>Postal COde  : {order ? order['shippingAddress']['PostalCode'] : " "}</p> */}
            </div>
            <div>
              <p className="font-medium">Billing Address</p>
              <p className="">
                {" "}
                {shippingAddress.address}, {shippingAddress.city} -{" "}
                {shippingAddress.postalcode}
              </p>
            </div>
            <div>
              <p className="font-medium">Contact Help</p>
              <p className=" flex logg  ">
                <svg
                  className="mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#000"
                >
                  <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
                </svg>
                0120 433 7735
              </p>
              <p className=" flex logg">
                <svg
                  className="mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#000"
                >
                  <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
                </svg>
                Contact@Adisri.com
              </p>
            </div>
            <div>
              <p className="font-medium">Payment Method</p>
              <p className="flex logg">
                <svg
                  className="mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#000"
                >
                  <path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z" />
                </svg>
                Cash On Delivery
              </p>
              <p className=" space-x-0 "> <b> &#x20B9;</b>  <span> { order ? `${order.Total_Price}`  :""}</span></p>
            </div>
          </div>
        </div>
        <div></div>
        <p>
          {/* {order.orderItems.map((item,index)=>{
          item.Name
        })} */}
        </p>
        <div className="order-detials">
        {
        
        
        order  ? (
          order.orderItems.map((books, indexd) => {      
          
           
            return (
            
            <TrackOrderBook key={indexd}  booked={books}/>
            
            );
          })
        ) : (
          
          <div className="loader m-auto"></div>
        )}
        </div>
      </div>
      )
       

    }
    
       
      
    

    </>
  );
}

export default TrackOrder;
