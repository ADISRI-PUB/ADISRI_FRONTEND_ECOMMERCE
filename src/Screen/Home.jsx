import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "../Css/Home.css";
import Crousal from "../Components/Crousal";

import CountUp from 'react-countup';
import CrousalBooks from "../Components/CrousalBooks";
import Clients from "../Components/Cilents";


export default function Home({token}) {
  const [startCount,setStartcount]=useState(false)
  let count = 0;
  const element = useRef(null);
  useEffect(() => {
    let temp = element.current;

   
  }, []);

  const show = () => {
    document.querySelector(".arrow-svg").classList.add("rotate-90");
    document.querySelector(".arrow-svg").classList.remove("-rotate-90");
    document.querySelector(".arrow-svg").setAttribute("fill", "#FFFFFF");
    document.querySelector(".pop-up").classList.remove("hidden");
    document.querySelector(".pop-up").classList.add("show");
    let element = document.querySelector(".text-nav-about");
    element.classList.add("active");
    console.log(element);
  };
  const hide = () => {
    document.querySelector(".arrow-svg").classList.remove("rotate-90");
    document.querySelector(".arrow-svg").classList.add("-rotate-90");
    document.querySelector(".pop-up").classList.add("hidden");
    document.querySelector(".text-nav-about").classList.toggle("active");
    document.querySelector(".pop-up").classList.remove("show");
  };

  // sh21: " 0 0 5px white, 0 0 25px white, 0 0 50px white, 0 0 100px white, 0 0 200px white",
  return (
    <>
      {/* <Hnavbar/> */}
      <div className="h-3"></div>
      <div className="home-area z-20  leading-snug">
        {/* <p className="welcome-text p-3 text-center  block ">Welcome To,</p> */}
      
      
        <div className=" z-20 books-crousal-container  m-auto  w-full">
        <img src="BANNER  UPPER.jpg" alt=""  />
          <Crousal />
    
        </div>
        <div className="sections1  ">
          <div className="preprimary-section pre-books relative   p-4 transition-all duration-700">
            <div className="absolute overflow-hidden z-10  opacity-20 top-0 right-20 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="#a77afa"
                version="1.1"
                id="Capa_1"
                width="30vw"
                viewBox="0 0 173.692 173.692"
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <path d="M63.732,48.978c-3.357,0-6.853,0.936-10.09,2.219c2.729-2.164,5.283-4.714,6.968-7.645    c5.538-9.582,4.357-16.512-0.448-19.275c-4.796-2.769-11.385-0.342-16.923,9.25c-1.691,2.92-2.632,6.411-3.129,9.869    c-0.506-3.458-1.448-6.949-3.133-9.869c-5.533-9.582-12.126-12.025-16.917-9.25c-4.813,2.763-5.99,9.688-0.45,19.275    c1.68,2.914,4.237,5.481,6.978,7.65c-3.246-1.284-6.747-2.225-10.116-2.225C5.396,48.984,0,53.465,0,59.014    c0,5.546,5.401,10.03,16.473,10.025c3.369,0.005,6.866-0.919,10.116-2.222c-2.741,2.17-5.298,4.748-6.988,7.65    c-5.53,9.598-4.342,16.526,0.459,19.286c4.784,2.772,11.384,0.326,16.917-9.256c1.69-2.919,2.626-6.411,3.133-9.869    c0.509,3.453,1.45,6.95,3.137,9.858c5.529,9.588,12.124,12.039,16.915,9.267c4.805-2.766,5.981-9.699,0.443-19.291    c-1.674-2.92-4.23-5.48-6.969-7.65c3.236,1.291,6.732,2.227,10.095,2.218c11.084,0.009,16.479-4.476,16.479-10.021    C80.212,53.471,74.812,48.978,63.732,48.978z M44.122,65.955c-3.838,2.213-8.743,0.903-10.956-2.93    c-2.218-3.838-0.901-8.741,2.937-10.954c3.837-2.22,8.736-0.904,10.944,2.93C49.264,58.833,47.964,63.747,44.122,65.955z" />
                    <path d="M155.464,116.476c-4.348-1.156-9.209-1.166-13.849-0.635c4.295-1.856,8.488-4.275,11.677-7.47    c10.506-10.506,11.37-19.875,6.117-25.131c-5.253-5.245-14.632-4.38-25.125,6.127c-3.185,3.185-5.616,7.381-7.475,11.677    c0.545-4.646,0.545-9.495-0.626-13.858c-3.847-14.333-11.533-19.772-18.703-17.857c-7.168,1.926-11.108,10.479-7.256,24.826    c1.16,4.355,3.59,8.559,6.371,12.317c-3.744-2.797-7.959-5.215-12.312-6.392c-14.346-3.846-22.891,0.1-24.814,7.278    c-1.922,7.176,3.501,14.861,17.852,18.691c4.354,1.166,9.203,1.184,13.854,0.642c-4.307,1.85-8.493,4.284-11.686,7.469    c-10.494,10.508-11.36,19.875-6.109,25.118c5.245,5.263,14.627,4.387,25.128-6.103c3.195-3.185,5.613-7.387,7.477-11.694    c-0.55,4.652-0.538,9.5,0.635,13.861c3.833,14.338,11.523,19.782,18.7,17.865c7.171-1.926,11.104-10.483,7.27-24.826    c-1.185-4.356-3.592-8.559-6.383-12.312c3.743,2.797,7.946,5.205,12.312,6.376c14.348,3.853,22.889-0.088,24.799-7.26    C175.237,128.01,169.807,120.322,155.464,116.476z M124.186,131.649c-5.739,1.543-11.636-1.865-13.168-7.59    c-1.545-5.734,1.858-11.634,7.604-13.171c5.736-1.542,11.629,1.866,13.166,7.601C133.309,124.209,129.916,130.122,124.186,131.649    z" />
                    <path d="M134.108,9.317c-1.462,1.871-2.474,4.241-3.157,6.604c-0.022-2.465-0.335-5.012-1.231-7.229    c-2.938-7.272-7.321-9.642-10.964-8.161c-3.636,1.467-5.168,6.208-2.224,13.491c0.897,2.208,2.442,4.26,4.143,6.046    c-2.139-1.209-4.515-2.225-6.878-2.55c-7.766-1.091-12.005,1.524-12.554,5.412c-0.534,3.891,2.813,7.571,10.583,8.654    c2.354,0.336,4.908,0.033,7.312-0.55c-2.134,1.236-4.183,2.802-5.654,4.667c-4.832,6.191-4.679,11.174-1.593,13.581    c3.097,2.423,7.967,1.368,12.794-4.823c1.466-1.877,2.474-4.229,3.174-6.607c0.011,2.475,0.339,5.015,1.22,7.24    c2.938,7.274,7.34,9.623,10.968,8.153c3.647-1.456,5.169-6.208,2.214-13.491c-0.896-2.203-2.429-4.265-4.137-6.052    c2.151,1.215,4.51,2.219,6.878,2.556c7.766,1.097,12.012-1.524,12.564-5.415c0.531-3.894-2.812-7.577-10.6-8.674    c-2.353-0.331-4.902-0.016-7.303,0.567c2.126-1.25,4.179-2.791,5.64-4.673c4.843-6.186,4.694-11.168,1.593-13.584    C143.81,2.061,138.94,3.12,134.108,9.317z M135.027,27.678c-0.438,3.116-3.315,5.267-6.414,4.837    c-3.118-0.438-5.291-3.307-4.848-6.421c0.438-3.11,3.306-5.274,6.425-4.837C133.294,21.694,135.476,24.567,135.027,27.678z" />
                  </g>
                </g>
              </svg>
            </div>
         
            <div className="w-full leading-loose">
              <div className="preprimary-text text-center z-20">
                Pre-Primary Books
              </div>
              <div className="w-4/5 m-auto">
                <p className="pre-books-description p-3">
                  "Welcome to Adisri Publications, where learning begins with
                  our vibrant collection of pre-primary books. Designed to{" "}
                  <b className="bg-yellow-300"> spark curiosity </b> and foster
                  early literacy skills, our books are tailored to engage young
                  minds through captivating stories,{" "}
                  <b className="bg-yellow-300"> interactive activities </b>, and
                  colorful illustrations. Whether you're looking to introduce
                  basic concepts like numbers and letters or encourage
                  creativity through imaginative tales, our curated selection
                  offers something for every young learner. Explore our range
                  and embark on a journey of discovery with your child today."
                </p>
              </div>
            </div>
            <div className="w-5/6 m-auto z-50 ">
              <div className="h-10 new-space-color"></div>
              <CrousalBooks slideshow={4} />
            </div>
          </div>
          {/* <OnetoEight /> */}
          <div className="sm:h-20 new-space-color"></div>
          <div className="preprimary-section _sections2  p-4 transition-all duration-500 overflow-hidden">
            <div className="absolute overflow-hidden z-10 opacity-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="#a77afa"
                version="1.1"
                id="Capa_1"
                width="30vw"
                viewBox="0 0 173.692 173.692"
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <path d="M63.732,48.978c-3.357,0-6.853,0.936-10.09,2.219c2.729-2.164,5.283-4.714,6.968-7.645    c5.538-9.582,4.357-16.512-0.448-19.275c-4.796-2.769-11.385-0.342-16.923,9.25c-1.691,2.92-2.632,6.411-3.129,9.869    c-0.506-3.458-1.448-6.949-3.133-9.869c-5.533-9.582-12.126-12.025-16.917-9.25c-4.813,2.763-5.99,9.688-0.45,19.275    c1.68,2.914,4.237,5.481,6.978,7.65c-3.246-1.284-6.747-2.225-10.116-2.225C5.396,48.984,0,53.465,0,59.014    c0,5.546,5.401,10.03,16.473,10.025c3.369,0.005,6.866-0.919,10.116-2.222c-2.741,2.17-5.298,4.748-6.988,7.65    c-5.53,9.598-4.342,16.526,0.459,19.286c4.784,2.772,11.384,0.326,16.917-9.256c1.69-2.919,2.626-6.411,3.133-9.869    c0.509,3.453,1.45,6.95,3.137,9.858c5.529,9.588,12.124,12.039,16.915,9.267c4.805-2.766,5.981-9.699,0.443-19.291    c-1.674-2.92-4.23-5.48-6.969-7.65c3.236,1.291,6.732,2.227,10.095,2.218c11.084,0.009,16.479-4.476,16.479-10.021    C80.212,53.471,74.812,48.978,63.732,48.978z M44.122,65.955c-3.838,2.213-8.743,0.903-10.956-2.93    c-2.218-3.838-0.901-8.741,2.937-10.954c3.837-2.22,8.736-0.904,10.944,2.93C49.264,58.833,47.964,63.747,44.122,65.955z" />
                    <path d="M155.464,116.476c-4.348-1.156-9.209-1.166-13.849-0.635c4.295-1.856,8.488-4.275,11.677-7.47    c10.506-10.506,11.37-19.875,6.117-25.131c-5.253-5.245-14.632-4.38-25.125,6.127c-3.185,3.185-5.616,7.381-7.475,11.677    c0.545-4.646,0.545-9.495-0.626-13.858c-3.847-14.333-11.533-19.772-18.703-17.857c-7.168,1.926-11.108,10.479-7.256,24.826    c1.16,4.355,3.59,8.559,6.371,12.317c-3.744-2.797-7.959-5.215-12.312-6.392c-14.346-3.846-22.891,0.1-24.814,7.278    c-1.922,7.176,3.501,14.861,17.852,18.691c4.354,1.166,9.203,1.184,13.854,0.642c-4.307,1.85-8.493,4.284-11.686,7.469    c-10.494,10.508-11.36,19.875-6.109,25.118c5.245,5.263,14.627,4.387,25.128-6.103c3.195-3.185,5.613-7.387,7.477-11.694    c-0.55,4.652-0.538,9.5,0.635,13.861c3.833,14.338,11.523,19.782,18.7,17.865c7.171-1.926,11.104-10.483,7.27-24.826    c-1.185-4.356-3.592-8.559-6.383-12.312c3.743,2.797,7.946,5.205,12.312,6.376c14.348,3.853,22.889-0.088,24.799-7.26    C175.237,128.01,169.807,120.322,155.464,116.476z M124.186,131.649c-5.739,1.543-11.636-1.865-13.168-7.59    c-1.545-5.734,1.858-11.634,7.604-13.171c5.736-1.542,11.629,1.866,13.166,7.601C133.309,124.209,129.916,130.122,124.186,131.649    z" />
                    <path d="M134.108,9.317c-1.462,1.871-2.474,4.241-3.157,6.604c-0.022-2.465-0.335-5.012-1.231-7.229    c-2.938-7.272-7.321-9.642-10.964-8.161c-3.636,1.467-5.168,6.208-2.224,13.491c0.897,2.208,2.442,4.26,4.143,6.046    c-2.139-1.209-4.515-2.225-6.878-2.55c-7.766-1.091-12.005,1.524-12.554,5.412c-0.534,3.891,2.813,7.571,10.583,8.654    c2.354,0.336,4.908,0.033,7.312-0.55c-2.134,1.236-4.183,2.802-5.654,4.667c-4.832,6.191-4.679,11.174-1.593,13.581    c3.097,2.423,7.967,1.368,12.794-4.823c1.466-1.877,2.474-4.229,3.174-6.607c0.011,2.475,0.339,5.015,1.22,7.24    c2.938,7.274,7.34,9.623,10.968,8.153c3.647-1.456,5.169-6.208,2.214-13.491c-0.896-2.203-2.429-4.265-4.137-6.052    c2.151,1.215,4.51,2.219,6.878,2.556c7.766,1.097,12.012-1.524,12.564-5.415c0.531-3.894-2.812-7.577-10.6-8.674    c-2.353-0.331-4.902-0.016-7.303,0.567c2.126-1.25,4.179-2.791,5.64-4.673c4.843-6.186,4.694-11.168,1.593-13.584    C143.81,2.061,138.94,3.12,134.108,9.317z M135.027,27.678c-0.438,3.116-3.315,5.267-6.414,4.837    c-3.118-0.438-5.291-3.307-4.848-6.421c0.438-3.11,3.306-5.274,6.425-4.837C133.294,21.694,135.476,24.567,135.027,27.678z" />
                  </g>
                </g>
              </svg>
            </div>
            <div className="w-full leading-loose ">
              <div className="preprimary-text text-center">
                1<sup>st</sup> TO 8<sup>th</sup>
              </div>
              <div className="w-4/5 m-auto">
                <p className="pre-books-description p-3">
                  "Step into a world of wonder at our bookstore, where each book
                  is a key to unlocking boundless imagination and endless
                  learning for young readers. Our curated collection of 1st to
                  8th grade books is a treasure trove of stories, knowledge, and
                  inspiration, carefully chosen to captivate and enrich young
                  minds at every stage of their reading journey. Whether you're
                  seeking thrilling adventures that transport you to distant
                  realms, insightful stories that teach valuable life lessons,
                  or educational resources that make learning engaging and fun,
                  we have{" "}
                  <b className="bg-yellow-400"> something extraordinary </b>{" "}
                  waiting for you. Dive into the magic of storytelling with
                  beloved classics, explore new horizons with innovative
                  educational tools, and embark on adventures that ignite a
                  lifelong passion for reading. Join us on this literary
                  adventure and let the pages of our books become your gateway
                  to endless possibilities."
                </p>
              </div>
            </div>
            <div className="w-5/6 m-auto">
              <div className="h-10 new-space-color"></div>
              <CrousalBooks slideshow={4} />
            </div>
          </div>
          <div className="sm:h-20 new-space-color"></div>
          
        
          <div className="about-sections ">
            <p className="abouttext text-black max-sm:text-xl w-4/5 border-b-2 border-purple-500 m-auto">
              ABOUT US
            </p>
            <br />
            <p className="w-4/5 m-auto text-2xl max-sm:text-sm ">
              Adisri Publications™,an ever evolving name in the sphere of
              educational publishing in india, We offer enjoyable learning
              opportunities and memorable reading experience as we strive to
              imporve the quality of education of the student through reading,
              writing and drawing.
            </p>
            <br />
            <br />

            <div className="counting-container  justify-center max-sm:space-y-5 grid grid-cols-3 max-sm:grid-cols-1  sm:grid-rows-1 ">
              <div className="box1  h-full max-sm:w-4/5  space-y-4   p-3 text-center max-sm:flex max-sm:flex-wrap logg justify-center">
                <div>
                  <p className="st-cover max-sm:text-lg">Student covered</p>
                  <svg className="m-auto w-1/4" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" viewBox="0 0 512 512" xmlSpace="preserve">
<circle style={{fill:"#88C5CC"}} cx="256" cy="256" r="256"/>
<path style={{fill:"#80B9BF"}} d="M456,225.936c0-0.644-2.54-1.788-4.884-2.252L268.388,200.16c-6.724-1.312-17.812-1.452-24.536-0.14  l-182.94,23.184C58.62,223.656,56,224.228,56,224.956v2.048V228v1.056v0.992v1.136v0.576v0.344v1.132v0.296v0.272v1.476v0.296V236  l104.38,257.468C189.928,505.384,222.184,512,256,512c114.376,0,211.2-75.02,244.036-178.524L456,225.936z"/>
<path style={{fill:"#2D424D"}} d="M128,220v112l0,0c4.388,24,60.34,43.6,128,43.6S378.996,356,383.384,332H384V220H128z"/>
<path style={{fill:"#253740"}} d="M372,220v112l0,0c-4.252,24-57.428,42.116-122.228,43.256c2.064,0.032,4.14,0.2,6.228,0.2  c67.66,0,123.608-19.456,128-43.456l0,0V220H372z"/>
<path style={{fill:"#1E2C33"}} d="M448,224v5.036L267.676,206.12c-6.724-1.308-16.464-1.308-23.184,0L68,228.42V228H56v3.184v0.576  v1.772c0,0.772,2.364,1.556,4.432,2.26l149.352,44.876c6.484,2.224,17.316,2.7,23.968,1.068l217.452-47.008  c2.276-0.564,4.792-1.212,4.792-1.88v-1.088v-0.696V228L448,224z"/>
<path style={{fill:"#2D424D"}} d="M456,224.832c0-0.644-2.54-1.24-4.884-1.696l-182.728-23.252c-6.724-1.312-17.812-1.312-24.536,0  l-182.94,23.252C58.62,223.584,56,224.228,56,224.952V228c0,0.772,2.364,0.856,4.432,1.564l149.352,44.876  c6.484,2.224,17.316,2.704,23.968,1.072c0,0,222.244-46.84,222.244-47.504L456,224.832L456,224.832z"/>
<path style={{fill:"#FFD464"}} d="M314,381.252c-3.436,0-6-2.784-6-6.228V264.272l-70.012-23.492c-3.264-1.088-4.792-4.616-3.704-7.884  s4.744-5.036,7.996-3.936l74.104,24.916c2.548,0.852,7.616,3.44,7.616,6.12v116C324,379.436,317.436,381.252,314,381.252z"/>
<path style={{fill:"#E16B5A"}} d="M332,388c0,0,0-10.756,0-12.976c0-8.6-7.4-15.58-16-15.58s-16,6.976-16,15.58  c0,2.22,0,12.976,0,12.976H332z"/>
<rect x="300" y="388" style={{fill:"#FFD464"}} width="32" height="36"/>
<g>
	<rect x="304" y="388" style={{fill:"#FFE399"}} width="4" height="36"/>
	<rect x="312" y="388" style={{fill:"#FFE399"}} width="4" height="36"/>
	<rect x="320" y="388" style={{fill:"#FFE399"}} width="4" height="36"/>
</g>
</svg>
                </div>
                <div className="counting1 max-sm:text-lg sm:text-4xl  w-full" >
                 <CountUp end={50000} duration={6} enableScrollSpy/>+
                </div>
              </div>
              <div className="box1 max-sm:w-4/5 p-3 max-sm:space-y-5 text-center max-sm:flex max-sm:flex-wrap logg justify-center">
                <div>
                  <p className="st-cover max-sm:text-lg">Books Collection</p>
                  <svg className="w-1/4 m-auto" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" viewBox="0 0 512 512" xmlSpace="preserve">
<circle style={{fill:"#F2CF61"}} cx="256" cy="256" r="256"/>
<path style={{fill:"#233540"}} d="M112,106.332c0,13.2,10.8,24,24,24h188h24v24c0,0,0,148,0,200c0,4-4,8-8,8c-52-0.024-204,0-204,0  c-13.2,0-24-10.8-24-24v-184V106.332z"/>
<g>
	<rect x="152" y="130.332" style={{fill:"#1C2A33"}} width="8" height="232"/>
	<rect x="176" y="178.332" style={{fill:"#1C2A33"}} width="8" height="184"/>
	<path style={{fill:"#1C2A33"}} d="M348,146.332v140c0,8.8-7.2,16-16,16H192c-8.8,0-16-7.2-16-16v-112c0-16,12-28,28-28H348z"/>
</g>
<path style={{fill:"#406A80"}} d="M348,90.332c0-4-4-8-8-8s-16,0-16,0H136c-13.2,0-24,10.8-24,24s10.8,24,24,24h188h24  C348,130.332,348,100.332,348,90.332z"/>
<rect x="152" y="82.332" style={{fill:"#395F73"}} width="8" height="48"/>
<path style={{fill:"#E66356"}} d="M136,130.332h16v-48h-16c-13.2,0-24,10.8-24,24S122.8,130.332,136,130.332z"/>
<path style={{fill:"#F5F5F5"}} d="M136,122.332c-8.672,0-16-7.328-16-16s7.328-16,16-16h212v32H136z"/>
<path style={{fill:"#CC584C"}} d="M136,362.332h16v-232h-16c-13.2,0-24-10.8-24-24v48v184C112,351.532,122.8,362.332,136,362.332z"/>
<g>
	<rect x="212" y="234.32" style={{fill:"#F5F5F5"}} width="80" height="8"/>
	<rect x="192" y="234.32" style={{fill:"#F5F5F5"}} width="104" height="8"/>
</g>
<path style={{fill:"#233540"}} d="M184,178.332c0,13.2,10.8,24,24,24h176h24v24c0,0,0,148,0,200c0,4-4,8-8,8c-52-0.024-192,0-192,0  c-13.2,0-24-10.8-24-24v-184V178.332z"/>
<rect x="224" y="202.332" style={{fill:"#1C2A33"}} width="8" height="232"/>
<path style={{fill:"#406A80"}} d="M408,162.332c0-4-4-8-8-8s-16,0-16,0H208c-13.2,0-24,10.8-24,24s10.8,24,24,24h176h24  C408,202.332,408,172.332,408,162.332z"/>
<rect x="224" y="154.332" style={{fill:"#395F73"}} width="8" height="48"/>
<path style={{fill:"#E66356"}} d="M208,202.332h16v-48h-16c-13.2,0-24,10.8-24,24S194.8,202.332,208,202.332z"/>
<path style={{fill:"#F5F5F5"}} d="M208,194.332c-8.672,0-16-7.328-16-16s7.328-16,16-16h200v32H208z"/>
<path style={{fill:"#CC584C"}} d="M208,434.332h16v-232h-16c-13.2,0-24-10.8-24-24v48v184C184,423.532,194.8,434.332,208,434.332z"/>
<g>
	<rect x="284" y="290.32" style={{fill:"#F5F5F5"}} width="64" height="8"/>
	<rect x="264" y="306.32" style={{fill:"#F5F5F5"}} width="104" height="8"/>
</g>
</svg>
                </div>
                <div className="counting1 max-sm:text-lg sm:text-4xl  w-full  p-3">
                <CountUp end={1000} duration={6} enableScrollSpy/>+
                </div>
              </div>
              <div className="box1  h-full max-sm:h-4/5 max-sm:w-4/5   p-3 text-center flex logg justify-center">
                <div>
                <div>
                  <p className="st-cover max-sm:text-lg "> Our Clients </p>
                  <svg className="w-1/4 m-auto" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height="100px" width="100px" version="1.1" id="Layer_1" viewBox="0 0 508 508" xmlSpace="preserve">
<circle style={{fill:"#FD8469"}} cx="254" cy="254" r="254"/>
<path style={{fill:"#F9B54C"}} d="M328.4,354c0,2.8-0.4,6-2.4,7.6c-4.8,4.8-12.8,5.2-18,0.4l-2.8-2.4c3.6,3.2,3.6,8.8,0.4,12.4  l-8.8,8.8c-3.2,3.2-8.8,3.2-12,0l-5.6-5.6c3.6,3.6,3.6,10,0,13.2l-4.8,4.4c-3.6,3.2-9.2,3.2-12.8,0l-4.4-4.4c2.4,2.4,2.4,6.4,0,8.8  l-4.8,4.8c-2.4,2.4-6.4,2.4-8.8,0l-11.2-6c0,0-0.4,0-0.8-0.4l-4-11.6c-0.8-2.4,0-5.2,1.6-6.8c3.6-3.6,3.6-8.8,0-12.4l-5.2-5.2  c-3.2-3.2-8-3.6-11.6-0.8l-3.2,2.8l4.4-4.4c4.4-4,4.4-10.8,0-15.2l-4-4c-4.4-4.4-10.8-4.4-15.2,0l-5.2,5.2c3.6-3.6,3.6-9.6,0-13.2  l-6.4-6.4c-3.6-3.6-9.2-3.6-12.8-0.4l-15.6,13.6l0,0c2-2.8,1.6-6.4-0.4-8.8l-4.8-4.8c-2.8-2.8-6.8-2.8-9.6,0l-0.8,0.8  c-4-3.6-7.6-6.4-10.4-9.2l37.2-86.4c10.8,0,30.4-0.8,45.6-10c12.8-8,29.6-4.8,37.6,7.2c-1.6,0.8-3.2,1.6-4.8,2.4  c-10.4,6.8-23.6,11.2-34,14c-8.4,2.4-14.4,9.6-15.2,18.4c-0.4,8.8-2.8,18-4.8,24c-1.6,4.8,0.4,9.6,4.8,12.4c2.4,1.2,4.8,2,7.6,2  c3.6,0,6.8-1.2,9.6-3.6c9.6-8.4,23.2-21.6,22-27.6c0,0,12.8,2,15.6-1.2c0,0,63.2,48.8,78,78.4l0,0  C327.2,344.8,328.4,349.6,328.4,354z"/>
<g>
	<path style={{fill:"#FFD05B"}} d="M380.8,316.8c-12.4,8-51.2,32.4-53.6,27.2c-15.2-29.6-78.4-78-78.4-78c-2.8,3.2-15.6,1.2-15.6,1.2   c1.2,6-12.4,19.6-22,27.6c-2.8,2.4-6,3.6-9.6,3.6c-2.4,0-5.2-0.8-7.6-2c-4.4-2.4-6-7.6-4.8-12.4c2-6,4.4-15.2,4.8-24   c0.4-8.8,6.8-16,15.2-18.4c10.4-2.8,23.6-7.6,34-14c10-6.4,22.4-7.2,33.2-2c15.2,7.6,38.4,14,65.6,2.4L380.8,316.8z"/>
	<path style={{fill:"#FFD05B"}} d="M229.2,376.8c3.6-3.6,3.6-8.8,0-12.4l-5.2-5.2c-3.2-3.2-8-3.2-11.6-0.8l-3.2,2.8l4.4-4.4   c4-4,4-11.2,0-15.2l-4-4c-4-4-10.8-4-15.2,0l-5.2,4.8c3.6-3.6,3.6-9.6,0-13.2l-6.4-6.4c-3.6-3.6-9.2-3.6-12.8-0.4l-16,14.4   c2.8-2.8,2.8-6.8,0-9.6l-4.8-4.8c-2.8-2.8-6.8-2.8-9.6,0L134,328c0.4,18.4,17.2,14.4,17.2,14.4c-1.2,22.4,24,21.2,24,21.2   c-4.4,24,25.2,20,25.2,20C201.2,402,232,396,232,396l-4-12.4C226.8,381.2,227.2,378.4,229.2,376.8z"/>
</g>
<g>
	<path style={{fill:"#FFFFFF"}} d="M153.2,332.8l-0.8,1.2c-2,2.4-5.6,2.4-7.6,0.4L142,332c-2.4-2-2.4-5.6-0.4-7.6l0.8-1.2   c2-2.4,5.6-2.4,7.6-0.4l2.8,2.4C154.8,326.8,155.2,330.4,153.2,332.8z"/>
	<path style={{fill:"#FFFFFF"}} d="M189.2,336.4l-1.6,1.6c-2.8,3.2-7.2,3.6-10.4,0.8l-3.6-3.2c-3.2-2.8-3.6-7.2-0.8-10.4l1.2-1.6   c2.8-3.2,7.2-3.6,10.4-0.8l3.6,3.2C191.2,328.8,191.6,333.2,189.2,336.4z"/>
	<path style={{fill:"#FFFFFF"}} d="M213.6,350.4l-1.2,1.6c-2.8,3.2-7.2,3.6-10.4,0.8l-3.6-3.2c-3.2-2.8-3.6-7.2-0.8-10.4l1.2-1.6   c2.8-3.2,7.2-3.6,10.4-0.8l3.6,3.2C216,342.8,216.4,347.6,213.6,350.4z"/>
	<path style={{fill:"#FFFFFF"}} d="M228,368.8l-1.2,1.2c-2,2.4-6,2.8-8.4,0.8l-3.2-2.4c-2.4-2-2.8-6-0.8-8.4l1.2-1.2   c2-2.4,6-2.8,8.4-0.8l3.2,2.4C229.6,362.4,230,366.4,228,368.8z"/>
	<path style={{fill:"#FFFFFF"}} d="M201.6,282.8l4-10c1.2-3.2-0.4-6.8-4-8l-7.6-2c-0.8,8-2.8,16-4.8,21.6c-0.4,1.2-0.4,2.8-0.4,4   C194,290,199.6,287.6,201.6,282.8z"/>
	<polygon style={{fill:"#FFFFFF"}} points="413.2,319.2 386.8,330.8 339.2,219.6 359.2,209.6  "/>
</g>
<path style={{fill:"#324A5E"}} d="M508,254c0-44.4-11.2-86-31.2-122l-125.6,61.6l72.4,147.2l80.4-42C506.4,284,508,269.2,508,254z"/>
<polygon style={{fill:"#FFFFFF"}} points="168.8,219.6 121.2,330.8 94.8,319.2 148.8,209.6 "/>
<path style={{fill:"#324A5E"}} d="M0,254c0,15.2,1.6,30,4,44.4l80.4,42l72.4-147.2L31.2,132C11.2,168,0,209.6,0,254z"/>
<g>
	<circle style={{fill:"#2B3B4E"}} cx="437.6" cy="300" r="12"/>
	<circle style={{fill:"#2B3B4E"}} cx="468" cy="283.6" r="12"/>
	<circle style={{fill:"#2B3B4E"}} cx="68" cy="304" r="12"/>
	<circle style={{fill:"#2B3B4E"}} cx="37.6" cy="287.6" r="12"/>
</g>
</svg>
                </div>
                <div className="counting1 max-sm:text-lg sm:text-4xl p-3" >
                <CountUp end={10000} duration={6} enableScrollSpy/>
              +
                </div>
              </div>
            </div> 
            </div>
                   
            <br />
            <div className="w-full">
              <div>
                <div className="sm:h-20 new-space-color"></div>
                <p className="our-clients2 max-sm:text-xl">Our Clients</p>
              </div>
              <div className="sm:h-5 new-space-color"></div>
              <div  >
              <Clients />
              </div>
              <div className="sm:h-20 max-sm:h-12 new-space-color"></div>
            </div>
          </div>
   
          
         
        </div>
      </div>
    </>
  );
}
