import React from "react";
import Slider from "react-slick";

export default function Crousal({slideshow}) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1600,
     cssEase: "linear",
     appendDots: dots => (
        <div
          style={{
            backgroundColor: "#F4EEFF",
            padding: "1vw"
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
  };
  return (
    <Slider {...settings}>
      <div>
      <img
            src="https://www.bookswagon.com/bannerimages/84_inr.jpg?v=5.2"
            alt=""
          />
      </div>
      <div>
      <img
            src="https://www.bookswagon.com/bannerimages/85_inr.jpg?v=5.2"
            alt=""
          />
      </div>
      <div>
      <img
            src="https://www.bookswagon.com/bannerimages/79_inr.jpg?v=5.2"
            alt=""
          />
      </div>
      <div>
      <img
            src="https://www.bookswagon.com/bannerimages/83_inr.jpg?v=5.3"
            alt=""
          />
      </div>
      <div>
      <img
            src="https://www.bookswagon.com/bannerimages/84_inr.jpg?v=5.3"
            alt=""
          />
      </div>
      <div>
      <img
            src="https://www.bookswagon.com/bannerimages/81_inr.jpg?v=5.3"
            alt=""
          />
      </div>
    </Slider>
  );
}