import React from "react";
import Slider from "react-slick";

function SamplePrevArrow(props) {
  const {className ,onClick}=props
  return(
    <>
    <div  onClick={onClick} className={className} id="leftarrow"  >
     <span className="">
     <svg className="hover:opacity-100 opacity-45 hover:transition-all :hover:duration-200 transition-all duration-200" style={{transform:'rotate(90deg)'}}  xmlns="http://www.w3.org/2000/svg" width="5vw" viewBox="0 -960 960 960"  fill="#FFFFFF"><path d="m480-340 180-180-57-56-123 123-123-123-57 56 180 180Zm0 260q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
     </span>
     </div>
    </>
  )
  }
function SampleNextArrow(props) {
  const {className,onClick}=props
  return(
    <>
    <div onClick={onClick} className={className}  style={{width:'10vw',height:"100%",zIndex:"10",position:"absolute",backgroundColor:"rgb(255,255,255,0.2)",backdropFilter:"blur(2px)",display:"flex",justifyContent:"center",alignItems:"center"}} >
     <span className="">
     <svg className="opacity-45 hover:opacity-100 transition-all duration-200 hover:transition-all hover:duration-200" style={{transform:"rotate(-90deg)"}} width="5vw"   xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"  fill="#FFFFFF"><path d="m480-340 180-180-57-56-123 123-123-123-57 56 180 180Zm0 260q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
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
    autoplaySpeed: 1600,
     cssEase: "linear",
    nextArrow:<SampleNextArrow/>,
    prevArrow:<SamplePrevArrow/>,
    //  appendDots: dots => (
    //     <div
    //       style={{
    //         padding: "1vw",
    //         height:"6" 
    //       }}
    //     >
    //       <ul style={{marginBottom:'0px' }}> {dots} </ul>
        
    //     </div>
    //   ),
  };
  return (
    <div className="overflow-hidden  ">
    <Slider {...settings} className=" " >
      <div className="w-full">
      <img 
      className=" image-content "
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
            src="https://www.bookswagon.com/bannerimages/81_inr.jpg?v=5.3"
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
            src="https://www.bookswagon.com/bannerimages/81_inr.jpg?v=5.3"
            alt=""
          />
      </div>
    </Slider>
    </div>
  );
}