import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'
import Hnavbar from '../Screen/Hnavbar'
import Home from '../Screen/Home'


export let Logindata 
function SignIn() {
  const [user, setUser] = useState(null);
const [profile, setProfile] = useState(null);
  const [token, setToken] = useState(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('login failed:', error)
  });
  console.log('login:', login);
  console.log('user:', user);

  //fetch the token and the profile data from the local storage  , And set them into the state repectively
  useEffect(() => {

    const stroedProfile = sessionStorage.getItem('profile');
    const storedToken = sessionStorage.getItem('token');

    if (storedToken){
      setToken(storedToken);
    }
    if (stroedProfile){
      setProfile(JSON.parse(stroedProfile));
    }

  },[]);



  useEffect(() => {
    if (user) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${user['access_token']}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user['access_token']}`
          }
        })
        .then(
          (response) => {
            console.log('changes');
            setProfile(response['data']);
            sessionStorage.setItem('profile', JSON.stringify(response['data']));
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }, [user]);



  useEffect(() => {
    if (profile === null) {
      console.log('profile null');
    } 

    else {
      console.log('sending data to django');

    const profileData = {
        name: profile['name'],
        email: profile['email'],
        username: profile['id']
      };

      console.log(profileData);

      axios.post('http://127.0.0.1:8000/api/auth/register/', profileData).then(
        (response) => {

          
          const credentials = {
            username: profile['id'],
            password: 'random12345server@chatapp12345@passtestnet!@*'
          };
          
          console.log('before')
          console.log('response',response)
          console.log('credentials',credentials)


          const timeout = setTimeout(() => {
            axios.post('http://127.0.0.1:8000/api/auth/login/', credentials)
              .then((response) => {
                console.log(response['data']);
                setToken(response['data']['token']);
                sessionStorage.setItem('token', JSON.stringify(response['data']['token']));
              });
            }, 3000);
            console.log('response')
            console.log("printing token");
            console.log(token);
            return () => clearTimeout(timeout);
            
        },
        (error) => {
          console.log(error);
        }
      );
    }
    Logindata=profile
  }, [profile]);


  const logout = () => {
    googleLogout();
    sessionStorage.removeItem('profile');
    sessionStorage.removeItem('token');
    setProfile(null);
  }


  return (
    <div>
    {profile ? (
      <div>
        <Hnavbar  profile={profile} logout={logout} />
        <Home token={token}/>
      </div>
    ) : (
       <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
      <div
        className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
      >
        <div
          className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
        >
          
          <p className="flex flex-col items-center justify-center mt-10 text-center">
            <span>Don't have an account?</span>
            <a href="#" className="underline">Get Started!</a>
          </p>
          <p className="mt-6 text-sm text-center text-gray-300">
            Read our <a href="#" className="underline">terms</a> and <a href="#" className="underline">conditions</a>
          </p>
        </div>
        <div className="p-5 bg-white md:flex-1">
          <h3 className="my-4 text-2xl font-semibold text-gray-700">Account Login</h3>
          <form action="#" className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-1">
              <label htmlFor="email" className="text-sm font-semibold text-gray-500">Email address</label>
              <input
                type="email"
                id="email"
                autoFocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-semibold text-gray-500">Password</label>
                <a href="#" className="text-sm text-blue-600 hover:underline focus:text-blue-800">Forgot Password?</a>
              </div>
              <input
                type="password"
                id="password"
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
              />
              <label htmlFor="remember" className="text-sm font-semibold text-gray-500">Remember me</label>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
              >
                Log in
              </button>
            </div>
            <div className="flex flex-col space-y-5">
              <span className="flex items-center justify-center space-x-2">
                <span className="h-px bg-gray-400 w-14"></span>
                <span className="font-normal text-gray-500">or login with</span>
                <span className="h-px bg-gray-400 w-14"></span>
              </span>

              <div className="flex flex-col space-y-4">
                <a
                  className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
                  onClick={login}
                  
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
            </div>
          </form>
        </div>
      </div>
    </div> 
    )}
  </div>
    
  )
}

export default SignIn




//userActions.js
import axios from 'axios'
import { 
    USER_LOGIN_REQUEST,
    USER_LOGIN_FAIL,
    USER_LOGIN_SUCCESS,

    USER_REGISTER_REQUEST,
    USER_REGISTER_FAIL,
    USER_REGISTER_SUCCESS,

    USER_LOGOUT,
 } from '../constants/UserConstants'


export const login =(profileData)=> async(dispatch) => {
    try{
        console.log('lag to raha')

    
        dispatch({
            type : USER_LOGIN_REQUEST
        })
        const config = {
            headers :{
                'Content-type' : 'application/json'
            }
        }

        const { data } = await axios.get(
            'http://127.0.0.1:8000/api/auth/register/', 
            profileData,
            config
          );
       
        dispatch({
            type : USER_LOGIN_SUCCESS,
            payload : data['data']
        })

        localStorage.setItem('userInfo', JSON.stringify(data['data']))
        console.log("ha bhai ha")
    }
    catch(error){
        dispatch({type : USER_LOGIN_FAIL,
                  payload : error.response && error.response.data.detail
                  ?error.response.data.detail
                  :error.message
    })
    }
}



export const logout=()=>(dispatch)=>{
    localStorage.removeItem('userInfo')
    dispatch({type : USER_LOGOUT})
    
}

export const register =(name,email,id)=> async (dispatch) => {
    try{
        dispatch({
            type : USER_REGISTER_REQUEST
        })
        const config = {
            headers :{
                'Content-type' : 'application/json'
            }
        }
        const {data} = await axios.post(
            '/users/register/',
            {'name':name,'email': email, 'password': password},
            config
        )
        console.log(data)

        dispatch({
            type : USER_REGISTER_SUCCESS,
            payload : data
        })
        dispatch({
            type : USER_LOGIN_SUCCESS,
            payload : data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    }
    catch(error){
        dispatch({type : USER_REGISTER_FAIL,
                  payload : error.response && error.response.data.detail
                  ?error.response.data.detail
                  :error.message
    })
    }
}





// <div className=" w-1/2 flex logg gap-3 relative justify-center bg-blue-200 ">
// {
//   userInfo ?(
//     <>
//        <div className="logo">
//         {/* <img className="w-1/4" src={profile["picture"]} alt={profile["name"]} />
//         <h2>Welcome, {profile["name"]}!</h2> */}
//       </div>
//       <div className="profile-info">
//         <button onClick={logout}>Logout</button>
//       </div>
     
//     </>
//   ):(
//     <Link to='/SignIn'>
//     <div className="flex items-center justify-center  bg-gray-100 ">
// <button className="flex items-center bg-white  border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
//   <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="-0.5 0 48 48" version="1.1"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </svg>
//   <span>Continue with Google</span>
// </button>
// </div>
//     </Link>
//   )
// }

// import axios from "axios";
// import {
//   USER_PROFILE_FAILED,
//   USER_PROFILE_SUCCESS,
//   USER_PROFILE_LOGOUT,
//   USER_PROFILE_CREATION,
// } from "../constants/UserConstants";

// const BASE_URL = import.meta.env.VITE_URL

// export const profilecreation = () => async (dispatch) => {

//   dispatch({
//     type: USER_PROFILE_CREATION,
//   });

//   let setProfile, settoken;

//   let API = localStorage.getItem("userAPI");

//   await axios
//     .get(
//       `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${API}`,
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${API}`,
//         },
//       }
//     )
//     .then(
//       (response) => {
//         setProfile = response["data"];
//       },
//       (error) => {
//         dispatch({
//           type: USER_PROFILE_FAILED,
//         });
//       }
//     );



//   const profileData = {
//     name: setProfile["name"],
//     email: setProfile["email"],
//     username: setProfile["id"],
//   };

  
//   console.log(profileData);


//   if (setProfile === null) {
//     // console.log('profile null');
//   } else {

//     const config = {
//       headers :{
//           'Content-type' : 'application/json'
//       }
//   }

//     const {post_resister} = await axios.post(
//       '/users/register/',
//       {'name':name,'email': email, 'password': password},
//       config
//   )
//         // console.log('before')
//         // console.log('response',response)
//         // console.log('credentials',credentials)

//         await axios
//           .post("/data/api/auth/login/", credentials)
//           .then((response) => {
//             // console.log(response['data']);
//             settoken = response["data"]["token"];
//           });

//         // console.log('response')
//         // console.log("printing token");
//         // console.log(settoken);
//         // history('/')
//         let data = {
//           setProfile,
//           settoken,
//         };

//         dispatch({
//           type: USER_PROFILE_SUCCESS,
//           payload: data,
//         });

//         return () => clearTimeout(timeout);
//       },
//       (error) => {
//         // console.log(error);
//       }
//     );
//   }
// };


// export const logout = () => (dispatch) => {
//   dispatch({
//     type: USER_PROFILE_LOGOUT,
//   });
// };







//IPrePrimary
// import React, { useEffect, useRef, useState } from "react";
// import "../Css/IPrePrimary.css";
// import { useDispatch, useSelector } from "react-redux";
// import gsap from "gsap";
// import FilterTAb from "../Components/FilterTAb";
// import ProdcutsCard from "../Components/ProdcutsCard";
// import axios from "axios";
// import { listProducts, filterBook ,filterPamplatesBook} from "../actions/ProductsActions";
// import { useNavigate, Link } from "react-router-dom";
// import { useSearchParams } from "react-router-dom";
// import Loader from "../Components/Loader";
// import { Helmet } from "react-helmet";
// import { Accordion, AccordionItem } from "@szhsin/react-accordion";
// const BASE_URL = import.meta.env.VITE_URL;
// function IPrePrimary() {
//   const [filterbook2, setFilterbook] = useState([]);
//   const [filterbook3, setFilterbook1] = useState([]);
//   const history = useNavigate();
//   const dispatch = useDispatch();
//   const productsList = useSelector((state) => state.productList);
//   const { error, loading, products = [] } = productsList;
//   const ProductFilter = useSelector((state) => state.ProductFilter);

//   const { filterproducts,api  } = ProductFilter;

//   const pamplateBook = useSelector((state) => state.pamplateBook);

//   const { Pamplatesfilterproducts,api1  } = pamplateBook;


//   // console.log(filterbook2);
  
//     // console.log(typeof api);
    
//   let [API, setApi] = useState(api);
  
  
//   // let [loader, setLoader] = useState(true);
//   const [Class, setClass] = useState([
//     { id: 1, name: "Play", isChecked: false },
//     { id: 2, name: "Nursery", isChecked: false },
//     { id: 3, name: "Pre - Primer", isChecked: false },
//     { id: 4, name: "Primer", isChecked: false },
//   ]);
//   const [Subject, setSubject] = useState([
//     { id: 5, name: "All", isChecked: false },
//     { id: 6, name: "English", isChecked: false },
//     { id: 7, name: "Hindi", isChecked: false },
//     { id: 8, name: "Math", isChecked: false },
//     { id: 9, name: "Coloring", isChecked: false },
//     { id: 10, name: "Picture", isChecked: false },
//     { id: 11, name: "Poem", isChecked: false },
//     { id: 12, name: "Evs", isChecked: false },
//     { id: 13, name: "Counting", isChecked: false },
//   ]);
//   const [Pamplate, setPamplate] = useState([
//     { id: 14, name: "All In One For PreSchoolers", isChecked: false },
//     { id: 15, name: "All In One Book(R And W)", isChecked: false },
//     { id: 16, name: "Writing Noteboks of Hindi For Preschoolers", isChecked: false },
//     { id: 17, name: "Writing Noteboks of English For Preschoolers", isChecked: false },
//     { id: 18, name: "Writing Noteboks of Mathematics For Preschoolers", isChecked: false },
//     { id: 19, name: "Colouring Books For Preschoolers", isChecked: false },
//     { id: 20, name: "Patterns And Curves Playbook", isChecked: false },
//     { id: 21, name: "NUMBER BOOKS For Preschoolers", isChecked: false },
//     { id: 22, name: "Scrapbook & TimeTable Book For Preschoolers", isChecked: false },
//     { id: 23, name: "Jumbo Colouring Boks For Preschoolers", isChecked: false },
//     { id: 24, name: "Complete Kit Of Books For Preschoolers", isChecked: false },
//     { id: 25, name: "Hindi Writing Books For Preschoolers", isChecked: false },
//     { id: 26, name: "Books of Mental Maths and Reasoning For Class 1 to 5", isChecked: false },
//     { id: 27, name: "Activity Based Worksheets For Class Pre-Nursery to 5", isChecked: false },
//     { id: 28, name: "Books Of Reasoning For Class 1 to 8", isChecked: false },
//     { id: 29, name: "A4 Writing Notebooks of Hindi, English & Maths", isChecked: false },
//     { id: 30, name: "Practical Notebooks for School Children", isChecked: false },
//     { id: 31, name: "Drawing Books For Schools Children", isChecked: false },
//     { id: 32, name: "ALMANACS For School Children", isChecked: false },
//     { id: 33, name: "English Activity Books For Preschoolers", isChecked: false },
// ]);

//   let data;
//   useEffect(() => {
//     setFilterbook(filterproducts.results)
//   }, [filterproducts]);

//   useEffect(() => {
//     setFilterbook1(Pamplatesfilterproducts.results)
//   }, [Pamplatesfilterproducts]);
//   useEffect(() => {
//     let flag = products;
//     if (flag.length === 0) {
//       dispatch(listProducts(""));
//     }

//     // fetching the data for filter option /////////////////////////////////////////////////////////
//     if (error) {
//       history("/error");
//     }
   
//     const fetchData = async () => {
//       let filterapi=API
//       const myArray =filterapi.split("=")
//       if(myArray[0]=="&pamplates"){
//         dispatch(filterPamplatesBook(API))
//       }else{
//         dispatch(filterBook(API));
//       }
      
//     };
    
//       fetchData();

//   }, [API]);
//   let count = 0;
//   const open = () => {
//     if (count == 0) {
//       document
//         .querySelector(".primarysection1")
//         .classList.toggle("max-sm:translate-x-full");
//       document.querySelector(".buttons").innerHTML =
//         '<svg class="w-7 max-sm:w-[13px]" xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"  fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>';
//       count++;
//     } else {
//       document
//         .querySelector(".primarysection1")
//         .classList.toggle("max-sm:translate-x-full");
//       document.querySelector(".buttons").innerHTML =
//         '<svg class="w-7 max-sm:w-[13px]" xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"  fill="#000000"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>';

//       count = 0;
//     }
//   };
//   return (
//     <>
//       <div className=" primary-sections   relative min-h-screen bg-[rgb(252, 209, 209)]">
//         <div className="absolute z-10  w-[83%]  right-0 extratab top-[2rem]">
//           <Accordion>
//             <div className="flex justify-evenly w-[100%] flex-wrap  items-start relative ">
//               {/* <AccordionItem
//                 header={({ state }) => (
//                   <div className="accordion-header flex relative ">
//                     <span className="px-[4.5vw]  p-3 bg-[#049A99] rounded-lg text-white relative z-10 close">
//                       Books & Copy
//                     </span>
//                   </div>
//                 )}
//               >
//                 {/* <div className="bg-white p-5  rounded-b-xl border-2 border-[#049A99]  -z-10 relative -top-3 space-y-3">
//                   <Link
//                     className="left-0 font-normal  relative top-2  block m-auto text-center "
//                     to="/preprimary"
//                   >
//                     Plain Copies
//                   </Link>
//                   <Link
//                     className="left-0 font-normal relative top-2  block  text-center"
//                     to="/preprimary"
//                   >
//                     A4 Size Grand Regsiter
//                   </Link>
//                   <Link
//                     className="left-0 font-normal relative top-2  block  text-center"
//                     to="/preprimary"
//                   >
//                     Plain Drawing Book A4 and A3
//                   </Link>
//                   <Link
//                     className="left-0 font-normal relative top-2  block  text-center"
//                     to="/preprimary"
//                   >
//                     Table Book
//                   </Link>
//                   <Link
//                     className="left-0 font-normal relative top-2  block  text-center"
//                     to="/preprimary"
//                   >
//                     Pattern Book
//                   </Link>
//                   <Link
//                     className="left-0 font-normal relative top-2  block  text-center"
//                     to="/preprimary"
//                   >
//                     Story Book
//                   </Link>
//                   <Link
//                     className="left-0 font-normal relative top-2  block  text-center"
//                     to="/preprimary"
//                   >
//                     Festival Book
//                   </Link>
//                   <Link
//                     className="left-0 font-normal relative top-2  block  text-center"
//                     to="/preprimary"
//                   >
//                     Holiday HomeWork
//                   </Link>
//                 </div> */}
//               {/* </AccordionItem>  */}

//               <AccordionItem
//                 header={({ state }) => (
//                   <Link to='#' className="accordion-header flex ">

//                     <span className="px-[4.5vw]  p-3 bg-[#049A99] rounded-lg text-white ">
//                       Customize Corner
//                     </span>
//                   </Link>
//                 )}
//               >
//                 {/* <div className="bg-white p-5 rounded-b-xl border-2 border-[#049A99] -z-10 relative -top-3 space-y-3">
//                   <Link
//                     className="left-0 font-normal  relative top-2  block m-auto text-center "
//                     to="/preprimary"
//                   >
//                     School Diary
//                   </Link>
//                   <Link
//                     className="left-0 font-normal relative top-2  block  text-center"
//                     to="/preprimary"
//                   >
//                     Scrap Book
//                   </Link>
//                 </div> */}
//               </AccordionItem>

//               <AccordionItem
//                 header={({ state }) => (
//                   <Link to='#' className="accordion-header flex ">
//                     <span className="px-[4.5vw]  p-3 bg-[#049A99] rounded-lg text-white ">
//                       Free Activity Sheet
//                     </span>
//                   </Link>
//                 )}
//               >
//                 {/* <div className="bg-white p-5 rounded-b-xl border-2 border-[#049A99] -z-10 relative -top-3 space-y-3">
//                   <Link
//                     className="left-0 font-normal  relative top-2  block m-auto text-center "
//                     to="/preprimary"
//                   ></Link>
//                   <Link
//                     className="left-0 font-normal relative top-2  block  text-center"
//                     to="/preprimary"
//                   >
//                     Carnival Kitset
//                   </Link>
//                   <Link
//                     className="left-0 font-normal relative top-2  block  text-center"
//                     to="/preprimary"
//                   >
//                     Jumbo Colouring Book
//                   </Link>
//                 </div> */}
//               </AccordionItem>

//               <AccordionItem
//                 header={({ state }) => (
//                   <Link to='/teachertraining' className="accordion-header flex ">
//                     <span className=" px-[4.5vw] p-3 bg-[#049A99] rounded-lg text-white ">
//                      Teacher Training
//                     </span>
//                   </Link>
//                 )}
//               >
//                 {/* <div className="bg-white p-5 rounded-b-xl border-2 border-[#049A99] -z-10 relative space-y-3 -top-3 ">
//                   <Link
//                     className="left-0 font-normal  relative top-2  block m-auto text-center "
//                     to="/preprimary"
//                   >
//                     Toys
//                   </Link>
//                   <Link
//                     className="left-0 font-normal relative top-2  block  text-center"
//                     to="/preprimary"
//                   >
//                     Trophy Medal
//                   </Link>
//                 </div> */}
//               </AccordionItem>
//             </div>
//           </Accordion>
//         </div>
//         <Helmet>
//           <title>
//             Play, Nursery, Pre-Primer, and Primer Books - Adisri Publications
//           </title>
//           <meta
//             name="description"
//             content="Explore a wide range of books for Play, Nursery, Pre-Primer, and Primer levels at Adisri Publications. Enhance early education with our curated selection of engaging and educational books."
//           />
//           <meta
//             name="keywords"
//             content="Play books, Nursery books, Pre-Primer books, Primer books, early education books, children's books, Adisri Publications"
//           />
//         </Helmet>

//         {/* <div className=" tab-grid  bg-[] w-[83%] justify-items-center logg sm:mr-0 sm:ml-auto py-8">
//             <div  className="px-10 py-3 bg-white   rounded-full   cursor-pointer   ">Books & Copy

//             </div>
//             <h2  className="px-10 py-3 bg-white   rounded-full   cursor-pointer ">Stationary</h2>
//             <h2  className="px-10 py-3 bg-white   rounded-full   cursor-pointer ">Art & Craft Supply</h2>
//             <h2  className="px-10 py-3 bg-white   rounded-full   cursor-pointer  ">Toy & Educational Material</h2>
         
//         </div> */}
//         <div className="p-4 text-xl max-sm:text-[15px]    relative flex space-x-3 bg-[#049A99]    max-sm:w-full  sm:w-[17%]  text-white">
//           <p className=" flex  space-x-5 ">
//             {" "}
//             <span> Filters</span>{" "}
//             <button
//               onClick={open}
//               className=" transition-all duration-300 buttons sm:hidden max-sm:visible   w-full"
//             >
//               <svg
//                 className="w-[15px] max-sm:w-[13px]"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 -960 960 960"
//                 fill="#000000"
//               >
//                 <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
//               </svg>
//             </button>{" "}
//           </p>{" "}
//         </div>

//         <div className="flex   primary-sections  min-h-screen ">
//           <div className="sm:w-[17%] max-sm:w-full max-sm:absolute max-sm:z-20 max-sm:-translate-x-full   primarysection1 bg-[#049A99] text-white  ease-out transition-all duration-500 relative    max-sm:h-full ">
//             <FilterTAb
//               Class={Class}
//               setClass={setClass}
//               setSubject={setSubject}
//               setPamplate={setPamplate}
//               Pamplate={Pamplate}
//               Subject={Subject}
//               API={API}
//               setApi={setApi}
//             />
//           </div>
 
//           <div className="sm:w-[79%] m-auto">
//             <div className="sm:w-[100%]  sm:p-2 mx-auto   max-sm:w-full  card-container relative top-[2rem]  ">
//               {API === ""  ? (
//                 Object.keys(products).length === 0 ? (
//                   <Loader />
//                 ) : (
//                   products.results.map((product) => {
//                     return (
//                       <div key={product.Product_Id} className=" max-sm:p-0 ">
//                         <ProdcutsCard product={product} id={1} />
//                       </div>
//                     );
//                   })
//                 )
//               ) : loading ? (
//                 <>
//                   <Loader />
//                 </>
//               ) : (
//                 // <div className=" grid grid-cols-1 sm:col-span-4 ">
//                 // <div className="flex justify-center items-center">
//                 //   <div
//                 //     className="inline-block h-8 w-8 sm:h-20 sm:w-20 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] "
//                 //     role="status"
//                 //   >
//                 //     <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
//                 //       Loading...
//                 //     </span>
//                 //   </div>
//                 // </div>
//                 // </div>
//                 <>
//                   {
//                   filterbook2?.length !== 0 ? (
//                     filterbook2?.map((product) => {
//                       return (
//                         <div key={product.Product_Id} className=" max-sm:p-0 ">
//                           <ProdcutsCard product={product} id={1} />
//                         </div>
//                       );
//                     })
                    
//                   ) : (
//                     <div className=" col-span-6 w-[50%] m-auto items-center logg ">
//                       <img className="" src="Empty-pana.png" alt="" />
//                     </div>
//                   )}
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//         <div className="p-5 w-[83%] max-sm:w-full  ml-auto mr-0">
//           {API === "" ? (
//             <div className="flex justify-between">
//               {Object.keys(products).length === 0 ? (
//                 <>
//                   <Loader />
//                 </>
//               ) : (
//                 <>
//                   {products.previous !== null ? (
//                     <button
//                       className="bg-[#FF5F5F]  rounded-full sm:px-10 sm:p-3 max-sm:p-2 block m-auto text-white  max-sm:text-xs   transition-all duration-400 hover:bg-[#FF5F5F]  hover:text-white "
//                       onClick={() => {
//                         let url = `${products.previous.slice(
//                           products.previous.indexOf("?") + 1,
//                           products.previous.length
//                         )}`;
//                         dispatch(listProducts(url));
//                       }}
//                     >
//                       Previous
//                     </button>
//                   ) : (
//                     <button className="bg-[#FF5F5F]    opacity-60 rounded-full sm:px-10 sm:p-3 max-sm:p-[9px] block m-auto   text-white max-sm:text-xs   transition-all duration-400 hover:bg-[#FF5F5F]  hover:text-white ">
//                       Previous
//                     </button>
//                   )}
//                 </>
//               )}
//               {Object.keys(products).length === 0 ? (
//                 <>
//                   <Loader />
//                 </>
//               ) : (
//                 <>
//                   {products.next !== null ? (
//                     <button
//                       className="bg-[#FF5F5F] rounded-full sm:px-10 max-sm:px-6  sm:p-3 max-sm:p-2 block m-auto  text-white max-sm:text-xs   transition-all duration-400 hover:bg-[#FF5F5F]  hover:text-white "
//                       onClick={() => {
//                         let url = `${products.next.slice(
//                           products.next.indexOf("?") + 1,
//                           products.next.length
//                         )}`;
//                         dispatch(listProducts(url));
//                         // console.log(url);
//                       }}
//                     >
//                       {" "}
//                       Next{" "}
//                     </button>
//                   ) : (
//                     <button className="bg-[#FF5F5F]  rounded-full sm:px-10 p-3 sm:p-3 max-sm:p-2 block m-auto  text-white max-sm:text-xs   transition-all duration-400 opacity-60 hover:bg-[#FF5F5F]  hover:text-white ">
//                       Next
//                     </button>
//                   )}
//                 </>
//               )}
//             </div>
//           ) : (
//             <></>
//           )}
//         </div>
//       </div>
//     </>
//     //  <>
//     //  <h1>dfff</h1>
//     //  </>
//   );
// }

// export default IPrePrimary;