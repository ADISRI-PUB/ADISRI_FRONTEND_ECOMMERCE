import React,{useEffect ,useState} from 'react'
import gsap from 'gsap'

function FilterTAb({Class,Subject,setSubject ,setClass,API ,setApi}) {
    useEffect(()=>{
        let temp1= document.querySelectorAll('.newclass')
       let temp2 =document.querySelectorAll('.newclass2')
     
        gsap.fromTo(temp1,{
               x:-1000,
               opacity:0,
               duration:0.3,
               stagger:0.2
  
        },{
          x:0,
          opacity:1,
          duration:0.3,
          stagger:0.2
        })
        gsap.fromTo(temp2,{
          x:-1000,
          duration:0.3,
          stagger:0.1
        },{
         x:0,
         duration:0.2,
         stagger:0.1 
        })
  
    },[])
 
    const handleChange = (ids) => {
      let newarr = [...Class]
      let newarr_subject =[...Subject]
      
      newarr.forEach((e) => {
       
        if (e.id == ids) {
            if (e.isChecked === false) {
              
              setApi(API += `&class=${e.name}`)  
              e.isChecked = true;
            } else {
               if (API.includes(`&class=${e.name}`)) {
                 let  temp2 = API.replace(`&class=${e.name}`,'') 
                 setApi(temp2)
                 e.isChecked = false;
               }
              
            }
           
        }
  
      });
      newarr_subject.forEach((e)=>{
        if (e.id == ids) {
         
            if (e.isChecked===false) {

              setApi(API+=`&subject=${e.name}`)
              e.isChecked=true
            }
            else{
              if (API.includes(`&subject=${e.name}`)) {
                let  temp = API.replace(`&subject=${e.name}`,'')
                e.isChecked=false
                setApi(temp)
              }
            }
          
        }
      })
      setClass(newarr);
      setSubject(newarr_subject)
      //  console.log(Class);
      // console.log(Subject);
      
      
    
    };
    // console.log(API);
    
    
  return (
    <>
     <div className='  sm:w-[100%] bg-gray-[#f5e4ba]  filter-container '>  
          <div className=" max-sm:bg-white  slide-bar leading-tight  min-h-screen max-h-screen   p-4 overflow-hidden relative max-sm:-translate-x-full  transition-all duration-400 " >
      
          <div className=" transition-all duration-1000 text-lg  border-2 border-gray-500 rounded-lg grid grid-col-2 logg relative cursor-pointer" >
            <div className='flex  relative logg' onClick={()=>{
              document.querySelector('.option-tab').classList.toggle('hidden')
              if (document.querySelector('#arrrrr').classList.contains('rotate-90')) {
                document.querySelector('#arrrrr').classList.replace('rotate-90','-rotate-90')
              }
              else{
                document.querySelector('#arrrrr').classList.replace('-rotate-90','rotate-90')
              }
              

          }}>
           <span className='max-sm:text-sm sm:p-4 max-sm:p-3'>By Class</span>
           <svg className=' transition-all duration-200 rotate-90  w-5   absolute right-3' xmlns="http://www.w3.org/2000/svg"  id='arrrrr' viewBox="0 -960 960 960"  fill="#808080"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
           </div>
           <div className='hidden option-tab p-5  '>
          {Class.map((element) => {
            return (
              <div  className="space-x-2 newclass" key={element.id}>
                <input
                  type="checkbox"
                  onChange={() => handleChange(element.id)}
                  name={`${element.name}`}
                  value={`${element.name}`}
                  id={`${element.id}`}
                />
                <label className="sm:text-[1vw] max-sm:text-sm" htmlFor={`${element.id}`}>{element.name}</label>
              </div>
            );
          })}
          </div>
          </div>
        
          <br />
      

         
          <div className=" transition-all duration-1000 text-lg  border-2 border-gray-500 rounded-lg grid grid-col-2 logg relative cursor-pointer" >
            <div className='flex  relative logg'onClick={()=>{
              document.querySelector('.option-tab2').classList.toggle('hidden')
              if (document.querySelector('#arrrrr2').classList.contains('rotate-90')) {
                document.querySelector('#arrrrr2').classList.replace('rotate-90','-rotate-90')
              }
              else{
                document.querySelector('#arrrrr2').classList.replace('-rotate-90','rotate-90')
              }
              

          }}>
           <span className=' max-sm:text-sm sm:p-4 max-sm:p-3'> By Subjects</span>
           <svg className=' transition-all duration-200 rotate-90 w-5   absolute right-3' xmlns="http://www.w3.org/2000/svg"  id='arrrrr2'  viewBox="0 -960 960 960"  fill="#808080"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
           </div>
           <div className='hidden option-tab2 p-5 '>
           {Subject.map((element) => {
            return (
              <div className="space-x-2 newclass2" key={element.id}>
                <input
                  type="checkbox"
                  onChange={() => handleChange(element.id)}
                  name={`${element.name}`}
                  value={`${element.name}`}
                  id={`${element.id}`}
                />
                <label className="text-[1vw] max-sm:text-sm" htmlFor={`${element.id}`}>{element.name}</label>
              </div>
            );
          })}
          </div>
          </div>
        </div>
       
          </div>
    </>
  )
}

export default FilterTAb