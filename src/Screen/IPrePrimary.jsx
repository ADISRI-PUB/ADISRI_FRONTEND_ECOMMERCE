import React, { useEffect, useRef, useState } from "react";
import "../Css/IPrePrimary.css";
import { useDispatch, useSelector } from 'react-redux';
import gsap from "gsap";
import FilterTAb from "../Components/FilterTAb";
import ProdcutsCard from "../Components/ProdcutsCard";

import { listProducts } from '../actions/ProductsActions'


function IPrePrimary() {
  const dispatch = useDispatch();
  const productsList = useSelector(state => state.productList);
  const { error, loading, products = [] } = productsList;


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


  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
    <div className="relative">
      <div>
    
      </div>
      <div className="sm:flex primary-sections">
        <div className="sm:w-1/6 z-40 max-sm:absolute primarysection1 max-sm:-translate-x-full">
          <FilterTAb
            Class={Class}
            setClass={setClass}
            setSubject={setSubject}
            Subject={Subject}
            />
            </div>
        <div className="sm:w-5/6 max-sm:11/12 gap-10  primarysection22 sm:grid sm:grid-cols-4 ">
          {
            products.map(product=>{
              return(
              <div key={product.Product_Id} className="p-5 w-full">
              <ProdcutsCard product={product} />
              <br />
              </div>
              
              )
            })
          } 
        </div>

      </div>
      </div>
    </>
  );
}

export default IPrePrimary;

