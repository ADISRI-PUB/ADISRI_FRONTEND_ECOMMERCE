
// import FilterTAb from '../Components/FilterTAb';
// import React, { useEffect, useRef, useState } from "react";
// import "../Css/IPrePrimary.css";
// import "../Css/onetoeight.css"
// import { useDispatch, useSelector } from 'react-redux';
// import ProdcutsCard from "../Components/ProdcutsCard";
// import axios from "axios";
// import { listProducts } from '../actions/ProductsActions'
// function Ionetoeight() {
//   const [filterbook, setFilterbook] =useState([])
//   const dispatch = useDispatch();
//   const productsList = useSelector(state => state.productList);
//   const { error, loading, products = [] } = productsList;
//   let [API ,setApi] =useState('')
//   useEffect(() => {
//     dispatch(listProducts());
//     // fetching the data for filter option /////////////////////////////////////////////////////////
//     const fetchData =async()=>{

//       try {
//         data  = await axios(`http://localhost:8000/products/product/?${API}`)
//         console.log(data.data);
//         setFilterbook(data.data)

//       } catch (error) {
//         console.log('cant get the data',error);
//       }

//     }
//     fetchData()
//   }, [dispatch,API]);
//   const [Class, setClass] = useState([
//     { id: 1, name: "1", isChecked: false },
//     { id: 2, name: "2", isChecked: false },
//     { id: 3, name: "3", isChecked: false },
//     { id: 4, name: "4", isChecked: false },
//     { id: 5, name: "5", isChecked: false },
//     { id: 6, name: "6", isChecked: false },
//     { id: 7, name: "7", isChecked: false },
//     { id: 8, name: "8", isChecked: false },
//   ]);
//   const [Subject, setSubject] = useState([
//     { id: 9, name: "All", isChecked: false },
//     { id: 10, name: "Computer", isChecked: false },
//     { id: 11, name: "Conversation", isChecked: false },
//     { id: 12, name: "Math", isChecked: false },
//     { id: 13, name: "Drawing", isChecked: false },
//     { id: 14, name: "English", isChecked: false },
//     { id: 15, name: "English Grammer", isChecked: false },
//     { id: 16, name: "General Knowledge", isChecked: false },
//     { id: 17, name: "Geography And History", isChecked: false },
//     { id: 18, name: "Hindi", isChecked: false },
//     { id: 19, name: "Hindi Grammer", isChecked: false },
//     { id: 20, name: "Moral Value", isChecked: false },
//     { id: 21, name: "Sanskrit", isChecked: false },
//     { id: 22, name: "Science", isChecked: false },
//     { id: 23, name: "Social Science", isChecked: false },
//     { id: 24, name: "Social Studies", isChecked: false },
//     { id: 25, name: "Urdu", isChecked: false },
//   ]);

 
//   return (
//     <>
<br />
//         <div className="relative onetoeight-sections">
//       <div>
    
//       </div>
//       <div className="sm:flex onetoeight-sections">
//         <div className="sm:w-1/6 z-40  onetoeightsectionfilter max-sm:w-full max-sm:h-full">
//           <FilterTAb
//             Class={Class}
//             setClass={setClass}
//             setSubject={setSubject}
//             Subject={Subject}
//             API={API}
//             setApi={setApi}
//             />
//             </div>
//         <div className="sm:w-5/6 max-sm:w-full  card-container ">
//           {
//             API===''?
//             products.map(product=>{
//                return(
//                <div key={product.Product_Id} className="p-5  onetoeightproductcard ">
//                <ProdcutsCard product={product} id={0} />
//                <br />
//                </div>
               
//                )
//              })
//             : filterbook.map(product=>{
//               return(
//               <div key={product.Product_Id} className="p-5 ">
//               <ProdcutsCard product={product} id={0} />
//               <br />
//               </div>
              
//               )
//             })
//           } 

         
//         </div>

//       </div>
     
//       </div>
//     </>
//   )
// }

// export default Ionetoeight

import React, { useEffect } from 'react'
import gsap from 'gsap'
function Ionetoeight() {
  useEffect(()=>{
    let h= window.innerHeight
    gsap.fromTo('#soonimage',{
         y:-h,
         
    },{
        y:0,
        ease:"bounce.out"
    })
  })
  return (
     <>
     
       <div className='w-screen min-h-screen relative -z-10 bg-blue-100'>
     <img id='soonimage' className='w-1/2 m-auto ' src="pngegg (17)16.png" alt="cooming soon"  />


       </div>
     </>
  )
}

export default Ionetoeight