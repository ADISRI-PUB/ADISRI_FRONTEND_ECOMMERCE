import React, { useState ,useRef} from 'react'
import Slider from "react-slick";
function SamplePrevArrow(props) {
    const {className ,onClick,style}=props

    return(
        <>
        <div onClick={onClick}   style={{...style,left: '-50%'}} className={`${className}  z-30 `}  >
         <span className="dropshadow-2xl shadow-black">
         <svg className="opacity-100  hover:opacity-100 transition-all duration-200 hover:transition-all hover:duration-200 sm:w-12 max-sm:w-8" style={{transform:"rotate(0deg)"}}  xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"  fill="#808080"><path d="M440-240 200-480l240-240 56 56-183 184 183 184-56 56Zm264 0L464-480l240-240 56 56-183 184 183 184-56 56Z"/></svg>
         </span>
         </div>
        </>
      )
    }
  function SampleNextArrow(props) {
    const {className,onClick,style}=props
    return(
      <>
      <div onClick={onClick}   style={{...style,  right: '-40%', }} className={`${className} z-30` }  >
       <span className="dropshadow-2xl shadow-black">
       <svg className="opacity-100  hover:opacity-100 transition-all duration-200 hover:transition-all hover:duration-200 sm:w-12 max-sm:w-8" style={{transform:"rotate(180deg)"}}  xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"  fill="#808080"><path d="M440-240 200-480l240-240 56 56-183 184 183 184-56 56Zm264 0L464-480l240-240 56 56-183 184 183 184-56 56Z"/></svg>
       </span>
       </div>
      </>
    )
    }

   
function ViewPages({Images,pagevisiblity}) {
    const sliderRef = useRef(null)
     const [preview,setPreview] =useState(Images[0])

    const handleimage=(e)=>{
        const img = e.target
    //    const preview= document.querySelector('.preview')
    //   console.log(img.getAttribute('src'));
    setPreview(img.getAttribute('src'))
 
    sliderRef.current.slickGoTo(0);
 

    //    console.log(preview);
       
     }

    
  var settings = {
    dots:false,
    arrow:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>,
   
      
   

   
     
  };
  return (
    <div className='relative w-[61%] max-sm:w-full m-auto  text-black bg-white  sm:top-[5%]'>
        <svg onClick={()=>{pagevisiblity(false)}} className='absolute right-2 top-2  w-[40px] max-sm:w-[20px] p-1 cursor-pointer rounded-full transition-all duration-300 hover:bg-[#FF5F5F]' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"  fill="#000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
        <div className=''>
        <div className=' '>
  
         <Slider  ref={sliderRef} {...settings} className=" w-[300px] max-sm:w-1/2  m-auto" >
     
           {
     // Iterate over the images array and map each image to a <img> element
             Images.map((image, index) => (
            
                
              index ===0? <img key={index} src={preview?preview:""} alt="slider-img" className="w-[100%] object-cover  py-10  rounded-xl " />:<img key={index} src={image} alt="slider-img" className="w-[100%] object-cover bg-white py-10  rounded-xl preview" />
                 
            
                  
             ))
     
           }

   
    </Slider>
  
    </div>
    <div className='flex   gap-5 max-sm:gap-3 gap-y-14 w-4/5 sm:justify-center max-sm:w-4/5  m-auto max-sm:justify-center flex-wrap py-10 '>
    {
        Images.map((image,index) =>{
            return(
                <div
                key={index}
           
                className="sm:w-[70px] h-16 max-sm:w-10 max-sm:h-14 flex items-center  justify-center rounded-lg     cursor-pointer bg-white  "
                >
              <img
                id="Dynamichange"
                onClick={handleimage}
                src={image}
                className='border-[2px] '
                alt="Product2"
                />

            </div>
            )
        })
    }
    </div>
      </div>
      </div>

  )
}

export default ViewPages