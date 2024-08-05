import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <>
      <div
        className="max-sm:h-40 flex logg justify-center"
        style={{ height: "30px" }}
      >
        <span>
          <svg
            className={className}
            style={{
              ...style,
              width: "4vw",
              height: "2.4vmax",
              transform: "rotate(-90deg)",
            }}
            onClick={onClick}
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#000000"
          >
            <path d="m480-340 180-180-57-56-123 123-123-123-57 56 180 180Zm0 260q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
          </svg>
        </span>
      </div>
    </>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <>
      <div
        className="max-sm:h-40 flex logg justify-center "
        style={{ height: "30px" }}
      >
        <span className="">
          <svg
            className={className}
            style={{
              ...style,
              width: "4vw",
              height: "2.4vmax",
              transform: "rotate(-270deg)",
              zIndex: "2",
            }}
            onClick={onClick}
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#000000"
          >
            <path d="m480-340 180-180-57-56-123 123-123-123-57 56 180 180Zm0 260q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
          </svg>
        </span>
      </div>
    </>
  );
}

export default function CrousalBooks() {
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
          slidesToShow: 2,
          slidesToScroll: 1,
          
        },
      },
      
    ],
  };
  return (
    <div className="slider-container w-full ">
      <Slider {...settings}>
        <div className="max-h-70" >
          <Link to="/preprimary">
            <div className="mx-auto  w-4/5 transform overflow-hidden rounded-lg bg-white text-gray-700 shadow-md duration-300  hover:shadow-lg">
              <img
                className="sm:p-2  max-sm:p-1  m-auto w-full"
                src=""
                alt="Product Image"
              />
              <div className="">
                <h2 className="mb-2  font-medium  text-gray-900 text-md bookcrousal p-2 text-center">
                  <br />
                COUNTING 1-50
                </h2>

                <div className="flex items-center">
                  <p className=" font-semibold text-gray-900 bookcrousal p-4 ">
                  &#x20b9;190/-
                  </p>
                  <p className="  font-medium text-gray-500 line-through  bookcrousal sm:p-4">
                  &#x20b9;200/-
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="max-h-70">
          <Link to="/preprimary">
          <div className="mx-auto  w-4/5 transform overflow-hidden rounded-lg bg-white text-gray-700 shadow-md duration-300  hover:shadow-lg">
              <img
                className="sm:p-2  max-sm:p-1  m-auto"
                src="ALL IN ONE WRITING BOOK HARD BOUND.jpg"
                alt="Product Image"
              />
              <div className="">
                <h2 className="mb-2  font-medium  text-gray-900 text-md bookcrousal p-2 text-center">
                ALL IN ONE (WRITING BOOK) PAPER BACK
                </h2>

                <div className="flex items-center">
                  <p className=" font-semibold text-gray-900 bookcrousal p-4 ">
                    ₹260/-
                  </p>
                  <p className="  font-medium text-gray-500 line-through  bookcrousal sm:p-4">
                  ₹280/-
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="max-h-70">
          <Link to="/preprimary">
          <div className="mx-auto  w-4/5 transform overflow-hidden rounded-lg bg-white text-gray-700 shadow-md duration-300  hover:shadow-lg">
              <img
                className="sm:p-2     max-sm:p-3  m-auto"
                src="AMAZING PICTURES  A.jpg"
                alt="Product Image"
              />
              <div className="">
                <h2 className="mb-2  font-medium  text-gray-900 text-md bookcrousal p-2 text-center">
                  <br />
                AMAZING PICTURES - A 
                </h2>

                <div className="flex items-center">
                  <p className=" font-semibold text-gray-900 bookcrousal p-4 ">
                  ₹140/-
                  </p>
                  <p className="  font-medium text-gray-500 line-through  bookcrousal sm:p-4">
                  ₹150/-
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="max-h-70">
          <Link to="/preprimary">
          <div className="mx-auto  w-4/5 transform overflow-hidden rounded-lg bg-white text-gray-700 shadow-md duration-300  hover:shadow-lg">
              <img
                className="sm:p-2  max-sm:p-3 m-auto"
                src="ART&CRAFT B.jpg"
                alt="Product Image"
              />
              <div className="">
                <h2 className="mb-2  font-medium  text-gray-900 text-md bookcrousal p-2 text-center">
                LITTLE ARTIST'S ART AND CRAFT BOOK -B
                </h2>

                <div className="flex items-center">
                  <p className=" font-semibold text-gray-900 bookcrousal p-4 ">
                  ₹175/-
                  </p>
                  <p className="  font-medium text-gray-500 line-through  bookcrousal sm:p-4">
                  ₹185/-
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="max-h-70">
          <Link to="/preprimary">
          <div className="mx-auto  w-4/5 transform overflow-hidden rounded-lg bg-white text-gray-700 shadow-md duration-300  hover:shadow-lg">
              <img
                className="sm:p-2 max-sm:p-3 w-full "
                src="MADHUR SARGAM FRONT.jpg"
                alt="Product Image"
              />
              <div className="">
                <h2 className="mb-2  font-medium  text-gray-900 text-md bookcrousal p-2 text-center">
                  <br />
                MADHUR SARGARM -A 
                </h2>

                <div className="flex items-center">
                  <p className=" font-semibold text-gray-900 bookcrousal p-4 ">
                  ₹110/-
                  </p>
                  <p className="  font-medium text-gray-500 line-through  bookcrousal sm:p-4">
                  ₹120/-
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="max-h-70">
          <Link to="/preprimary">
          <div className="mx-auto    w-4/5 transform overflow-hidden rounded-lg bg-white text-gray-700 shadow-md duration-300  hover:shadow-lg">
              <img
                className="sm:p-2 max-sm:p-3 w-full "
                src="LITTLE ARTIST COLORING BOOK B- FRONT.jpg"
                alt="Product Image"
              />
              <div className="">
                <h2 className="mb-2  font-medium  text-gray-900 text-md bookcrousal p-2 text-center">
                <br />
                LITTLE ARTIST'S COLOURING BOOK B 
                </h2>

                <div className="flex items-center">
                  <p className=" font-semibold text-gray-900 bookcrousal p-4 ">
                  ₹175/-
                  </p>
                  <p className="  font-medium text-gray-500 line-through  bookcrousal sm:p-4">
                  ₹185/-
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="max-h-70">
          <Link to="/preprimary">
          <div className="mx-auto  w-4/5 transform overflow-hidden rounded-lg bg-white text-gray-700 shadow-md duration-300  hover:shadow-lg">
              <img
                className="sm:p-2 max-sm:p-3 w-full"
                src="MILESTONE ENGLISH PRE-PRIMER- FRONT.jpg"
              />
              <div className="">
                <h2 className="mb-2  font-medium  text-gray-900 text-md bookcrousal p-2 text-center">
                  <br />
                MILESTONE ENGLISH 
                </h2>

                <div className="flex items-center">
                  <p className=" font-semibold text-gray-900 bookcrousal p-4 ">
                  ₹195/-


                  </p>
                  <p className="  font-medium text-gray-500 line-through  bookcrousal sm:p-4">
                  ₹205/-

                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="max-h-70">
          <Link to="/preprimary">
          <div className="mx-auto  w-4/5 transform overflow-hidden rounded-lg bg-white text-gray-700 shadow-md duration-300  hover:shadow-lg">
              <img
                className="sm:p-2 max-sm:p-3 w-full "
                src="SHABD SULEKHAN TITLE - FRONT.jpg"
                alt="Product Image"
              />
              <div className="">
                <h2 className="mb-2  font-medium  text-gray-900 text-md bookcrousal p-2 text-center">
                  <br />
                SHABD SULEKHAN 
                </h2>

                <div className="flex items-center">
                  <p className=" font-semibold text-gray-900 bookcrousal p-4 ">
                  ₹185/-
                  </p>
                  <p className="  font-medium text-gray-500 line-through  bookcrousal sm:p-4">
                  ₹195/-
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </Slider>
    </div>
  );
}
