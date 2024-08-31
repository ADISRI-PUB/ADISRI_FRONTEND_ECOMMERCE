import React from "react";
import Slider from "react-slick";

function SamplePrevArrow(props) {
  const {className ,onClick}=props
  return(
    <>
    <div  onClick={onClick} className={className} id="leftarrow"  >
     <span className="">
     <svg className="hover:opacity-100 dropshadow-2xl shadow-black hover:transition-all :hover:duration-200 transition-all duration-200" style={{transform:'rotate(90deg)'}}  xmlns="http://www.w3.org/2000/svg" width="5vw" viewBox="0 -960 960 960"  fill="#FFFFFF"><path d="m480-340 180-180-57-56-123 123-123-123-57 56 180 180Zm0 260q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
     </span>
     </div>
    </>
  )
  }
function SampleNextArrow(props) {
  const {className,onClick}=props
  return(
    <>
    <div onClick={onClick} className={className}  id="rightarrow" >
     <span className="dropshadow-2xl shadow-black">
     <svg className="opacity-100  hover:opacity-100 transition-all duration-200 hover:transition-all hover:duration-200" style={{transform:"rotate(-90deg)"}} width="5vw"   xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"  fill="#FFFFFF"><path d="m480-340 180-180-57-56-123 123-123-123-57 56 180 180Zm0 260q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
     </span>
     </div>
    </>
  )
  }

  
export default function Crousal({slideshow}) {

  var settings = {
    dots:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
     cssEase: "linear",
    nextArrow:<SampleNextArrow/>,
    prevArrow:<SamplePrevArrow/>,
     
  };
  return (
    <div className="overflow-hidden  ">
    <Slider {...settings} className=" " >
      <div className="w-full">
      <img 
      className="h-full w-full "
            src="PLAYGROUP BANNER.jpg"
            alt=""
          />
      </div>
      <div>
      <img
       className="h-full w-full"
            src="UKG BANNER.jpg"
            alt=""
          />
      </div>
      <div>
      <img
        className="h-full w-full"
            src="NURSERY BANNER.jpg"
            alt=""
          />
      </div>
      <div>
      <img
       className="h-full w-full"
            src="banner 1-5 (I).jpg"
            alt=""
          />
      </div>
      <div>
      <img
       className="h-full w-full"
            src="LKG BANNER.jpg"
            alt=""
          />
      </div>
      <div>
      <img
       className="h-full w-full"
            src="banner 1-5 (II).jpg"
            alt=""
          />
      </div>
    </Slider>
    </div>
  );
}