import React, { useEffect, useRef, useState } from "react";
import "../Css/IPrePrimary.css";
import { useDispatch, useSelector } from 'react-redux';
import gsap from "gsap";
import FilterTAb from "../Components/FilterTAb";
import ProdcutsCard from "../Components/ProdcutsCard";
import axios from "axios";
import { listProducts } from '../actions/ProductsActions'


function IPrePrimary() {
  const [filterbook, setFilterbook] =useState([])
  const dispatch = useDispatch();
  const productsList = useSelector(state => state.productList);
  const { error, loading, products = [] } = productsList;
  let [API ,setApi] =useState('')

  const [Class, setClass] = useState([
    { id: 1, name: "Play", isChecked: false },
    { id: 2, name: "Nursery", isChecked: false },
    { id: 3, name: "Pre - Primer", isChecked: false },
    { id: 4, name: "Primer", isChecked: false },
  ]);
  const [Subject, setSubject] = useState([
    { id: 5, name: "All", isChecked: false },
    { id: 6, name: "English", isChecked: false },
    { id: 7, name: "Hindi", isChecked: false },
    { id: 8, name: "Math", isChecked: false },
    { id: 9, name: "Coloring", isChecked: false },
    { id: 10, name: "Picture", isChecked: false },
    { id: 11, name: "Poem", isChecked: false },
    { id: 12, name: "Evs", isChecked: false },
    { id: 13, name: "Counting", isChecked: false },
  ]);

let data
  useEffect(() => {
    
    dispatch(listProducts());
    // fetching the data for filter option /////////////////////////////////////////////////////////
    const fetchData =async()=>{

      try {
        data  = await axios(`http://localhost:8000/products/product/?${API}`)
        console.log(data.data);
        setFilterbook(data.data)

      } catch (error) {
        console.log('cant get the data',error);
      }

    }
    fetchData()
  }, [dispatch,API]);

  return (
    <>
    <div className="relative primary-sections">
      <div>
    
      </div>
      <div className="sm:flex primary-sections">
        <div className="sm:w-1/6 z-40  primarysection1 max-sm:w-full max-sm:h-full">
          <FilterTAb
            Class={Class}
            setClass={setClass}
            setSubject={setSubject}
            Subject={Subject}
            API={API}
            setApi={setApi}
            />
            </div>
        <div className="sm:w-5/6 max-sm:w-full  card-container ">
          {
            API===''?
            products.map(product=>{
               return(
               <div key={product.Product_Id} className="p-5 ">
               <ProdcutsCard product={product} id={1} />
               <br />
               </div>
               
               )
             })
            : filterbook.map(product=>{
              return(
              <div key={product.Product_Id} className="p-5 ">
              <ProdcutsCard product={product} id={1} />
              <br />
              </div>
              
              )
            })
          } 

         
        </div>

      </div>
      <div className="sm:w-5/6 max-sm:w-full  card-container ">
          {
           
          } 

         
        </div>
      </div>
    </>
  );
}

export default IPrePrimary;

