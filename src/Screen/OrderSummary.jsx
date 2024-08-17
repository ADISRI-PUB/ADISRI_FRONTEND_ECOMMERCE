import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../Css/Order.css";
import { ORDER_CREATE_RESET } from "../constants/OrderConstants";
import { createOrder } from "../actions/OrderActions";
import Loader from "../Components/Loader";
import ThanksOrdering from "./ThanksOrdering";
import ReactDOM from 'react-dom';
function OrderSummary() {
  const history = useNavigate();
  useEffect(()=>{
    if (!localStorage.getItem('token')) {
       history('/')
    }
    
 })
  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, error, success } = orderCreate;
  const [loadtocreate, setloadtocreate]=useState(false)
  const dispatch = useDispatch();
  const { userprofile } = useSelector((state) => state.user);

  const [subtotal, setSubtotal] = useState(0);
  const [shippingPrice, setShippingprice] = useState(0);

  const cart = useSelector((state) => state.cart);
  cart.itemsPrice = cart.cartItems
    .reduce((acc, item) => acc + item.price * item.qty, 0)
    .toFixed(2);
  cart.ShippingPrice = (cart.itemsPrice > 1999 ? 0 : 50).toFixed(2);
  cart.TaxPrice = Number(0.082 * cart.itemsPrice).toFixed(2);
  cart.ToatalPrice = (
    Number(cart.TaxPrice) +
    Number(cart.ShippingPrice) +
    Number(cart.itemsPrice)
  ).toFixed(2);
  const [image, setImage] = useState("");
  useEffect(() => {

    if (success) {
      setloadtocreate(false)
  //    document.querySelector('.thanks').innerHTML=` <div className='w-[50%] h-[] bg-white flex logg'>
  //     <div className='w-1/2 m-auto '>
  //     <img className='w-3/4 opacity-80' src="7171668_3544858.jpg" alt=""  />
      
  //     </div>
  // </div>}`
  const container = document.querySelector('.thanks');

if (container) {
  ReactDOM.render(<ThanksOrdering />, container);
}
      setTimeout(()=>{

        
        history(`/trackorder/${order.Order_Id}`);
        dispatch({ type: ORDER_CREATE_RESET });
      },2000)
    }
    if (error) {
        setloadtocreate(false)
      //  console.log(error);
      history('/error')
       
    }

    setSubtotal(cart.itemsPrice);
    setShippingprice(cart.ShippingPrice);
    // console.log(cart.shippingAddress);
    // setImage(cart.cartItems.image)
    // console.log(image);
  }, [success, history,error]);

  const placeorder = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        ShippingPrice: cart.ShippingPrice,
        TaxPrice: cart.TaxPrice,
        ToatalPrice: cart.ToatalPrice,
      })
    );

  };

  return (
    <>
    <div className="min-h-screen thanks flex justify-center">
    {
      loadtocreate ?(
           <div className="min-h-screen flex justify-center order-confirm ">
              
              <Loader/>
              
           </div>
      ):(
        <div className="min-h-screen shipping-page  bg-[#cccaff] ">
        <div className="grid sm:grid-cols-2 max-sm:grid-cols-1 ">
          <div>
        <h1 className="User-name p-10  max-sm:p-3 max-sm:ml-2  max-sm:text-xl">Thanks For Ordering !</h1>
        <p className="order-id ml-10 max-sm:p-3 max-sm:ml-2    max-sm:text-lg ">
          Your Order Summary
        </p>
        </div>
        <div>
          <img className="w-[45%] " src="new-entries-concept-illustration.png" alt="" />

        </div>
        </div>
        <br />
        <div className="w-4/5 max-sm:w-full m-auto summary-container-1 bg-[#a4a1ff] ">
          <div className=" leading-loose">
            <p className=" sm:ml-10 max-sm:ml-2 max-sm:p-2 sm:text-3xl max-sm:text-md p-3">Shipping Details</p>
            <div className="sm:ml-10 max-sm:ml-2 max-sm:p-2">
              <ul>
                <li className="flex logg space-x-3">
                  {" "}
                  <b>NAME :</b> <h3> {userprofile.name}</h3>
                </li>
                <li className="flex logg space-x-3">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 -960 960 960"
                    width="20px"
                    fill="#000"
                  >
                    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
                  </svg>{" "}
                  <h3> {userprofile.email}</h3>
                </li>
                <li className="flex logg space-x-3 ">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 -960 960 960"
                    width="20px"
                    fill="#000"
                  >
                    <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
                  </svg>
                  <h3>{cart.shippingAddress.phone}</h3>
                </li>
                <li>
                  <p>
                    {" "}
                    <span className="font-bold"> Address: </span>
                    {cart.shippingAddress.address}, {cart.shippingAddress.city} -{" "}
                    {cart.shippingAddress.postalcode}
                  </p>
                </li>
                <li>
                  {cart.shippingAddress.school ? (
                    <p>
                      {" "}
                      <span className="font-bold">School Name </span>:
                      {cart.shippingAddress.school}
                    </p>
                  ) : (
                    ""
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div className=" w-full ">
            <div className="flex justify-center  md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
              <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full  space-y-6">
                <h3 className="text-xl font-semibold leading-5 text-black">
                  Summary
                </h3>
                <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                  <div className="flex justify-between w-full">
                    <p className="text-baseleading-4 text-black">Subtotal</p>
                    <p className="text-base  leading-4 text-black">
                      &#x20B9;{subtotal}
                    </p>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-base  leading-4 text-black">
                      Tax Price{" "}
                      <span className="bg-[#8681FF] p-1 text-xs font-medium  leading-3 text-gray-800">
                        GST
                      </span>
                    </p>
                    <p className="text-base leading-4 text-black">
                      &#x20B9;{cart.TaxPrice}
                    </p>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-base  leading-4 text-black">Shipping</p>
                    <p className="text-base  leading-4 text-black">
                      &#x20B9;{shippingPrice}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-base  font-semibold leading-4 text-black">
                    Total
                  </p>
                  <p className="text-base  font-semibold leading-4 text-black">
                    &#x20B9;{cart.ToatalPrice}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="summary-container-1 gap-10 border-t p-4 w-4/5 max-sm:w-full m-auto max-sm:text-xs ">
        <div className=" w-full   space-y-3">
            {cart.cartItems.map((booked, index) => {
              return (
                <> 
                <div key={index} className="summary-container-1 w-full border shadow-md bg-[#a4a1ff]  ">
                  {" "}
                  
                  <div key={index} className="flex">
                    <div className="w-24 p-3 bg-white shadow-lg">
                      <img className="rounded-sm" src={booked.image} alt="" />
                    </div>
                    <div className="m-auto logg p-3">
                      <p>
                        {" "}
                        <b>Name</b>
                      </p>
                      <p >{booked.name}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 ">
                    <div className=" m-auto logg relative">
                      <p>
                        {" "}
                        <b> Quantity </b>
                      </p>
                      <p className="text-center">{booked.qty}</p>
                    </div>
                    <div className="m-auto logg">
                      <p>
                        {" "}
                        <b> Price </b>
                      </p>
                      <p className="text-center ">{booked.price}</p>
                    </div>
                    <div className=" m-auto logg">
                      <p>
                        {" "}
                        <b> Total Price</b>
                      </p>
                      <p className="text-center">{booked.qty*booked.price}</p>
                    </div>
                  </div>
                  
          </div>
                </>
                
              );
            })}
            </div>
  
          <div className=" w-full  justify-center ">
            <button
              onClick={()=>
                {
                  setloadtocreate(true)
                  placeorder()
                }
                
                }
              disabled={cart.cartItems === 0}
              className="  w-[80%]  transition-all duration-200 bg-[#8681FF] p-4 block m-auto  text-white hover:bg-gray-700 max-h-[60px] "
            >
              ORDER
            </button>
          
          </div>
        </div>
      </div>
      )
    }
    </div>
   </>
  )
}

export default OrderSummary;
