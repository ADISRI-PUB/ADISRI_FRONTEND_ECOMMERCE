import React, { useState } from "react";

function WriteToUs() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const regex = /[6-9]{1}[0-9]{9}/;
  let formdata = {};

  const onSubmit = async (event) => {
    event.preventDefault();
    // setResult("Sending....");
     
       if (!regex.test(phone)) {
          document.querySelector('.text').classList.replace("text-black","text-[#FF403D]")
       }
       else{
        document.querySelector(".tracking-wide").textContent="sending......"

        setTimeout(async()=>{
          const formData = new FormData(event.target);
          console.log(formData);
          
          formData.append("access_key", "229f2605-024b-4455-9837-6bbd8d888654");
          const response = await fetch("https://api.web3forms.com/submit", {
           method: "POST",
           body: formData
         });
         const data = await response.json();
 
         if (data.success) {
          document.querySelector(".tracking-wide").textContent="sent !"
               setTimeout(()=>{
                setEmail("");
                          setMessage("");
                          setPhone("");
                          setSubject("");
                          setfirstname("");
                          setlastname("");
                          event.target.reset();
                            document.querySelector(".tracking-wide").textContent="send"
               },1000)
         } else {
           console.log("Error", data);
           // setResult(data.message);
           document.querySelector('.tracking-wide').textContent="Please Try Again Later !"
           setTimeout(()=>{
             document.querySelector(".tracking-wide").textContent="send"

           },1000)
         }
        },1000)
        
       }
    

   

   
  };
  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   // console.log(e.target.value);
  //   console.log(firstname);
  //   // const formdata = new FormData(e.target)
  //   // console.log(formdata);
  //   if (!regex.test(phone)) {
  //     document
  //       .querySelector(".phoneee")
  //       .classList.replace("text-black", "text-[#FF403D]");
  //   } else {
  //     document.querySelector(".tracking-wide").textContent = "Sending....";
  //     // const form =new FormData(e.target.value)
    
      
  //     // formdata = {
  //     //    Firstname: firstname,
  //     //    Lastname: lastname, 
  //     //    Email: email ,
  //     //    Phone: phone, 
  //     //    Subject: subject ,
  //     //    Message: message, 
  //     // }
  //     formdata.access_key="4b0b05d4-2651-46d1-b758-5b74e6989f1a"
  //     ;
  //     setTimeout(async () => {
  //       const response = await fetch("https://api.web3forms.com/submit", {
  //         method: "POST",
  //         body: formdata,
  //       });
  //       const data = await response.json();
  //       // console.log(data);

  //       if (data.success) {
  //         document.querySelector(".tracking-wide").textContent = "Sent !";
  //         setTimeout(() => {
  //           // console.log(formdata);
  //           document.querySelector("#Contact-us").reset();
  //          
  //         }, 1000);
  //       } else {
  //         console.log("Error", data);
  //         document.querySelector(".tracking-wide").textContent =
  //           "Please Try Again Later !";
  //       }
  //     }, 1000);
  //   }
  //   // console.log(formdata);
  //   //  formdata.append("Access_KEY","DFDFdfsf")
  //   // formdata.Access_Key="dfgffd"

  //   //    console.log(formdata);
  //   //   document.querySelector('#Contact-us').reset();
  //   //   setEmail("")
  //   //   setMessage("")
  //   //   setPhone("")
  //   //   setSubject("")
  //   //   setfirstname("")
  //   //   setlastname("")
  // };
  return (
    <div className="w-full min-h-screen bg-[#F7D137]">
      <section className="bg-[#F7D137]">
        <div className="w-full  bg-[#F7D137] relative sm:flex">
          <div className="w-[45%] max-sm:w-[50%] max-sm:m-auto  top-0 -z-0">
            <img src="Customer Survey-cuate.png" alt="" />
          </div>
          <div className="relative sm:mt-[5vh] space-y-3 z-20">
            <h1 className="text-center relative  text-[#FF403D] font-semibold font-sans max-sm:text-[5vw] text-[2vw]">
              CONTACT US{" "}
            </h1>
            <p className="w-[99%] text-[1vw] max-lg:text-[1vw] max-sm:w-[98%] m-auto text-center max-sm:text-xs ">
              Thank you for reaching out to us. Your feedback and inquiries are
              important to us, and we are dedicated to providing you with the
              best support possible. Please use the contact form below to drop
              us a message, or connect with us through email or phone. Our team
              is here to assist you and will respond promptly to ensure all your
              needs are met
            </p>
          </div>
          <div className="w-[45%] max-sm:w-[50%] max-sm:m-auto  top-0 right-0 -z-0">
            <img src="Service 24_7-bro.png" alt="" />
          </div>
        </div>
        <div className="w-[80%]  px-6 py-12 mx-auto ">
          <div className="grid grid-cols-2 m-auto  max-sm:grid-cols-1">
            <div>
              <h1 className="mt-2 text-2xl font-semibold text-[#FF403D] md:text-3xl">
                Get in touch
              </h1>

              <p className="mt-3">Our team would love to hear from you.</p>
            </div>
            {/* <div className='text-white float-start '>
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
            </div> */}
          </div>

          <div className="  lg:w-[80%] max-lg:w-[100%] m-auto mt-10 ">
            <div className="grid gap-12 max-sm:grid-cols-1 sm:grid-cols-2 ">
              <div className="gap-12 max-sm:gap-5  grid grid-cols-1  ">
                <div className="">
                  <span className="inline-block p-3 text-white rounded-full bg-[#FF403D]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </span>

                  <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                    Email
                  </h2>
                  <p className="mt-2 text-sm ">
                    Our friendly team is here to help.
                  </p>
                  <p className="mt-2 text-sm text-white">
                    infoadisri@gmail.com
                  </p>
                </div>

                <div>
                  <span className="inline-block p-3 text-white rounded-full  bg-[#FF403D]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </span>

                  <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                    Office
                  </h2>
                  <p className="mt-2 text-sm ">
                    Adisri Publications&#xae; Pvt. Ltd.
                  </p>
                  <a
                    href="https://www.google.com/maps/dir//Adisri+Publications+Pvt.+Ltd.+D-258+Sector+63+Noida,+Uttar+Pradesh+201301/@28.6283716,77.3862427,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390ce55f65ebe6d5:0xbd4c56c05660d61c!2m2!1d77.3861502!2d28.6283781?entry=ttu"
                    target="_blank"
                  >
                    {" "}
                    <p className="mt-2 text-sm text-white">
                      D-258, Sector 63, Noida, Uttar Pradesh-201301
                    </p>
                  </a>
                </div>

                <div>
                  <span className="inline-block p-3 text-white rounded-full  bg-[#FF403D]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </span>

                  <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                    Phone
                  </h2>
                  <p className="mt-2 text-sm ">Mon-Sat from 9am to 6pm.</p>
                  <a href="tel:9250011077" target="_blank">
                    <p className="mt-2 text-sm text-white">+91 9250011077</p>
                  </a>
                  <a href="tel:01204101008" target="_blank">
                    <p className="mt-2 text-sm text-white"> 0120-4101008</p>
                  </a>
                </div>
              </div>
              <div className=" ">
                <div className=" w-full ">
                  <div className=" w-[100%] sm:max-w-[80%] ">
                    <form
                      id="Contact-us"
                       onSubmit={onSubmit}
                      className="rounded-lg  min-w-full"
                    
                    >
                      
                      <div className="">
                        <div>
                          {/* <h1 className="text-center text-2xl mb-6 text-white font-bold font-sans border-b-2 border-white">
                    CONTACT FROM 
                  </h1> */}
                          <div className="grid sm:grid-cols-2 gap-10 max-sm:gap-2">
                            <div>
                              <label
                                className="text-black font-semibold block sm:my-3 text-md"
                                htmlFor="username"
                              >
                                First Name*
                              </label>
                              <input
                                className="w-full  p-2 bg-transparent border-b-2 border-[#FF403D] text-white focus:outline-none"
                                type="text"
                                name="firstname"
                                id="username"
                                required
                                value={firstname}
                                onChange={(e) => setfirstname(e.target.value)}
                              />
                            </div>
                            <div>
                              <label
                                className="text-black font-semibold block sm:my-3 text-md"
                                htmlFor="username"
                              >
                                Last Name
                              </label>
                              <input
                                className="w-full  p-2 bg-transparent border-b-2 border-[#FF403D] text-white focus:outline-none"
                                type="text"
                                name="lastname"
                                id="username"
                                value={lastname}
                                onChange={(e) => {
                                  setlastname(e.target.value);
                                }}
                              />
                            </div>
                          </div>
                          <div className="grid sm:grid-cols-2 gap-10 max-sm:gap-5">
                            <div>
                              <label
                                className="text-black font-semibold block my-3 text-md"
                                htmlFor="username"
                              >
                                Email*
                              </label>
                              <input
                                className="w-full  p-2 bg-transparent border-b-2 border-[#FF403D] text-white focus:outline-none"
                                type="email"
                                name="email"
                                id="username"
                                required
                                value={email}
                                onChange={(e) => {
                                  setEmail(e.target.value);
                                }}
                              />
                            </div>
                            <div>
                              <label
                                className="text-black font-semibold block sm:my-3 text-md text"
                                htmlFor="username"
                              >
                                Phone*
                              </label>
                              <input
                                className="w-full  p-2 bg-transparent border-b-2 border-[#FF403D] text-white focus:outline-none"
                                type="number"
                                name="phone"
                                id="username"
                                required
                                value={phone}
                                onFocus={() => {
                                  document
                                    .querySelector(".text")
                                    .classList.replace(
                                      "text-[#FF403D]",
                                      "text-black"
                                    );
                                }}
                                onChange={(e) => {
                                  setPhone(e.target.value);
                                }}
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              className="text-black font-semibold block my-3 text-md"
                              htmlFor="username"
                            >
                              Subject
                            </label>
                            <input
                              className="w-full  p-2 bg-transparent border-b-2 border-[#FF403D] text-white focus:outline-none"
                              type="text"
                              name="subject"
                              id="username"
                              required
                              value={subject}
                              onChange={(e) =>
                                setSubject(e.target.value)
                              }
                            />
                          </div>
                          <div className="w-full ">
                            <label
                              className="text-black  font-semibold block my-3  text-md "
                              htmlFor="username"
                            >
                              Message
                            </label>
                            <textarea
                              className="w-full bg-transparent border-b-2 border-[#FF403D] text-white focus:outline-none"
                              name="message"
                              cols={"30"}
                              rows={"5"}
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                          </div>
                        </div>
                      </div>

                      <button
                         type="submit"
                        className="w-full mt-6 transition-all  duration-200 bg-[#FF403D] hover:bg-[#ff6764] rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans "
                      >
                        Send
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto ">
            <iframe width="100%" height="600" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=28.627795,77.386448&amp;q=Adisri Publications Pvt. Ltd., D-258, Sector 63, Noida, Uttar Pradesh 201301&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" ></iframe>
            </div> */}
          </div>
        </div>
        <div className="w-full p-3">
          <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto ">
            <iframe
              width="100%"
              height="600"
              src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=28.627795,77.386448&amp;q=Adisri Publications Pvt. Ltd., D-258, Sector 63, Noida, Uttar Pradesh 201301&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WriteToUs;
