//singin
import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google'
import { useDispatch,useSelector } from 'react-redux'
import {useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import Hnavbar from '../Screen/Hnavbar'
import Home from '../Screen/Home'

function SignIn() {
  //kamal
  const [user, setUser] = useState(null);
const [profile, setProfile] = useState(null);
  const [token, setToken] = useState(null);
  const dispatch = useDispatch()
  const history = useNavigate()
  const redirect =location.search ? location.search.split('=')[1] : '/'
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('login failed:', error)
  });
  console.log('login:', login);
  console.log('user:', user);
  const [flag,setFlag]=useState(false)

  //fetch the token and the profile data from the local storage  , And set them into the state repectively
  // const checkprofile =()=>{

  //   const stroedProfile = localStorage.getItem("profile")
  //   const storedToken = localStorage.getItem('token')

  //   if (storedToken && stroedProfile){
  //     history('/')
  //     setFlag(true)

  //   }
  // }
  // useEffect(() => {
  // checkprofile()
  

  // },[history,flag]);



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
            localStorage.setItem('profile', JSON.stringify(response['data']));
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

      axios.post('/data/api/auth/register/', profileData).then(
        (response) => {

          
          const credentials = {
            username: profile['id'],
            password: 'random12345server@chatapp12345@passtestnet!@*'
          };
          
          console.log('before')
          console.log('response',response)
          console.log('credentials',credentials)


          const timeout = setTimeout(() => {
            axios.post('/data/api/auth/login/', credentials)
              .then((response) => {
                console.log(response['data']);
                setToken(response['data']['token']);
                localStorage.setItem('token', JSON.stringify(response['data']['token']));
                
              });
            });
            console.log('response')
            console.log("printing token");
            console.log(token);
            history('/')
            return () => clearTimeout(timeout);
            
        },
        (error) => {
          console.log(error);
        }
      );
    }
   
  }, [profile]);

  //kamal

  return (
    <div  className='relative'>
      
      
       <div className=' relative w-screen sm:h-screen flex '>
        <img className='w-3/6 opacity-45 absolute ' src="pngegg (14)1.png" alt="backgroundimage"/>
       
         <div className='w-3/5 max-sm:w-full h-2/4 rounded-xl sm:bg-black/5 sm:backdrop-blur-sm border-2 border-white m-auto flex logg justify-center relative z-20 '>
           <div className='w-4/5 sm:flex max-sm:w-11/12    '>
           <div className='w-1/2  sm:border-r-2 max-sm:w-full sm:border-white '>
             <img className='w-1/2 max-sm:w-1/2  m-auto' src="ADISRI LOGO.jpg" alt="companylogo"  />
             </div>
             <div className='w-1/2 m-auto  max-sm:w-full'>
             <button
              onClick={login}
  aria-label="Sign in with Google"
  className="flex items-center m-auto bg-black/5 border border-button-border-light rounded-full p-0.5 pr-4"
>
  <div className="flex items-center justify-center bg-white w-9 h-9 rounded-full">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        className="fill-google-logo-blue"
      ></path>
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        class="fill-google-logo-green"
      ></path>
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        className="fill-google-logo-yellow"
      ></path>
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        className="fill-google-logo-red"
      ></path>
    </svg>
  </div>
  <span className="text-sm text-google-text-gray tracking-wider">Sign with Google</span>
</button>  
             </div>
           </div>
         </div>
       </div>  
    <br />
  </div>
    
  )
}

export default SignIn


