import React, { useEffect } from "react";
import "../Css/About.css";
import gsap from "gsap";
import "../Css/Order.css";
function Iaboutus() {
  useEffect(() => {
    // gsap.fromTo(
    //   ".adisri",
    //   {
    //     x: -1000,
    //     opacity: 0,
    //     delay: 0.2,
    //     duration: 0.5,
    //   },
    //   {
    //     x: 0,
    //     opacity: 1,
    //     duration: 0.5,
    //     delay: 0.2,
    //     ease: "power3.out",
    //   }
    // );
    // gsap.fromTo(
    //   ".publication",
    //   {
    //     x: 1000,
    //     delay: 0.2,
    //     opacity: 0,
    //     duration: 0.5,
    //   },
    //   {
    //     x: 0,
    //     delay: 0.2,
    //     opacity: 1,
    //     duration: 0.5,
    //     ease: "power3.out",
    //   }
    // );
    // gsap.fromTo(
    //   ".register",
    //   {
    //     opacity: 0,
    //     delay: 1,
    //     duration: 1,
    //   },
    //   {
    //     duration: 1,
    //     opacity: 1,
    //     delay: 1,
    //     ease: "power3.out",
    //   }
    // );
  }, []);
  //   #FFE06B
  return (
    <>
      <div className="bg-[#707070] relative min-h-screen  ">
        <div className="text-container w-full text-center relative z-20 ">
          <h1 className=" w-3/5 m-auto text-white font-semibold  max-sm:block justify-center">
            About us
          </h1>
          <h5 className="border-b-2 border-[#FFE06B]  border-t-2 text-white w-3/5 max-sm:w-4/5 m-auto italic ">
            "Education is not the learning of facts, but the training of the
            mind to think."
          </h5>
        </div>
        <br />
        <div className="grid grid-cols-2 max-sm:grid-cols-1 logg w-4/5 m-auto ">
          <div className="w-[70%] m-auto  bg-white text-black  ">
            <h2 className="m-auto bg-[#FFE06B] p-3 text-center text-xl max-sm:text-sm ">
              India's Most Trusted Website
            </h2>
            <p className=" p-3 max-sm:text-[2.5vw] sm:text-[0.8vw]">
              Reading is celebrated as one of the most intellectually
              stimulating pursuits. It not only stimulates the mind but also
              offers a sanctuary of relaxation, a gateway to escape, a source of
              inspiration, and a transformative journey through time and
              imagination. At BookChor, we believe in the magic of this journey
              and are dedicated to bringing it to your doorstep. Our passionate
              team of book lovers has been on a mission to turn dreams into
              reality for readers across India. We have crafted a seamless app
              experience to make discovering and purchasing books effortless.
              Our nationwide events have become gathering places for thousands
              of literary enthusiasts, celebrating the joy of reading together.
              Adisri is your one-stop destination for a vast selection of new,
              rare, and limited edition books. Join us in celebrating the
              endless adventure that books provide.
            </p>
          </div>
          <div className="w-[70%] max-sm:w-[90%] m-auto">
            <img src="About us page-pana.png" alt="" />
          </div>
        </div>
        <div className=" order-detials w-[80%] m-auto p-3 gap-[5%] sm:gap-y-[13%] ">
          <div className="relative ">
            <div className="bg-black border-[4px] border-white absolute w-[13%] rounded-full p-2 translate-x-[50%] -translate-y-[25%] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#FFE06B"
              >
                <path d="M300-80q-58 0-99-41t-41-99v-520q0-58 41-99t99-41h500v600q-25 0-42.5 17.5T740-220q0 25 17.5 42.5T800-160v80H300Zm-60-267q14-7 29-10t31-3h20v-440h-20q-25 0-42.5 17.5T240-740v393Zm160-13h320v-440H400v440Zm-160 13v-453 453Zm60 187h373q-6-14-9.5-28.5T660-220q0-16 3-31t10-29H300q-26 0-43 17.5T240-220q0 26 17 43t43 17Z" />
              </svg>
            </div>
            <div className=" w-[80%] bg-white m-auto  rounded-br-3xl ">
              <p className="text-center font-semibold text-xl max-sm:text-sm ">
                Our Products
              </p>
              <p className="p-3 text-center">
                We create high-quality educational books for pre-primary and
                primary students, covering a range of subjects. Our dedicated
                team ensures each book educates and inspires young minds.
              </p>
            </div>
          </div>
          <div className="relative ">
            <div className="bg-black border-[4px] border-white absolute w-[13%] rounded-full p-2 translate-x-[50%] -translate-y-[25%] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#FFE06B"
              >
                <path d="m438-400 198-198-57-56-141 141-57-57-57 57 114 113ZM200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z" />
              </svg>
            </div>
            <div className=" w-[80%] bg-white m-auto sm:h-full rounded-br-3xl ">
              <p className="text-center font-semibold text-xl max-sm:text-sm">
                Our U.S.P
              </p>
              <p className="p-3 text-center">
                We are deeply committed to the field of education and take great
                pride in our work. While we strive to provide sample copies to
                all who request them.
              </p>
            </div>
          </div>
          <div className="relative ">
            <div className="bg-black border-[4px] border-white absolute w-[13%] rounded-full p-2 translate-x-[50%] -translate-y-[25%] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#FFE06B"
              >
                <path d="M300-520q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T360-660q0-25-17.5-42.5T300-720q-25 0-42.5 17.5T240-660q0 25 17.5 42.5T300-600Zm360 440q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T720-300q0-25-17.5-42.5T660-360q-25 0-42.5 17.5T600-300q0 25 17.5 42.5T660-240Zm-444 80-56-56 584-584 56 56-584 584Z" />
              </svg>
            </div>
            <div className=" w-[80%] bg-white m-auto sm:h-full rounded-br-3xl">
              <p className="text-center font-semibold text-xl max-sm:text-sm">
                Rate Discount
              </p>
              <p className="p-3 text-center">
                We offer best quality books on best price. We give you worth of
                the product.
              </p>
            </div>
          </div>
          <div className="relative ">
            <div className="bg-black border-[4px] border-white absolute w-[13%] rounded-full p-2 translate-x-[50%] -translate-y-[25%] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#FFE06B"
              >
                <path d="M480-160q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q46-24 96-36t102-12q58 0 113.5 15T480-740v484q51-32 107-48t113-16q36 0 70.5 6t69.5 18v-480q15 5 29.5 10.5T898-752q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59Zm80-200v-380l200-200v400L560-360Zm-160 65v-396q-33-14-68.5-21.5T260-720q-37 0-72 7t-68 21v397q35-13 69.5-19t70.5-6q36 0 70.5 6t69.5 19Zm0 0v-396 396Z" />
              </svg>
            </div>
            <div className=" w-[80%] bg-white m-auto sm:h-full rounded-br-3xl">
              <p className="text-center font-semibold text-xl max-sm:text-sm">
                Sample Books
              </p>
              <p className="p-3 text-center">
                Our sample policy means you can "try it before you buy it." By
                sampling our products, you eliminate any concerns about quality.
              </p>
            </div>
          </div>
          <div className="relative ">
            <div className="bg-black border-[4px] border-white absolute w-[13%] rounded-full p-2 translate-x-[50%] -translate-y-[25%] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#FFE06B"
              >
                <path d="M480-240q100 0 170-70t70-170q0-100-70-170t-170-70v240L310-310q35 33 78.5 51.5T480-240Zm0 160q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
              </svg>
            </div>
            <div className=" w-[80%] bg-white m-auto sm:h-full rounded-br-3xl">
              <p className="text-center font-semibold text-xl max-sm:text-sm">
                Time Puntuality
              </p>
              <p className="p-3 text-center">
                Simply speaking, on-time delivery is the ability of businesses
                to meet the customers' demands and deliver the services or
                products to the customers punctually.
              </p>
            </div>
          </div>
          <div className="relative ">
            <div className="bg-black border-[4px] border-white absolute w-[13%] rounded-full p-2 translate-x-[50%] -translate-y-[25%] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#FFE06B"
              >
                <path d="M38-428q-18-36-28-73T0-576q0-112 76-188t188-76q63 0 120 26.5t96 73.5q39-47 96-73.5T696-840q112 0 188 76t76 188q0 38-10 75t-28 73q-11-19-26-34t-35-24q9-23 14-45t5-45q0-78-53-131t-131-53q-81 0-124.5 44.5T480-616q-48-56-91.5-100T264-760q-78 0-131 53T80-576q0 23 5 45t14 45q-20 9-35 24t-26 34ZM0-80v-63q0-44 44.5-70.5T160-240q13 0 25 .5t23 2.5q-14 20-21 43t-7 49v65H0Zm240 0v-65q0-65 66.5-105T480-290q108 0 174 40t66 105v65H240Zm540 0v-65q0-26-6.5-49T754-237q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780ZM480-210q-57 0-102 15t-53 35h311q-9-20-53.5-35T480-210Zm-320-70q-33 0-56.5-23.5T80-360q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-280Zm640 0q-33 0-56.5-23.5T720-360q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-280Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-440q0 50-34.5 85T480-320Zm0-160q-17 0-28.5 11.5T440-440q0 17 11.5 28.5T480-400q17 0 28.5-11.5T520-440q0-17-11.5-28.5T480-480Zm0 40Zm1 280Z" />
              </svg>
            </div>
            <div className=" w-[80%] bg-white m-auto sm:h-full rounded-br-3xl">
              <p className="text-center font-semibold text-xl max-sm:text-sm">
                Our Moto
              </p>
              <p className="p-3 text-center">
                "Education is not the learning of facts, but the training of the
                mind to think."
              </p>
            </div>
          </div>
        </div>
        {/* <div className="w-3/5 max-sm:w-4/5 m-auto ">
          <div className="w-full sm:flex">
            <div className="leftside sm:w-1/4 max-sm:w-1/3 max-sm:m-auto p-4 ">
              <p className="float-end sm:rounded-full p-2 max-sm:p-1 sm:bg-red-200 max-sm:font-bold">
                OUR PRODUCT
              </p>
              <img className="relative z-20" src="pngegg (6).png" alt="" />
            </div>
            <div className="rightside flex justify-center w-full m-auto logg">
              <p>
                We are among the best in developing and publishing quality
                educational books for pupil of pre-primary and primary class on
                a variety of subjects Like English, Hindi, Mathmatics,
                Environmental Studies, Art, Activity, Hindi and English Rhymes,
                English Grammer, and Hindi Vyakaran. we seek to impove and Find
                innovative ideas to create the books which not only educate
                rather encourage the young minds to imagine{" "}
              </p>
            </div>
          </div>
        </div> */}
        {/* <div className="w-3/5 max-sm:w-4/5 m-auto ">
          <div className="w-full flex max-sm:flex-wrap-reverse ">
            <div className="rightside flex justify-center w-full m-auto logg ">
              <p>
                Adisri operates a nationwide network with corporate offices
                strategically located in Delhi and the National Capital Region,
                facilitating extensive business operations across India.
                Supported by a robust sales team, we penetrate markets
                effectively, aiming for international growth as an educational
                publisher, with recent expansions into the Middle East
                showcasing our commitment to sharing our expertise and resources
                globally.
              </p>
            </div>
            <div className="leftside w-1/4 p-4 max-sm:w-1/3 max-sm:m-auto">
              <p className="float-end sm:rounded-full max-sm:p-1 p-2 sm:bg-red-200 max-sm:font-bold ">
                FUTURE PLANS
              </p>
              <img src="pngegg (11).png" alt="" />
            </div>
          </div>
        </div> */}
        {/* <div className="w-3/5 m-auto ">
          <div className="w-full sm:flex">
            <div className="leftside w-1/4 max-sm:w-1/3 p-4 max-sm:m-auto">
              <p className="float-end rounded-full p-2 max-sm:p-1 sm:bg-red-200 max-sm:font-bold">
                TIME PUNCTUALITY
              </p>
              <img src="pngegg (12).png" alt="" />
            </div>
            <div className="rightside flex justify-center w-full m-auto logg">
              <p>
                We are among the best in developing and publishing quality
                educational books for pupil of pre-primary and primary class on
                a variety of subjects Like English, Hindi, Mathmatics,
                Environmental Studies, Art, Activity, Hindi and English Rhymes,
                English Grammer, and Hindi Vyakaran. we seek to impove and Find
                innovative ideas to create the books which not only educate
                rather encourage the young minds to imagine{" "}
              </p>
            </div>
          </div>
        </div> */}
        <br />
        <div className="h-20"></div>
      </div>
    </>
  );
}

export default Iaboutus;
