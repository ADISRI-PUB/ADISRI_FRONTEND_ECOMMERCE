import React from "react";
import Slider from "react-slick";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",  }}
        onClick={onClick}
      />
    );
  }
  
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", width:"3vw", height:"3vw" }}
        onClick={onClick}
        />
          
    );
  }
  
export default function CrousalBooks({slideshow}) {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: slideshow,
    slidesToScroll: 1,
    autoplaySpeed: 1600,
     cssEase: "linear",
     nextArrow: <SampleNextArrow />,
     prevArrow: <SamplePrevArrow />
     
  };
  return (
    <div className="slider-container ">
    <Slider {...settings} >
      <div className=" ">
      <img
       className="w-4/5 m-auto  "
            src="ALL IN ONE READING.jpg"
            alt=""
          />
      </div>
      <div>
      <img
       className="w-4/5 m-auto"
            src="ALL IN ONE WRITING BOOK HARD BOUND.jpg"
            alt=""
          />
      </div>
      <div>
      <img className="w-4/5 m-auto"
            src="AMAZING PICTURES  A.jpg"
            alt=""
          />
      </div>
      <div>
      <img className="w-4/5 m-auto"
            src="ART&CRAFT A.jpg"
            alt=""
          />
      </div>
      <div>
      <img 
           className="w-4/5 m-auto"
            src="ALL IN ONE WRITING BOOK HARD BOUND.jpg"
            alt=""
          />
      </div>
      <div>
      <img className="w-4/5 m-auto"
            src="AMAZING PICTURES C.jpg"
            alt=""
          />
      </div>
    </Slider>
    </div>
  );
}