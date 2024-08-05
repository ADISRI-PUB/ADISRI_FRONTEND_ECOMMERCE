import React from 'react'
import { useSelector } from 'react-redux'
function MyProfile() {
    let {userprofile}=useSelector(state=>state.user)
  return (
    //  <>
     
    //   </>
    <div className='min-h-screen'>
      <section className="w-full overflow-hidden min-h-screen dark:bg-indigo-100">
    <div className="w-full mx-auto ">
      
        {/* <img  src="peakpx (3)-min.jpg" alt="User Cover" */}
                {/* className="w-full h-80 object-cover " /> */}

       
        <div className="w-full mx-auto flex justify-center">
            <img src={userprofile.picture} alt="User Profile"
                    className="rounded-full object-cover xl:w-[16rem] xl:h-[16rem] lg:w-[16rem] lg:h-[16rem] md:w-[12rem] md:h-[12rem] sm:w-[10rem] sm:h-[10rem] xs:w-[8rem] xs:h-[8rem] outline outline-2 outline-offset-2 outline-white shadow-xl relative xl:bottom-[7rem] lg:bottom-[8rem] md:bottom-[6rem] sm:bottom-[5rem] xs:bottom-[4.3rem]" />
        </div>

        <div
            className="xl:w-[80%] lg:w-[90%] md:w-[94%] sm:w-[96%] xs:w-[92%] mx-auto flex flex-col gap-4 justify-center items-center relative xl:-top-[6rem] lg:-top-[6rem] md:-top-[4rem] sm:-top-[3rem] xs:-top-[2.2rem]">
           
            <h1 className="text-center text-gray-800 dark:text-white text-4xl font-serif">{userprofile.name}</h1>
           
       
        <div className='' >
                            dsfgdg
        </div>
        </div>
    </div>
</section>

  


    </div>
  )
}

export default MyProfile