import React, { useEffect, useRef, useState } from "react";
import "../Css/IPrePrimary.css";
import { useDispatch, useSelector } from "react-redux";
import gsap from "gsap";
import FilterTAb from "../Components/FilterTAb";
import ProdcutsCard from "../Components/ProdcutsCard";
import axios from "axios";
import { Helmet } from 'react-helmet';
import {
  listonetoeight,
  listonetoeightDetails,
} from "../actions/ProductsActions";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import Loader from "../Components/Loader";
const BASE_URL = import.meta.env.VITE_URL;
function Ionetoeight() {
  const [filterbook, setFilterbook] = useState([]);
  const [books,setBooks]=useState([])
  const history = useNavigate();
  const dispatch = useDispatch();
  const ProductOnetoeight = useSelector((state) => state.ProductOnetoeight);
  const { error, loading, productonetoeight = [] } = ProductOnetoeight;
  console.log(productonetoeight);
  let [API, setApi] = useState("");
  // let [loader, setLoader] = useState(true);
  const [Class, setClass] = useState([
    { id: 1, name: "1", isChecked: false },
    { id: 2, name: "2", isChecked: false },
    { id: 3, name: "3", isChecked: false },
    { id: 4, name: "4", isChecked: false },
    { id: 5, name: "5", isChecked: false },
  ]);
  const [Subject, setSubject] = useState([
    { id: 6, name: "Evs", isChecked: false },
    { id: 7, name: "English", isChecked: false },
    { id: 8, name: "English Grammer", isChecked: false },
    { id: 9, name: "Hindi", isChecked: false },
    { id: 10, name: "Hindi Vyakaran", isChecked: false },
    { id: 11, name: "Math", isChecked: false },
  
  ]);

  let data;
  useEffect(()=>{
    let flag = productonetoeight;
    if (flag.length === 0) {
      dispatch(listonetoeight());
    }
    if (error) {
      history("/error");
    }
  },[])
  useEffect(() => {
  

    // fetching the data for filter option /////////////////////////////////////////////////////////
 
    const fetchData = async () => {
      try {
        data = await axios.get(`${BASE_URL}/data/products/onetoeight/?${API}`);
        // console.log(data.data);
        setFilterbook(data.data.results);
      } catch (error) {
        // setLoader(false);
        console.log("cant get the data", error);
      } finally {
      }
    };
    if (!(API==='')) {  
      fetchData();
    }
  }, [API]);
  useEffect(() => {
    console.log(productonetoeight);
    setBooks(productonetoeight.results)
    console.log(books);
    
  }, [productonetoeight]);
  let count = 0;
  const open = () => {
    if (count == 0) {
      document
        .querySelector(".primarysection1")
        .classList.toggle("max-sm:translate-x-full");
      document.querySelector(".buttons").innerHTML =
        '<svg class="w-7 max-sm:w-[13px]" xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"  fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>';
      count++;
    } else {
      document
        .querySelector(".primarysection1")
        .classList.toggle("max-sm:translate-x-full");
      document.querySelector(".buttons").innerHTML =
        '<svg class="w-7 max-sm:w-[13px]" xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"  fill="#000000"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>';

      count = 0;
    }
  };
  return (
    <>

      <div className=" primary-sections  min-h-screen    ">
      <div className="applications">
      <Helmet>
        <title>Books for Classes 1 to 8 - Adisri Publications</title>
        <meta 
          name="description" 
          content="Explore a comprehensive collection of books for Classes 1 to 8 at Adisri Publications. Find textbooks, workbooks, and reference materials for a wide range of subjects tailored to enhance learning." 
        />
        <meta 
          name="keywords" 
          content="Class 1 books, Class 2 books, Class 3 books, Class 4 books, Class 5 books, Class 6 books, Class 7 books, Class 8 books, school textbooks, workbooks, Adisri Publications" 
        />
      </Helmet>
      </div>

        {/* <div className=" tab-grid  bg-[] w-[83%] justify-items-center logg sm:mr-0 sm:ml-auto py-8">
            <div  className="px-10 py-3 bg-[#b9f0ea]  rounded-full   cursor-pointer   ">Books & Copy

            </div>
            <h2  className="px-10 py-3 bg-[#b9f0ea]  rounded-full   cursor-pointer ">Stationary</h2>
            <h2  className="px-10 py-3 bg-[#b9f0ea]  rounded-full   cursor-pointer ">Art & Craft Supply</h2>
            <h2  className="px-10 py-3 bg-[#b9f0ea]  rounded-full   cursor-pointer  ">Toy & Educational Material</h2>
         
        </div> */}
        <div className="p-4 text-xl max-sm:text-[15px]    relative flex space-x-3 bg-[#049A99] max-sm:w-full  sm:w-[17%] ">
          <p className=" flex  space-x-5 text-white">
            {" "}
            <span> Filters</span>{" "}
            <button
              onClick={open}
              className=" transition-all duration-300 buttons sm:hidden max-sm:visible   w-full"
            >
              <svg
                className="w-[15px] max-sm:w-[13px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#000000"
              >
                <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
              </svg>
            </button>{" "}
          </p>{" "}
        </div>

        <div className="flex   primary-sections   ">
          <div className="sm:w-[17%] max-sm:w-full max-sm:absolute max-sm:z-20 max-sm:-translate-x-full   primarysection1 bg-[#049A99]  ease-out transition-all duration-500 relative    max-sm:h-full text-white">
            <FilterTAb
              Class={Class}
              setClass={setClass}
              setSubject={setSubject}
              Subject={Subject}
              API={API}
              setApi={setApi}
            />
          </div>

          <div className="sm:w-[79%] sm:p-2 mx-auto   max-sm:w-full  card-container relative bg-[#]  ">
            {API === "" ? (
              Object.keys(productonetoeight).length === 0 ? (
                <Loader />
              ) : (
                productonetoeight.results.map((product) => {
                  return (
                    <div key={product.Product_Id} className=" max-sm:p-0 ">
                      <ProdcutsCard product={product} id={1} />
                    </div>
                  );
                })
              )
            ) : loading ? (
              <>
                <Loader />
              </>
            ) : (
              // <div className=" grid grid-cols-1 sm:col-span-4 ">
              // <div className="flex justify-center items-center">
              //   <div
              //     className="inline-block h-8 w-8 sm:h-20 sm:w-20 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] "
              //     role="status"
              //   >
              //     <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              //       Loading...
              //     </span>
              //   </div>
              // </div>
              // </div>
              <>
                {filterbook.length !== 0 ? (
                  filterbook.map((product) => {
                    return (
                      <div key={product.Product_Id} className=" max-sm:p-0 ">
                        <ProdcutsCard product={product} id={1} />
                      </div>
                    );
                  })
                ) : (
                  <div className=" col-span-6 w-[50%] m-auto items-center logg ">
                    <img className="" src="Empty-pana.png" alt="" />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
        <div className="p-5 w-[83%] max-sm:w-full  ml-auto mr-0">
          {API === "" ? (
            <div className="flex justify-between">
              {Object.keys(productonetoeight).length === 0 ? (
                <>
                  <Loader />
                </>
              ) : (
                <>
                  {productonetoeight.previous !== null ? (
                    <button
                      className="bg-[#FF5F5F]  rounded-full sm:px-10 sm:p-3 max-sm:p-2 block m-auto text-white  max-sm:text-xs   transition-all duration-400  hover:text-white "
                      onClick={() => {
                        let url = `${productonetoeight.previous.slice(
                          productonetoeight.previous.indexOf("?") + 1,
                          productonetoeight.previous.length
                        )}`;
                        dispatch(listonetoeight(url));
                      }}
                    >
                      Previous
                    </button>
                  ) : (
                    <button className="bg-[#FF5F5F]   opacity-60 rounded-full sm:px-10 sm:p-3 max-sm:p-[9px] block m-auto   text-white max-sm:text-xs   transition-all duration-400 hover:bg-[#FF5F5F] hover:text-white ">
                      Previous
                    </button>
                  )}
                </>
              )}
              {Object.keys(productonetoeight).length === 0 ? (
                <>
                  <Loader />
                </>
              ) : (
                <>
                  {productonetoeight.next !== null ? (
                    <button
                      className="bg-[#FF5F5F] rounded-full sm:px-10 max-sm:px-6  sm:p-3 max-sm:p-2 block m-auto  text-white max-sm:text-xs   transition-all duration-400 hover:bg-[#FF5F5F] hover:text-white "
                      onClick={() => {
                        let url = `${productonetoeight.next.slice(
                          productonetoeight.next.indexOf("?") + 1,
                          productonetoeight.next.length
                        )}`;
                        dispatch(listonetoeight(url));
                        // console.log(url);
                      }}
                    >
                      {" "}
                      Next{" "}
                    </button>
                  ) : (
                    <button className="bg-[#FF5F5F] rounded-full sm:px-10 p-3 sm:p-3 max-sm:p-2 block m-auto  text-white max-sm:text-xs   transition-all duration-400 opacity-60 hover:bg-[#FF5F5F] hover:text-white ">
                      Next
                    </button>
                  )}
                </>
              )}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
    // <></>
  );
}

export default Ionetoeight;
