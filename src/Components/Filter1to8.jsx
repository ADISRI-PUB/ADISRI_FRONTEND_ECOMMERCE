import React,{useEffect ,useState} from 'react'
import gsap from 'gsap'
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Filter1to8({Class,Subject,setSubject ,setClass,API ,setApi}) {
  const ProductonetoeightFilter =useSelector((state)=>state.ProductonetoeightFilter)
  const {filterOnetoeight,api} = ProductonetoeightFilter
  const [PrevClass,setPrevClass] = useState(Class)
  const [PrevSubject,setPrevSubject] = useState(Subject)
  useEffect(()=>{
  
    if (filterOnetoeight.length!=0 && api!='') {
        PrevClass.filter((e)=>{
          if (api.includes(e.name)) {
            e.isChecked
            =true
          }
          return e
        })
          PrevSubject.filter((e)=>{
            if (api.includes(e.name)) {
              e.isChecked=true
            }
           return e
          })
      }
  },[])
    useEffect(()=>{
      //   let temp1= document.querySelectorAll('.newclass')
      //  let temp2 =document.querySelectorAll('.newclass2')
     
        // gsap.fromTo(temp1,{
        //        x:-1000,
        //        opacity:0,
        //        duration:0.3,
        //        stagger:0.2
  
        // },{
        //   x:0,
        //   opacity:1,
        //   duration:0.3,
        //   stagger:0.2
        // })
        // gsap.fromTo(temp2,{
        //   x:-1000,
        //   duration:0.3,
        //   stagger:0.1
        // },{
        //  x:0,
        //  duration:0.2,
        //  stagger:0.1 
        // })
  
    },[])
 
    const handleChange = (ids) => {
      let newarr =Class
      
      let newarr_subject =Subject

   
      newarr.filter((e) => {
       
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
        return e
      });
      newarr_subject.filter((e)=>{
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
        return e
      })
      setPrevClass(newarr);
      setPrevSubject(newarr_subject)

      
      //  console.log(Class);
      // console.log(Subject);
      
      
    
    };
    // console.log(API);
    window.addEventListener('resize',()=>{
          let svg =document.querySelectorAll('#drop-down-icon')
          for (let index = 0; index <svg.length; index++) {
            if (window.innerWidth<640) {
               svg[index].setAttribute('fill',"#000")
             
              
            }
            
          }
        
    })
    
  return (
    <>
     <div className='  sm:w-[100%] max-h-max   '>  
          <div className=" max-sm:bg-white max-sm:text-black  slide-bar leading-tight  min-h-screen     overflow-hidden relative max-sm:-translate-x-full   transition-all duration-400 " >
      
          <div className=" transition-all duration-1000 text-lg   rounded-lg grid grid-col-2 logg relative " >
            <div className='flex  relative logg' >
           <span className='max-sm:text-sm max-sm:p-3 font-semibold p-4'>By Class</span>
          
           </div>
           <div className=' option-tab p-5  '>
          {PrevClass.map((element) => {
            return (
              <div  className="space-x-2 newclass" key={element.id}>
                <input
                  type="checkbox"
                  className='cursor-pointer '
                   checked={element.isChecked}
                  onChange={() => handleChange(element.id)}
                  name={`${element.name}`}
                  value={`${element.name}`}
                  id={`${element.id}`}
                />
                <label  className="sm:text-[1vw]  max-sm:text-sm " htmlFor={`${element.id}`}>{element.name}</label>
              </div>
            );
          })}
          </div>
          </div>
        
          <br />
      

         
          <div className=" transition-all duration-1000 text-lg  rounded-lg grid grid-col-2 logg relative " >
            <div className='flex  relative logg'>
           <span className=' max-sm:text-sm  max-sm:p-3 font-semibold p-4'> By Subjects</span>
           </div>
           <div className=' p-5 '>
           {PrevSubject.map((element) => {
            return (
              <div className="space-x-2 newclass2" key={element.id}>
                <input
                  type="checkbox"
                  className='cursor-pointer'
                  checked={element.isChecked}
                  onChange={() => handleChange(element.id)}
                  name={`${element.name}`}
                  value={`${element.name}`}
                  id={`${element.id}`}
                />
                <label  className="text-[1vw] max-sm:text-sm " htmlFor={`${element.id}`}>{element.name}</label>
              </div>
            );
          })}
          </div>
          </div>
       <div className='hide-visible text-[1rem]'>
           <div className=''> 
           <Accordion>
            <br />
           <AccordionItem
        header={({ state }) => (
          <div className="accordion-header flex ">
            <span className="px-3 ml-3 text-[0.8em]">Books & Copy</span>
            <span className={`arrow ${state.isExpanded ? 'expanded' : 'notexpended'} `}><svg id='drop-down-icon'  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-360 280-560h400L480-360Z"/></svg>
            </span>
          </div>
        )}
      >
        <div className=''>
          <Link className=' relative ml-10 border-b-[1px] block text-[0.8em]'  to='#'>Plain Copies</Link>
        </div>
      </AccordionItem>
        <br />
           <AccordionItem
        header={({ state }) => (
          <div className="accordion-header flex ">  <span className="px-3 ml-3 text-[0.8em]">Staionary
</span>
            <span className={`arrow ${state.isExpanded ? 'expanded' : 'notexpended'} `}><svg id='drop-down-icon'  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-360 280-560h400L480-360Z"/></svg>
            </span>
          </div>
        )}
      >
        <div>
          <Link className=' relative ml-10 block border-b-[1px] text-[0.8em]'  to='#'>School Diary</Link>
        </div>
      </AccordionItem>
      <br />
           <AccordionItem
        header={({ state }) => (
          <div className="accordion-header flex ">
            <span className="px-3 ml-3 text-[0.8em]">Art & Craft</span>
            <span className={`arrow ${state.isExpanded ? 'expanded' : 'notexpended'} `}><svg id='drop-down-icon'  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-360 280-560h400L480-360Z"/></svg>
            </span>
          </div>
        )}
      >
        <div>
          <Link className=' relative ml-10 block border-b-[1px] text-[0.8em]'  to='#'>Carnival Kitset</Link>
        </div>
      </AccordionItem>
      <br />
           <AccordionItem
        header={({ state }) => (
          <div className="accordion-header flex ">
            <span className="px-3 ml-3 text-[0.8em]">Toys & Educational Material</span>
            <span className={`arrow ${state.isExpanded ? 'expanded' : 'notexpended'} `}><svg id='drop-down-icon'  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill='#FFFFFF'><path d="M480-360 280-560h400L480-360Z"/></svg>
            </span>
          </div>
        )}
      >
        <div>
          <Link className=' relative ml-10 border-b-[1px] block text-[0.8em]'  to='#'>Toys</Link>
        </div>
      </AccordionItem>
           </Accordion>
           </div>
       </div>
        </div>
          </div>
    </>
  )
}

export default Filter1to8