import React, { useState, useEffect, useRef } from 'react';
import { useInView } from "react-intersection-observer";
const CountingEffect = ({ finalCount,duration,name}) => {
    // target  =useRef(null)
  let [count, setCount] = useState(0);
 let newdurations
 const [timeoutStarted, setTimeoutStarted] = useState(false);
  const { target, inView } = useInView({
   
    threshold: 0,
  });


  useEffect(() => {
    // let temp = target.current
    if (inView && !timeoutStarted) {
      const timeoutId = setTimeout(() => {
        console.log('Timeout function executed after component entered viewport');
      }, 1000);

      setTimeoutStarted(true); 

      return () => clearTimeout(timeoutId); 
    }
   function newduration(){
    if (finalCount==5000 && count<5000) {
      setCount(count+=1)
    }
    else if (finalCount==10000 && count<10000) {
      setCount(count+=1)
    }
    else if( count<25000){
        setCount(count+=1)
        if(count>=finalCount){
          clearInterval(newdurations)
        }
    }
  if(count>=finalCount){
      clearInterval(newdurations)
    }
   }
   function oldduration (){
    if (finalCount==5000 && count<4995) {
      setCount(count+=5)
    }
    else if (finalCount==10000 && count<9990) {
      setCount(count+=10)
    }
    else if( finalCount==20000 && count<20000){
        setCount(count+=10)
    }

    if(count>=finalCount-10){
      clearInterval(settime)
     newdurations= setInterval(newduration,100)
    }
   }
   let settime= setInterval(oldduration,duration)  

      return ()=>{
        clearInterval(settime)
      }
  },[inView,timeoutStarted]);
  return(
  <>
    <p ref={target} className='counting-text font-medium'>{Math.floor(count)}+</p>
  </>
  ) 
};

export default CountingEffect;