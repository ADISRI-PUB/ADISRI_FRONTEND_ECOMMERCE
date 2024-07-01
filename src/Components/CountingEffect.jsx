import React, { useState, useEffect } from 'react';

const CountingEffect = ({ finalCount,duration,name}) => {
  let [count, setCount] = useState(0);
 let newdurations


  useEffect(() => {
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
  },[]);
  return(
  <>
    <p className='counting-text font-medium'>{Math.floor(count)}+</p>
  </>
  ) 
};

export default CountingEffect;