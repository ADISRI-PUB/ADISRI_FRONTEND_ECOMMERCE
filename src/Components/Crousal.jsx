import React, { useEffect, useState } from "react";
import gsap from "gsap";

export default function Crousal({ leftimage, rightimage, middleimage }) {
 let imagearray = [
      "AMAZING PICTURES B.jpg",
      "AMAZING PICTURES  A.jpg",
    "AMAZING PICTURES C.jpg",
    "ART&CRAFT A.jpg",
    "ART&CRAFT B.jpg",
    "ART&CRAFT C.jpg",
    "KIDS ACTIVITY A.jpg",
    "KIDS ACTIVITY B.jpg",
    "KIDS ACTIVITY C.jpg",
  ];
  let [imagemiddle, setimagemiddle] = useState("AMAZING PICTURES  A.jpg");
  let [imageright, setimageright] = useState("AMAZING PICTURES C.jpg");
  let [imageleft, setimageleft] = useState("AMAZING PICTURES B.jpg");
  let [l_image_count,set_l_Count] = useState(0);
  let [m_image_count,set_m_Count] = useState(1);
  let [r_image_count,set_r_count] = useState(2);
  let leftbutton,rightbutton
  leftbutton = () => {
    console.log(l_image_count,m_image_count,r_image_count);
if (l_image_count == 0) {
  
} else {
    gsap.fromTo('.image3',{
        scale:0.5

    },{
        duration:0.5,
        scale:1
    })
  set_l_Count(--l_image_count)
  set_m_Count(--m_image_count)
  set_r_count(--r_image_count)
  
  setimageleft(imagearray[l_image_count])
  setimagemiddle(imagearray[m_image_count])
  setimageright(imagearray[r_image_count])
}
};
rightbutton = () => {
    
    console.log(l_image_count,m_image_count,r_image_count);
    if (r_image_count==imagearray.length-1) {
        
    }
    else{
        gsap.fromTo('.image3',{
            scale:0.5
    
        },{
            duration:0.5,
            scale:1
        })
        set_l_Count(++l_image_count)
        set_m_Count(++m_image_count)
        set_r_count(++r_image_count)
        setimageleft(imagearray[l_image_count])
        setimagemiddle(imagearray[m_image_count])
        setimageright(imagearray[r_image_count])
        
    }
};
useEffect(()=>{
 
 

})
  

return (
    <>
      <div className="w-full h-full crousal relative">
    
      <div className="imagecontainer t overflow-hidden  m-auto grid-cols-3 relative grid-rows-1 justify-center  ">
      <div onClick={leftbutton} className=" absolute leftbutton z-10 ">
          <svg
            className="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            fill="#67f1ed"
            width="4vw"
            height="50"
            viewBox="0 0 24 24"
          >
            <g>
              <path d="M12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,12,20Z" />
              <polygon points="12 12.586 8.707 9.293 7.293 10.707 12 15.414 16.707 10.707 15.293 9.293 12 12.586" />
            </g>
          </svg>
        </div>
        <div onClick={rightbutton} className=" absolute rightbutton z-10 ">
          <svg
            className="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            fill="#67f1ed"
            width="4vw"
            height="50"
            viewBox="0 0 24 24"
          >
            <g>
              <path d="M12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,12,20Z" />
              <polygon points="12 12.586 8.707 9.293 7.293 10.707 12 15.414 16.707 10.707 15.293 9.293 12 12.586" />
            </g>
          </svg>
        </div>
        <div className="box1 qwr   ">
          <img
            className="float-end image1 border-2 border-white   image1 hover:transition-all hover:duration-300 hover:shadow-white "
            src={imageleft}
            alt="homeimage"
          />
        </div>
        <div className="box1  qwr ">
          <img
            className="m-auto image3 border-2 border-white   hover:transition-all hover:duration-300 hover:shadow-white "
            src={imagemiddle}
            alt="homeimage"
          />
        </div>
        <div className="box1  qwr   ">
          <img
            className="float-start border-2 border-white  hover:transition-all hover:duration-300 hover:shadow-white image2  "
            src={imageright}
            alt="homeimage"
          />
        </div>
      </div>
      </div>
    </>
  );
}
