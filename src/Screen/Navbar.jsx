
import React,{useEffect ,useState} from "react"
import { NavLink } from "react-router-dom"
import { googleLogout } from "@react-oauth/google";
import { Link } from "react-router-dom";
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
  
   const opendropdown =()=>{
   
       document.querySelector('.list-dropdown').classList.toggle('hidden')
       if ( document.querySelector('#aboutsvg').classList.contains('rotate-90')) {
        document.querySelector('#aboutsvg').classList.replace('rotate-90','-rotate-90')
       }
       else{
        document.querySelector('#aboutsvg').classList.replace('-rotate-90','rotate-90')
       }
      
   }
  
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
          x:-1000,
          stagger: 0.2,
          duration: 0.8,
         
        },
        {
          x:0,
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
              PRE-PRIMARY
            </NavLink>
            <NavLink
              to="/onetoeight"
              className=" small-navbar  transition-all duration-200  p-3  block"
              onClick={menuopen}
            >
              1<sup>st</sup> TO 8<sup>th</sup>
            </NavLink>
         
            <p
              className="small-navbar logg   flex transition-all duration-200 p-3 justify-center"
              onClick={opendropdown}
            >
              ABOUT US 
              <svg className="transition-all duration-200 rotate-90 ml-2 " xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" height="8px" width="8px" version="1.1" id="aboutsvg" viewBox="0 0 330 330" xmlSpace="preserve">
<path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001  c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213  C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606  C255,161.018,253.42,157.202,250.606,154.389z"/>
</svg>

            </p>
            <div className="list-dropdown  hidden">
           <div className="grid grid-cols-3 text-xs  ">
               <ul className="bg-pink-200"> <span className=" text-sm block"> About us</span>
                <li className="p-1">Who we are</li>
                <li className="p-1">Our Distribution Center</li>
                <Link to='/journey' onClick={menuopen} className="p-1">Adisri Journey</Link>
                <a href="https://drive.google.com/file/d/1_46HY9Y0bdyyTbkUIYupRLJ_0WAln0Ei/view?usp=sharing" download="Adisricatalogue.pdf" target="_blank"> <li className="p-1">Catalogue</li></a>
               </ul>
               <ul className="border-l-2 border-slate-100"> <span className=" text-sm block">Career </span>
                <Link to='/careers' onClick={menuopen} className="flex logg justify-center p-1">Current Opening</Link>
                
                
               </ul>
               <ul className="border-l-2 border-slate-100 bg-pink-200"> <span className=" text-sm block" >Contact us</span>
                <Link to='/contact' onClick={menuopen} className="p-1 flex logg justify-center">Write To Us</Link>
                
                
               </ul>
           </div>
           </div>

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