import React, { useEffect, useRef, useState } from "react";
import "../Css/IPrePrimary.css";
import { useDispatch, useSelector } from "react-redux";
import gsap from "gsap";
import FilterTAb from "../Components/FilterTAb";
import ProdcutsCard from "../Components/ProdcutsCard";
import axios from "axios";
import { listProducts } from "../actions/ProductsActions";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
const BASE_URL = import.meta.env.VITE_URL 
function IPrePrimary() {
   
  
  const [filterbook, setFilterbook] =useState([])

  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.productList);
  const { error, loading, products = [] } = productsList;
// console.log(products);
  let [API, setApi] = useState("");
  let [loader, setLoader] = useState(true);
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

  let data;
  useEffect(() => {
    let flag = products;
    if (flag.length == 0) {
      dispatch(listProducts());
      setTimeout(() => {
        
        setLoader(false);
      }, 500);
    }

    // fetching the data for filter option /////////////////////////////////////////////////////////
   
    const fetchData = async () => {
      try {
         
        data = await axios.get(`${BASE_URL}/data/products/product/?${API}`);
        // console.log(data.data);
        setFilterbook(data.data);
      } catch (error) {
        setLoader(false);
        console.log("cant get the data", error);
      }
      finally{
        setTimeout(() => {
          
          setLoader(false)
        }, 700);
      }
    };
    fetchData();
  }, [dispatch, API]);

  return (
    <>
 
      <div className="relative primary-sections min-h-screen">
        <div></div>
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
          <div className="sm:w-5/6 sm:p-10     max-sm:w-full  card-container ">
            {API === "" ? (
              loader ? (
                <div className=" grid grid-cols-1 sm:col-span-4 ">
                <div className="flex justify-center items-center">
                  <div
                    className="inline-block h-8 w-8 sm:h-20 sm:w-20 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] "
                    role="status"
                  >
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                      Loading...
                    </span>
                  </div>
                </div>
                </div>
              ) : (
                products.map((product) => {
                  return (
                    <div key={product.Product_Id} className="p-5 ">
                      <ProdcutsCard product={product} id={1} />
                      <br />
                    </div>
                  );
                })
              )
            ) : loader ? (
              <div className=" grid grid-cols-1 sm:col-span-4 ">
              <div className="flex justify-center items-center">
                <div
                  className="inline-block h-8 w-8 sm:h-20 sm:w-20 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] "
                  role="status"
                >
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                  </span>
                </div>
              </div>
              </div>
            ) : (
              filterbook.map((product) => {
                return (
                  <div key={product.Product_Id} className="p-5 ">
                    <ProdcutsCard product={product} id={1} />
                    <br />
                  </div>
                );
              })
            )}
          </div>
        </div>
     
      </div>
    </>
  );
}

export default IPrePrimary;
