import React from 'react'

function WriteToUs() {
  return (
    
      <div className='w-full min-h-screen'>
       
    <section className="bg-zinc-800">      
    <div className="container px-6 py-12 mx-auto ">
        
        <div className='grid grid-cols-2  max-sm:grid-cols-1'>
         <div>
            <p className="font-medium text-white">Contact us</p>

            <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">Get in touch</h1>

            <p className="mt-3 text-gray-500 dark:text-gray-400">Our team would love to hear from you.</p>
            </div>
            <div className='text-white float-start '>
            <form className="max-w-sm">
  <label htmlfor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
  <div className="relative ">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
      </svg>
    </div>
    <input type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Contact@Adisri.com"/>
  </div>
  
  <button type='submit' className='p-3 bg-blue-300 transition-all duration-300 rounded-lg mt-2 float-end hover:bg-blue-500'>SUBMIT</button>
</form>
            </div>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
                <div>
                    <span className="inline-block p-3 text-white rounded-full bg-blue-100/80 dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </span>

                    <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Email</h2>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Our friendly team is here to help.</p>
                    <p className="mt-2 text-sm text-white">Contact@Adisri.com</p>
                </div>

                <div>
                    <span className="inline-block p-3 text-white rounded-full bg-blue-100/80 dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </span>
                    
                    <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Office</h2>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Adisri Publications&#xae;  Pvt. Ltd.</p>
                    <p className="mt-2 text-sm text-white">D-258, Sector 63, Noida, Uttar Pradesh-201301</p>
                </div>

                <div>
                    <span className="inline-block p-3 text-white rounded-full bg-blue-100/80 dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    </span>
                    
                    <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Phone</h2>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Mon-Sat from 9am to 6pm.</p>
                    <p className="mt-2 text-sm text-white">+91 9250052221</p>
                </div>
            </div>
            <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto ">
            <iframe width="100%" height="600" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=28.627795,77.386448&amp;q=Adisri Publications Pvt. Ltd., D-258, Sector 63, Noida, Uttar Pradesh 201301&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" ></iframe>
            </div>
        </div>
    </div>
    <br />
</section>
    </div>
  )
}

export default WriteToUs