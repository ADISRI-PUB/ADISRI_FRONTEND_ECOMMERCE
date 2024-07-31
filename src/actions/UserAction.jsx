import axios from "axios";
import {
  USER_PROFILE_FAILED,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_LOGOUT,
  USER_PROFILE_CREATION,
} from "../constants/UserConstants";

const BASE_URL = import.meta.env.VITE_URL;

export const profilecreation = () => async (dispatch) => {
  dispatch({
    type: USER_PROFILE_CREATION,
  });



  try {
    const API = localStorage.getItem("userAPI");

    const response = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${API}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API}`,
        },
      }
    );


    const setProfile = response.data;


    if (!setProfile) {
      dispatch({
        type: USER_PROFILE_FAILED,
      });
      return;
    }

    console.log(setProfile);
    

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const registerResponse = await axios.post(
      `${BASE_URL}/data/auth/register/`,
      {'name':setProfile['name'],'email': setProfile['email'], 'password': setProfile['id']},
      config
    );

    const credentials = {
      email:  setProfile['email'],
      password:  setProfile['id'], // Use actual password or another method for login
    };

    const loginResponse = await axios.post(
      `${BASE_URL}/data/auth/login/`,
      {'username':setProfile['email'], 'password':setProfile['id']},
      config
    );

    const settoken = loginResponse.data.token;

    const data = {
      setProfile,
      settoken,
    };

    dispatch({
      type: USER_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.error("Profile creation failed:", error);
    dispatch({
      type: USER_PROFILE_FAILED,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: USER_PROFILE_LOGOUT,
  });
};
