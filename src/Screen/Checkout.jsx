import React, { useEffect, useState } from "react";
import { useSelector ,useDispatch} from "react-redux";
import { Link ,useNavigate} from "react-router-dom";
import { saveShippingAddress } from '../actions/CartActions'



function Checkout() {
  const cart = useSelector(state => state.cart)
  const {shippingAddress} =cart
  const [address, setaddress] = useState(shippingAddress.address);
  const [city, setcity] = useState(shippingAddress.city);
  const [postalcode, setpostalcode] = useState(shippingAddress.postalcode);
  const [school, setschool] = useState(shippingAddress.school);
  const [phone,setphone] = useState(shippingAddress.phone)
  const [correctform,setCorrectform] =useState(true)
  const history = useNavigate()
  const dispatch = useDispatch()
  let data = useSelector((state) => state.cart.cartItems);
  //  console.log(data);
  const [Price, setPrice] = useState("");

  const [shipping, setShipping] = useState(50);
  useEffect(() => {
    let sum = 0;
    data.map((books) => {
      sum += books.price * books.qty;
    });
    setPrice(sum);
    if (sum >= 2000) {
      setShipping(0);
    }
  }, []);

  const createordershandler = (e) => {
    e.preventDefault()
     if (correctform) {

       dispatch(saveShippingAddress({address,city,postalcode,school,phone}))
       history('/ordersummary')
     }
     else{
        document.querySelector('.submitbutton').classList.replace('bg-gray-900','bg-red-600')
     }
  };
  return (
    <div className="sm:h-screen relative  overflow-hidden sm:flex bg-slate-900  ">
      <div className="absolute max-sm:hidden w-full h-hull z-0 opacity-50 top-20">
        <img className="w-2/5" src="pngegg (17)2.png" alt="" />
      </div>
      <div className="absolute right-12 ">
        <img src="pngegg (17)90.png" alt="" />
      </div>
      <form className="w-full  flex  logg">
        <div className="grid sm:px-10 col-span-2  w-3/5 max-sm:w-full  m-auto lg:px-20 xl:px-32 relative  ">
          <div className="mt-10 bg-white/20 border-2 border-white rounded-xl text-white backdrop-blur-sm px-4 pt-8 lg:mt-0">
            <p className="text-xl font-medium">Shipping Details</p>
            <p className="text-gray-200">
              Complete your order by providing your Shipping details.
            </p>

            <div className="">
              <label
                htmlFor="
                Phone"
                className="mt-4 mb-2 block text-sm font-medium label-phone"
              >
                Phone* 
              </label>

              <div className="relative">
                <input
                  type="number"
                  id="email"
                  name="phone"
                  className="w-full putr rounded-md border border-gray-200 text-black px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="XXXXX-XXXXX"
                  required
                  onBlur={(e)=>{
                    const regex =/[6-9]{1}[0-9]{9}/
                  //  console.log("dsfkljs");
                    if (regex.test(phone) && phone.length===10) {
                      document.querySelector('.label-phone').classList.add('text-white')
                      document.querySelector('.label-phone').classList.remove('text-red-600')
                      document.querySelector('.label-phone').innerHTML=`<p className=''>Phone* </p>`
                      document.querySelector('.putr').style.backgroundColor="white"
                      setCorrectform(true)
                      document.querySelector('.submitbutton').classList.replace('bg-red-600','bg-gray-900')
                    }
                    else{
                      setCorrectform(false)
                      document.querySelector('.putr').style.backgroundColor="#FF6969"
                      document.querySelector('.label-phone').classList.add('text-red-600')
                      document.querySelector('.label-phone').classList.remove('text-white')
                      document.querySelector('.label-phone').innerHTML=`<p>Phone* <span className="">please enter the valid phone number</span> </p>`
                    }
                    //  console.log(regex.test(e.target.value));
                }}
                  maxLength={10}
                  value={phone ? phone : " "}
                  onChange={(e)=>
                  {
                    
                    

                    setphone(e.target.value)
                      //  console.log(phone);
                     }
                    
                     
                  }
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3 opacity-50 text-black">
                  +91
                </div>
              </div>
              <label
                htmlFor="card-holder"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                School Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="card-holder"
                  name="card-holder"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 text-black focus:ring-blue-500 "
                  placeholder="Your full school name here"
                  value={school ? school : " "}
                  onChange={(e)=>setschool(e.target.value)}
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                    />
                  </svg>
                </div>
              </div>

              <label
                htmlFor="billing-address"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Billing Address*
              </label>
              <div className="flex flex-col sm:flex-row">
                <div className="relative flex-shrink-0 sm:w-7/12">
                  <input
                    type="text"
                    id="billing-address"
                    name="billing-address"
                    className="w-full rounded-md border border-gray-200 text-black px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Street Address"
                    required
                  
                    value={address ? address : " "}
                    onChange={(e)=>setaddress(e.target.value)}
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <img
                      className="h-4 w-4 object-contain"
                      src="pngegg (17)1.png"
                      alt="flag"
                    />
                  </div>
                </div>
                <select
                  type="text"
                  name="billing-state"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 text-black text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500  text-center"
                  required
                  value={city || ""}
                  onChange={(e)=>setcity(e.target.value)}
                >
                  <option value=""  disabled >
                    -------State-----
                  </option>
                  <option value="New Delhi">New Delhi</option>
                  <option value="Noida">Noida</option>
                  <option value="Uttar Pardesh">Uttar Pardesh</option>
                </select>
                <input
                  type="number"
                  name="billing-zip"
                  className="flex-shrink-0 text-black rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="ZIP"
                  required
                  value={postalcode ? postalcode : " "}
                  onChange={(e)=>setpostalcode(e.target.value)}
                />
              </div>

              {/* <!-- Total --> */}
              {/* <div className="mt-6 border-t border-b py-2">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-white">Subtotal</p>
          <p className="font-semibold  text-white">&#x20b9;{Price}/-</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium ">Shipping</p>
          <p className="font-semibold">
          &#x20b9;
            {
                Price>=2000?'0 (FREE*)':`${shipping}`
             }
          
            </p>
        </div>
      </div> */}
              {/* <div className="mt-6 flex items-center justify-between">
        <p className="text-sm font-medium ">Total</p>
        <p className="text-2xl font-semibold">&#x20b9;{Price+shipping}/-</p>
      </div> */}
            </div>
            <button
              onClick={(e)=>{
                createordershandler(e)
              }}
              type="submit"
              className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white submitbutton"
            >
              Continue
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
