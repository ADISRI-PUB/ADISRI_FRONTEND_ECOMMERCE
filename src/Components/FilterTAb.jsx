import React,{useEffect ,useState} from 'react'
import gsap from 'gsap'

function FilterTAb({Class,Subject,setSubject ,setClass}) {
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
    let [selectedClass, setselectedClass] = useState('');
   let  [API ,setApi] =useState('')
   let temp=''
    const handleChange = (ids) => {
      let newarr = [...Class]
      let newarr_subject =[...Subject]
      
      newarr.forEach((e) => {
        if (e.id == ids) {
          if (e.isChecked === false) {
            setApi(API += `&class=${e.name}`)  
            e.isChecked = true;
          } else {
             let temp2 = API.replace(`&class=${e.name}`,' ') 
             setApi(temp2)
            e.isChecked = false;
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
             let temp = API.replace(`&subject=${e.name}`,'')
            setApi(temp)
            e.isChecked=false
          }
        }
      })
      setClass(newarr);
      setSubject(newarr_subject)
      //  console.log(Class);
      // console.log(Subject);
      
      
    
    };
    console.log(API);
    let count=0
    const  open =()=>{
      if (count==0) {
        document.querySelector('.slide-bar').classList.toggle('max-sm:-translate-x-full')
        document.querySelector('.buttons').innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>'
        count++
      }
      else{
        document.querySelector('.slide-bar').classList.toggle('max-sm:-translate-x-full')
          document.querySelector('.buttons').innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>'
          count=0
      }
   }
  return (
    <>
     <div className=' '>  
     <button className='bg-slate-200 p-2 rounded-md buttons transition-all duration-300 sm:hidden' onClick={open}>  
     <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
     </button>
          <div className="selection-section slide-bar   p-4 overflow-hidden relative max-sm:-translate-x-full  transition-all duration-400 bg-purple-100" >
      
          <p className="text-lg ">Class</p>

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
                <label className="sm:text-md max-sm:text-xs" htmlFor={`${element.id}`}>{element.name}</label>
              </div>
            );
          })}
          <br />
          <p className="text-lg">Subjects</p>

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
                <label className="text-md max-sm:text-xs" htmlFor={`${element.id}`}>{element.name}</label>
              </div>
            );
          })}
        </div>
       
          </div>
    </>
  )
}

export default FilterTAb