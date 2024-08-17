//singin
import React, { useState, useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { profilecreation } from "../actions/UserAction";
import axios from "axios";
function SignIn() {
  const BASE_URL = import.meta.env.VITE_URL 
  //kamal
  const [user, setUser] = useState(null);
  // const [profile, setProfile] = useState(null);
  //   const [token, setToken] = useState(null);
  const dispatch = useDispatch();
  const history = useNavigate();
  const redirect = location.search ? location.search.split("=")[1] : "/";
  // ANKUSH working/////////////////////////////////////////////////////////////////////////////////////////////////

    
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      const temp = codeResponse;

      const APItoken = temp["access_token"];
      // setUser(codeResponse);
      // ANKUSH WORKING ?///////.....................................................
      localStorage.setItem("userAPI", APItoken);
      dispatch(profilecreation());

      // console.log(user);
    },
    onError: (error) => {console.log("login failed:", error)
      history('/error')
    }
  });

  

  //kamal
 
  return (
    <div className="relative min-h-screen bg-[#2B3F7E]">
      <div className="   logg   responsive  ">
        <img
          className="w-full max-sm:h-full max-sm:w-full   "
          src="Computer login-cuate.png"
          alt="backgroundimage"
        />

        <div className="w-4/5 content3    rounded-lg m-auto flex logg bg-[#FEF7E5] justify-center  ">
        <div>
          <div>
            <p className="p-3 uppercase w-4/5 text-center m-auto">Sign in with Google to enjoy personalized features and content.</p>
          </div>
        <button
  onClick={login}
  aria-label="Sign in with Google "
  
  className="flex logg bg-[#F3B200] text-black w-[40%] max-sm:w-[80%]  m-auto relative justify-center   rounded-full p-0.5  "
>
  <div className="flex items-center justify-center bg-white w-10 h-10 max-sm:h-10 max-sm:w-10 rounded-full">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="" className=" ">
      <path
      fill="#4285f4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      
      ></path>
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#0F9D58"
      ></path>
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#F4B400"
      ></path>
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#DB4437"
      ></path>
    </svg>
  </div>
  <span className=" text-sm  m-auto ">Sign With Google </span>
</button>
<br />
        </div>
        </div>
        <br />
      </div>
      
    </div>
  );
}

export default SignIn;
