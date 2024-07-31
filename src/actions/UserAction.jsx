import React, { useEffect, useState } from "react";
import {
  USER_PROFILE_FAILED,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_LOGOUT,
  USER_PROFILE_CREATION,
} from "../constants/UserConstants";
import axios from "axios";
const loggin = async () => {

};
export const profilecreation =()=> async(dispatch) => {
  dispatch({
    type:USER_PROFILE_CREATION,
  })
  let setProfile,settoken
  // console.log("comeeee");
  let API =localStorage.getItem('userAPI')
 await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${API}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${API}`,
            },
          }
        )
        .then(
          (response) => {
            // console.log("changes");
            setProfile=response["data"]
          // console.log(setProfile);
           
          },
          (error) => {
            // console.log(error);
            dispatch({
              type:USER_PROFILE_FAILED
            })
          }
        );
        const profileData = {
              name: setProfile["name"],
              email: setProfile["email"],
              username: setProfile["id"],
            };
            // console.log(profileData);
         if (setProfile === null) {
      // console.log('profile null');
    }
    else {
      // console.log('sending data to django');
      // console.log(profileData);
      axios.post('/data/api/auth/register/', profileData).then(
       async (response) => {
          const credentials = {
            username: setProfile['id'],
            password: 'random12345server@chatapp12345@passtestnet!@*'
          };
          // console.log('before')
          // console.log('response',response)
          // console.log('credentials',credentials)
          
           await axios.post('/data/api/auth/login/', credentials)
              .then((response) => {
                // console.log(response['data']);
                settoken=response['data']['token'];
               
              });
            
            // console.log('response')
            // console.log("printing token");
            // console.log(settoken);
            // history('/')
            let data ={
              setProfile,
              settoken
            }

            dispatch({
              type:USER_PROFILE_SUCCESS,
              payload:data
             })
             

            return () => clearTimeout(timeout);
        },
        (error) => {
          // console.log(error);
        }
      );
    }

   
};

export const logout = () =>(dispatch)=> {
  dispatch ({
    type:USER_PROFILE_LOGOUT,
  })
};
