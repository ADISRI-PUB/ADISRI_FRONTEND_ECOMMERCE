import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
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
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
      <div className="w-4/5 m-auto">
      <Slider {...settings}>
        <div className="sm:h-[200px] max-sm:h-[200px]  rounded-lg" >
          <Link to="/onetoeight">
          <div className="mx-auto  w-4/5 aspect-[4/6]  transform overflow-hidden rounded-lg bg-white text-gray-700 shadow-md duration-300  hover:shadow-lg">
              <img
                className="sm:p-2 max-sm:p-3 w-full "
                src="EVS ...3.jpg"
                alt="Product Image"
              />
              <div className="">
                <h2 className="mb-2  font-medium  text-gray-900 text-md bookcrousal p-2 text-center">
                
               EVS 3
                </h2>

              
              </div>
            </div>
          </Link>
        </div>
        <div className="sm:h-[200px] max-sm:h-[200px]  rounded-lg" >
          <Link to="/onetoeight">
          <div className="mx-auto aspect-[4/6]  w-4/5  transform overflow-hidden rounded-lg bg-white text-gray-700 shadow-md duration-300  hover:shadow-lg">
              <img
                className="sm:p-2 max-sm:p-3 w-full  "
                src="Vyakarn Vatika 5.jpg"
                alt="Product Image"
              />
              <div className="">
                <h2 className="mb-2  font-medium  text-gray-900 text-md bookcrousal p-2 text-center">
                
                Vyakarn Vatika
                </h2>

              
              </div>
            </div>
          </Link>
        </div>
        <div className="h-[200px] " >
          <Link to="/onetoeight">
          <div className="mx-auto shadow-md aspect-[4/6]  w-4/5 transform overflow-hidden rounded-lg bg-white text-gray-700  duration-300  hover:shadow-lg">
              <img
                className="sm:p-2      max-sm:p-3  w-full"
                src="HINDI--4.jpg"
                alt="Product Image"
              />
              <div className="">
                <h2 className="mb-2  font-medium  text-gray-900 text-md bookcrousal p-2 text-center">
               
                Hindi
                </h2>

            
              </div>
            </div>
          </Link>
        </div>
    
        <div className="sm:h-[200px]">
          <Link to="/onetoeight">
          <div className="mx-auto aspect-[4/6]  w-4/5 transform overflow-hidden rounded-lg bg-white text-gray-700 shadow-md duration-300  hover:shadow-lg">
              <img
                className="sm:p-2      max-sm:p-3  m-auto"
                src="Grammar - 3.jpg"
                alt="Product Image"
              />
              <div className="">
                <h2 className="mb-2  font-medium  text-gray-900 text-md bookcrousal p-2 text-center">
               
                Grammer 3
                </h2>

                <div className="flex items-center">
                  {/* <p className=" font-semibold text-gray-900 bookcrousal p-4 ">
                  ₹140/-
                  </p> */}
                
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="sm:h-[200px]">
          <Link to="/onetoeight">
          <div className="mx-auto  w-4/5 aspect-[4/6] transform overflow-hidden rounded-lg bg-white text-gray-700 shadow-md duration-300  hover:shadow-lg">
              <img
                className="sm:p-2  max-sm:p-3 m-auto"
                src="madhurima hindi 5.jpg"
                alt="Product Image"
              />
              <div className="">
                <h2 className="mb-2  font-medium  text-gray-900 text-md bookcrousal p-2 text-center">
               MADHURIMA HINDI
                </h2>

                <div className="flex items-center">
                  {/* <p className=" font-semibold text-gray-900 bookcrousal p-4 ">
                  ₹175/-
                  </p> */}
                 
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="sm:h-[200px]">
          <Link to="/onetoeight">
          <div className="mx-auto  w-4/5 aspect-[4/6]  transform overflow-hidden rounded-lg bg-white text-gray-700 shadow-md duration-300  hover:shadow-lg">
              <img
                className="sm:p-2 max-sm:p-3 w-full "
                src="grow wid grammar 5.jpg"
                alt="Product Image"
              />
              <div className="">
                <h2 className="mb-2  font-medium  text-gray-900 text-md bookcrousal p-2 text-center">
                
                GROW GRAMMER
                </h2>

                <div className="flex items-center">
                
                 
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="sm:h-[200px]">
          <Link to="/onetoeight">
          <div className="mx-auto    w-4/5  aspect-[4/6]  transform overflow-hidden rounded-lg bg-white text-gray-700 shadow-md duration-300  hover:shadow-lg">
              <img
                className="sm:p-2 max-sm:p-3 w-full "
                src="vyakaran vaticka 2.jpg"
                alt="Product Image"
              />
              <div className="">
                <h2 className="mb-2  font-medium  text-gray-900 text-md bookcrousal p-2 text-center">
               VYAKARAN VATIKA
                </h2>

                <div className="flex items-center">
                  
                
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
