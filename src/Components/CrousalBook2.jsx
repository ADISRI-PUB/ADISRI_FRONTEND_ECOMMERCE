import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import '../Css/IPrePrimary.css'
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <>
    <div className="w-full ">
      <svg
            className={className}
            style={{
              ...style,
              width:"40px",
            height:"40px",
              transform: "rotate(-90deg)",
            //  backgroundColor:"black"
            }}
            onClick={onClick}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            height="60px"
            width="60px"
            fill="#000"
          >
            <path d="m480-340 180-180-57-56-123 123-123-123-57 56 180 180Zm0 260q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
          </svg>
          </div>
      </>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <>
        <div className="w-full">
      <svg
            className={className}
            style={{
              ...style,
              width:"40px",
            height:"40px",
              transform: "rotate(90deg)",
            //  backgroundColor:"black"
            }}
            onClick={onClick}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            height="60px"
            width="60px"
            fill="#000"
          >
            <path d="m480-340 180-180-57-56-123 123-123-123-57 56 180 180Zm0 260q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
          </svg>
          </div>
    </>
  );
}

export default function CrousalBooks2() {
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
          slidesToScroll: 1,
        nextArrow:"",
        prevArrow:""
        },
      },
      
    ],
  };
  return (
    <div className="slider-container   p-4 max-sm:p-10 w-full">
      <div className="w-4/5 m-auto ">
      <Slider {...settings}>
      <div className="h-[200px] relative " >
          <Link to="/onetoeight">

          <div className="mx-auto   w-4/5 relative transform overflow-hidden rounded-lg bg-white text-gray-700  duration-300  ">
          <div className="w-[100%] h-[100%] relative " style={{perspective:'900px'}}>
            <div className="image-card p-2 ">
              <img
                className="        w-full"
                src="EVS ...3.jpg"
                alt="Product Image"
              />
             </div>
            </div>
            </div>
          </Link>
        </div>
        <div className="h-[200px] relative " >
          <Link to="/onetoeight">

          <div className="mx-auto   w-4/5 relative transform overflow-hidden rounded-lg bg-white text-gray-700  duration-300  ">
          <div className="w-[100%] h-[100%] relative " style={{perspective:'900px'}}>
            <div className="image-card p-2 ">
              <img
                className="        w-full"
                src="Vyakarn Vatika 5.jpg"
                alt="Product Image"
              />
             </div>
            </div>
            </div>
          </Link>
        </div>
        <div className="h-[200px] relative " >
          <Link to="/onetoeight">

          <div className="mx-auto   w-4/5 relative transform overflow-hidden rounded-lg bg-white text-gray-700  duration-300  ">
          <div className="w-[100%] h-[100%] relative " style={{perspective:'900px'}}>
            <div className="image-card p-2 ">
              <img
                className="        w-full"
                src="HINDI--4.jpg"
                alt="Product Image"
              />
             </div>
            </div>
            </div>
          </Link>
        </div>
    
        <div className="h-[200px] relative " >
          <Link to="/onetoeight">

          <div className="mx-auto   w-4/5 relative transform overflow-hidden rounded-lg bg-white text-gray-700  duration-300  ">
          <div className="w-[100%] h-[100%] relative " style={{perspective:'900px'}}>
            <div className="image-card p-2 ">
              <img
                className="        "
                src="Grammar - 3.jpg"
                alt="Product Image"
              />
             </div>
            </div>
            </div>
          </Link>
        </div>
        <div className="h-[200px] relative " >
          <Link to="/onetoeight">

          <div className="mx-auto   w-4/5 relative transform overflow-hidden rounded-lg bg-white text-gray-700  duration-300  ">
          <div className="w-[100%] h-[100%] relative " style={{perspective:'900px'}}>
            <div className="image-card p-2 ">
              <img
                className="        w-full"
                src="madhurima hindi 5.jpg"
                alt="Product Image"
              />
             </div>
            </div>
            </div>
          </Link>
        </div>
        <div className="h-[200px] relative " >
          <Link to="/onetoeight">

          <div className="mx-auto   w-4/5 relative transform overflow-hidden rounded-lg bg-white text-gray-700  duration-300  ">
          <div className="w-[100%] h-[100%] relative " style={{perspective:'900px'}}>
            <div className="image-card p-2 ">
              <img
                className="        w-full"
                src="grow wid grammar 5.jpg"
                alt="Product Image"
              />
             </div>
            </div>
            </div>
          </Link>
        </div>
        <div className="h-[200px] relative " >
          <Link to="/onetoeight">

          <div className="mx-auto   w-4/5 relative transform overflow-hidden rounded-lg bg-white text-gray-700  duration-300  ">
          <div className="w-[100%] h-[100%] relative " style={{perspective:'900px'}}>
            <div className="image-card p-2 ">
              <img
                className="        w-full"
                src="vyakaran vaticka 2.jpg"
                alt="Product Image"
              />
             </div>
            </div>
            </div>
          </Link>
        </div>
      
      
      </Slider>
      </div>
    </div>
  );
}
