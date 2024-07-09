import React, { useEffect, useRef, useState } from "react";
import "../Css/IPrePrimary.css";
import gsap from "gsap";
import FilterTAb from "../Components/FilterTAb";
import ProdcutsCard from "../Components/ProdcutsCard";
export default function IPrePrimary() {
  const [Class, setClass] = useState([
    { id: 1, name: "Play", isChecked: false },
    { id: 2, name: "Nursery", isChecked: false },
    { id: 3, name: "Pre-Primary", isChecked: false },
    { id: 4, name: "Primary", isChecked: false },
  ]);
  const [Subject, setSubject] = useState([
    { id: 5, name: "All", isChecked: false },
    { id: 6, name: "English", isChecked: false },
    { id: 7, name: "Hindi", isChecked: false },
    { id: 8, name: "Math", isChecked: false },
    { id: 9, name: "Colouring", isChecked: false },
    { id: 10, name: "Picture", isChecked: false },
    { id: 11, name: "Poem", isChecked: false },
    { id: 12, name: "Evs", isChecked: false },
    { id: 13, name: "Counting", isChecked: false },
  ]);
 
  return (
    <>
      <div className="sm:flex  ">
<div className="sm:w-1/5 z-40 max-sm:absolute ">
        <FilterTAb Class={Class} setClass={setClass} setSubject={setSubject} Subject={Subject}/>
        </div>    
        <div className=" w-full flex flex-wrap bg-purple-200 ">
      <ProdcutsCard Price={120} title={'AMAZING PICTURES B'} source={'AMAZING PICTURES B.jpg'} />
      <ProdcutsCard Price={130} title={'KIDS ACTIVITY C'} source={'KIDS ACTIVITY C.jpg'} />
      <ProdcutsCard Price={100} title={'KIDS ACTIVITY B'} source={'KIDS ACTIVITY B.jpg'} />
      <ProdcutsCard Price={160} title={'ALL IN ONE WRITING BOOK HARD BOUND'} source={'ALL IN ONE WRITING BOOK HARD BOUND.jpg'}/>
      <ProdcutsCard Price={120} title={'AMAZING PICTURES B'} source={'AMAZING PICTURES B.jpg'} />
      <ProdcutsCard Price={130} title={'KIDS ACTIVITY C'} source={'KIDS ACTIVITY C.jpg'} />
      </div>
      </div>
    </>
  );
}
