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
     <br />
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
                1<sup>th</sup> TO 8<sup>th</sup>
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

            <div className="counting-container grid grid-cols-3 grid-rows-1 ">
              <div className="box1    p-3 text-center">
                <div>
                  <p className="st-cover">Student covered</p>
                  <svg
                    className="m-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    width="4vw"
                    fill="#000"
                    >
                    <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z" />
                  </svg>
                </div>
                <div className="counting1" style={{fontSize:"2.5vw"}}>
                 <CountUp end={20000} duration={6} enableScrollSpy/>+
                </div>
              </div>
              <div className="box1  p-3 text-center">
                <div>
                  <p className="st-cover">Books Collection</p>
                  <svg
                    className="m-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    width="4vw"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    id="Layer_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 128 128"
                    xmlSpace="preserve"
                    >
                    <g>
                      <path d="M110.6,38.3H106v-3.5c0-1-0.8-1.7-1.7-1.8c0,0,0,0,0,0H70.8c-2.7,0-5.2,1.2-6.8,3.3c-1.6-2.1-4.1-3.3-6.8-3.3H23.7   c-1,0-1.7,0.8-1.7,1.8v3.5h-4.6c-1,0-1.8,0.8-1.8,1.8v57c0,1,0.8,1.7,1.8,1.8h93.1c1,0,1.7-0.8,1.8-1.8V40   C112.3,39.1,111.5,38.3,110.6,38.3z M70.8,36.5h31.7v51.9H70.8c-2.9,0-4.6,1.4-5,1.6V41.6c0-0.4,0-0.7-0.1-1.1   C66.2,38.3,68.3,36.5,70.8,36.5z M25.5,36.5h31.7c2.6,0,4.7,1.9,5,4.1c0,0.4-0.1,0.7-0.1,1.1v48.3c-0.3-0.1-2.1-1.6-5-1.6H25.5   L25.5,36.5L25.5,36.5z M19.2,41.8H22v48.3c0,1,0.8,1.8,1.8,1.8h33.5c2,0,3.9,1.1,4.8,3.4H19.2L19.2,41.8z M108.8,95.3H66   c0.8-2.2,2.8-3.4,4.8-3.4h33.5c1,0,1.8-0.8,1.8-1.8V41.8h2.8L108.8,95.3z" />
                      <path d="M32.7,50h22.5c1,0,1.8-0.8,1.8-1.8s-0.8-1.8-1.8-1.8H32.7c-1,0-1.8,0.8-1.8,1.8S31.7,50,32.7,50z" />
                      <path d="M32.7,59.3h22.5c1,0,1.8-0.8,1.8-1.8s-0.8-1.8-1.8-1.8H32.7c-1,0-1.8,0.8-1.8,1.8S31.7,59.3,32.7,59.3z" />
                      <path d="M32.7,68.7h22.5c1,0,1.8-0.8,1.8-1.8s-0.8-1.8-1.8-1.8H32.7c-1,0-1.8,0.8-1.8,1.8S31.7,68.7,32.7,68.7z" />
                      <path d="M32.7,78h22.5c1,0,1.8-0.8,1.8-1.8s-0.8-1.8-1.8-1.8H32.7c-1,0-1.8,0.8-1.8,1.8S31.7,78,32.7,78z" />
                      <path d="M72.8,50h22.5c1,0,1.8-0.8,1.8-1.8s-0.8-1.8-1.8-1.8H72.8c-1,0-1.8,0.8-1.8,1.8S71.9,50,72.8,50z" />
                      <path d="M72.8,59.3h22.5c1,0,1.8-0.8,1.8-1.8s-0.8-1.8-1.8-1.8H72.8c-1,0-1.8,0.8-1.8,1.8S71.9,59.3,72.8,59.3z" />
                      <path d="M72.8,68.7h22.5c1,0,1.8-0.8,1.8-1.8s-0.8-1.8-1.8-1.8H72.8c-1,0-1.8,0.8-1.8,1.8S71.9,68.7,72.8,68.7z" />
                      <path d="M72.8,78h22.5c1,0,1.8-0.8,1.8-1.8s-0.8-1.8-1.8-1.8H72.8c-1,0-1.8,0.8-1.8,1.8S71.9,78,72.8,78z" />
                    </g>
                  </svg>
                </div>
                <div className="counting1" style={{fontSize:"2.5vw"}} >
                <CountUp end={5000} duration={6} enableScrollSpy/>+
                </div>
              </div>
              <div className="box1  h-full   p-3 text-center flex logg justify-center">
                <div>
                <div>
                  <p className="st-cover"> Our Clients </p>
                  <svg
                    className="m-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    width="4vw"
                    fill="#000"
                    >
                    <path d="M475-160q4 0 8-2t6-4l328-328q12-12 17.5-27t5.5-30q0-16-5.5-30.5T817-607L647-777q-11-12-25.5-17.5T591-800q-15 0-30 5.5T534-777l-11 11 74 75q15 14 22 32t7 38q0 42-28.5 70.5T527-522q-20 0-38.5-7T456-550l-75-74-175 175q-3 3-4.5 6.5T200-435q0 8 6 14.5t14 6.5q4 0 8-2t6-4l136-136 56 56-135 136q-3 3-4.5 6.5T285-350q0 8 6 14t14 6q4 0 8-2t6-4l136-135 56 56-135 136q-3 2-4.5 6t-1.5 8q0 8 6 14t14 6q4 0 7.5-1.5t6.5-4.5l136-135 56 56-136 136q-3 3-4.5 6.5T454-180q0 8 6.5 14t14.5 6Zm-1 80q-37 0-65.5-24.5T375-166q-34-5-57-28t-28-57q-34-5-56.5-28.5T206-336q-38-5-62-33t-24-66q0-20 7.5-38.5T149-506l232-231 131 131q2 3 6 4.5t8 1.5q9 0 15-5.5t6-14.5q0-4-1.5-8t-4.5-6L398-777q-11-12-25.5-17.5T342-800q-15 0-30 5.5T285-777L144-635q-9 9-15 21t-8 24q-2 12 0 24.5t8 23.5l-58 58q-17-23-25-50.5T40-590q2-28 14-54.5T87-692l141-141q24-23 53.5-35t60.5-12q31 0 60.5 12t52.5 35l11 11 11-11q24-23 53.5-35t60.5-12q31 0 60.5 12t52.5 35l169 169q23 23 35 53t12 61q0 31-12 60.5T873-437L545-110q-14 14-32.5 22T474-80Zm-99-560Z" />
                  </svg>
                </div>
                <div className="counting1 text-3xl" style={{fontSize:"2.5vw"}}>
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
