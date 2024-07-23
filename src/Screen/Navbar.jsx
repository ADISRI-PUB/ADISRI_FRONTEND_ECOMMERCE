
import React,{useEffect ,useState} from "react"
import { NavLink } from "react-router-dom"
import { googleLogout } from "@react-oauth/google";
export default function Navbar(){
  const [profile, setProfile] = useState(null);
      const [token, setToken] = useState(null);
      const [flag ,setflag] =useState(false)
  const timer = setInterval(()=>{
    const stroedProfile = localStorage.getItem("profile");
      const storedToken = localStorage.getItem("token");
      
      if (storedToken && stroedProfile) {
  
        setToken(storedToken)
        setProfile(JSON.parse(stroedProfile))
      //  console.log("home ", stroedProfile, storedToken);
        
        clearInterval(timer)
        setflag(true)
        
      }
      
   },1000)
  
   
  
    useEffect(() => { 
    }, [flag]);
  const logout=()=>{
     googleLogout()
     localStorage.removeItem('profile')
     localStorage.removeItem('token')
     setProfile(null)
     setToken(null)
     setflag(false)
  }

  let count = 0;
  const menuopen = () => {
    if (count == 0) {
      gsap.fromTo(
        ".small-navbar",
        {
          opacity: 0,
          stagger: 0.2,
          duration: 0.8,
          delay: 0.2,
        },
        {
          delay: 0.2,
          stagger: 0.2,
          opacity: 1,
        }
      );
      document.querySelector(".row1").style.transform = "rotate(45deg)";
      document.querySelector(".row2").style.transform = "rotate(-45deg)";
      document.querySelector(".row2").style.marginTop = "0px";
      document.querySelector(".navbar-small").style.transform =
        "translateY(0%)";
      count++;
    } else {
      count = 0;
      gsap.fromTo(
        ".small-navbar",
        {
          opacity: 1,
          stagger: 0.3,
          duration: 0.9,
        },
        {
          opacity: 0,
        }
      );
      document.querySelector(".navbar-small").style.transform =
        "translateY(-200%)";
      document.querySelector(".row1").style.transform = "rotate(0deg)";
      document.querySelector(".row2").style.transform = "rotate(0deg)";
      document.querySelector(".row2").style.marginTop = "12px";
    }
  };
     
    return(
        <>
     
     <div className="navvv w-full relative    ">
     
      <div className="text-center bg-white w-full space-y-6  sm:hidden max-sm:visible small-navbar-component transition-all duration-500   ">
        <NavLink
              to="/"
              className="  small-navbar   transition-all duration-200 p-3 block z-50 "
              onClick={menuopen}
            >
              HOME
            </NavLink>
            <NavLink
              to="/preprimary"
              className="   small-navbar transition-all duration-200 p-3 block"
              onClick={menuopen}
            >
              PREPRIMARY
            </NavLink>
            <NavLink
              to="/onetoeight"
              className=" small-navbar  transition-all duration-200  p-3  block"
              onClick={menuopen}
            >
              1<sup>th</sup> TO 8<sup>th</sup>
            </NavLink>
         
            <NavLink
              to="/aboutus"
              className="small-navbar  rounded-full transition-all duration-200 p-3 block"
              onClick={menuopen}
            >
              ABOUT US
            </NavLink>

            {
                flag ?(
                  <>
                  <div className="w-full p-2 grid grid-cols-2 m-auto bg-slate-300 ">
                  <div className="w-4/6 ">
                    <img
                      className="  bg-blue-200 w-2/6 rounded-full m-auto"
                       src={profile.picture}
                       alt={profile.name}
                    />
                    </div>
                    
                  <div  className="profile-info  cursor-pointer p-1 w-4/5 flex logg m-auto  justify-center -space-x-6 rounded-full bg-zinc-700 hover:bg-blue-200 hover:text-black trainsition-all duration-500 text-white" onClick={logout}>
                    <button  >Logout</button>
                    </div>
                  </div>
                
                </>
                ):(
<NavLink
              to="/SignIn"
              className="box-border p-4 logg justify-center bg-slate-200 flex  text-white transition-all duration-200  "
              onClick={menuopen}
            >
           <button
  aria-label="Sign in with Google"
  className="flex  logg bg-black/5 border border-button-border-light  rounded-full p-0.5 pr-4"
>
  <div className="flex items-center justify-center bg-white w-9 h-9 rounded-full">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        className="fill-google-logo-blue"
      ></path>
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        className="fill-google-logo-green"
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
  <span className="text-sm text-google-text-gray tracking-wider p-3">Sign with Google</span>
</button>
            </NavLink>
                )
               
            }
            
            
        </div>
        
      </div>
        </>
    )
}