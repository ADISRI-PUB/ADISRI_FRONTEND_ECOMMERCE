import React, { useEffect ,useCallback,useRef} from 'react'
import Slider from 'react-slick';
import '../Css/PopUPSections.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
function Journey() {
    const sliderRef = useRef(null);

    const scroll = useCallback(
        (y) => {
          if (sliderRef.current) {
            if (y > 0) {
              sliderRef.current.slickNext();
            } else {
              sliderRef.current.slickPrev();
            }
          }
        },
        [sliderRef]
      );
        var settings = {
          infinite: false,
          speed: 1200,
         autoplay: true,
          centerPadding: "60px",
          slidesToShow: 1,
          pauseOnHover: false,
          slidesToScroll: 1,
        };
        
        useEffect(()=>{
            gsap.to('_2',{
                scale:3,
            })
            gsap.fromTo('.first_text',{
                opacity:0,
                y:1000,
                delay:0.2,
                ease:"circ.out",
                duration:1,
            },{
                duration:2,
                y:0,
                ease:"circ.out",
                opacity:1
            })
            let sum =0
            const handleWheel = (e) => {
                scroll(e.deltaY);
                sum+=e.deltaY
                // console.log(sum);
              };
             
              window.addEventListener('wheel', handleWheel);
          
        },[scroll])
  return (
    <div className='pin-container gap-7 h-1/2 min-h-screen'>
     <Slider className='sll2ider ' {...settings} ref={sliderRef}>
        <div className=' max-sm:h-96 sm:h-screen  bg-black/80 flex logg justify-center  '>
            <div className='logg flex w-full justify-center h-full'>
                <p className='overflow-hidden border-b-2 border-white'>
                  <span className='first_text block text-white  '>The Adisri Remarkable Journey </span>
                </p>
            </div>
        </div>
  <div className='bg-black/80 w-full flex sm:h-screen text-white text-center  '>

   </div>
      <div className='_2'>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
   
    </div>
  )
}

export default Journey