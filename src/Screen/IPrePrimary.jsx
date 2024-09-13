import React, { useEffect, useRef, useState } from "react";
import "../Css/IPrePrimary.css";
import { useDispatch, useSelector } from "react-redux";
import gsap from "gsap";
import FilterTAb from "../Components/FilterTAb";
import ProdcutsCard from "../Components/ProdcutsCard";
import axios from "axios";
import { listProducts, filterBook } from "../actions/ProductsActions";
import { useNavigate, Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import Loader from "../Components/Loader";
import { Helmet } from "react-helmet";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
const BASE_URL = import.meta.env.VITE_URL;
function IPrePrimary() {
  const [filterbook2, setFilterbook] = useState([]);
  const history = useNavigate();
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.productList);
  const { error, loading, products = [] } = productsList;
  const ProductFilter = useSelector((state) => state.ProductFilter);

  const { filterproducts,api  } = ProductFilter;

  // console.log(filterbook2);
  
    // console.log(typeof api);
    
  let [API, setApi] = useState(api);
  
  
  // let [loader, setLoader] = useState(true);
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
    setFilterbook(filterproducts.results)
  }, [filterproducts]);
 
  useEffect(() => {
    let flag = products;
    if (flag.length === 0) {
      dispatch(listProducts(""));
    }

    // fetching the data for filter option /////////////////////////////////////////////////////////
    if (error) {
      history("/error");
    }
   
    const fetchData = async () => {
      dispatch(filterBook(API));
    };
    
      fetchData();

  }, [API]);
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
      <div className=" primary-sections   relative min-h-screen bg-[rgb(252, 209, 209)]">
        <div className="absolute z-10  w-[83%]  right-0 extratab top-[2rem]">
          <Accordion>
            <div className="flex justify-evenly w-[100%] flex-wrap  items-start relative ">
              {/* <AccordionItem
                header={({ state }) => (
                  <div className="accordion-header flex relative ">
                    <span className="px-[4.5vw]  p-3 bg-[#049A99] rounded-lg text-white relative z-10 close">
                      Books & Copy
                    </span>
                  </div>
                )}
              >
                {/* <div className="bg-white p-5  rounded-b-xl border-2 border-[#049A99]  -z-10 relative -top-3 space-y-3">
                  <Link
                    className="left-0 font-normal  relative top-2  block m-auto text-center "
                    to="/preprimary"
                  >
                    Plain Copies
                  </Link>
                  <Link
                    className="left-0 font-normal relative top-2  block  text-center"
                    to="/preprimary"
                  >
                    A4 Size Grand Regsiter
                  </Link>
                  <Link
                    className="left-0 font-normal relative top-2  block  text-center"
                    to="/preprimary"
                  >
                    Plain Drawing Book A4 and A3
                  </Link>
                  <Link
                    className="left-0 font-normal relative top-2  block  text-center"
                    to="/preprimary"
                  >
                    Table Book
                  </Link>
                  <Link
                    className="left-0 font-normal relative top-2  block  text-center"
                    to="/preprimary"
                  >
                    Pattern Book
                  </Link>
                  <Link
                    className="left-0 font-normal relative top-2  block  text-center"
                    to="/preprimary"
                  >
                    Story Book
                  </Link>
                  <Link
                    className="left-0 font-normal relative top-2  block  text-center"
                    to="/preprimary"
                  >
                    Festival Book
                  </Link>
                  <Link
                    className="left-0 font-normal relative top-2  block  text-center"
                    to="/preprimary"
                  >
                    Holiday HomeWork
                  </Link>
                </div> */}
              {/* </AccordionItem>  */}

              <AccordionItem
                header={({ state }) => (
                  <Link to='#' className="accordion-header flex ">

                    <span className="px-[4.5vw]  p-3 bg-[#049A99] rounded-lg text-white ">
                      Customize Corner
                    </span>
                  </Link>
                )}
              >
                {/* <div className="bg-white p-5 rounded-b-xl border-2 border-[#049A99] -z-10 relative -top-3 space-y-3">
                  <Link
                    className="left-0 font-normal  relative top-2  block m-auto text-center "
                    to="/preprimary"
                  >
                    School Diary
                  </Link>
                  <Link
                    className="left-0 font-normal relative top-2  block  text-center"
                    to="/preprimary"
                  >
                    Scrap Book
                  </Link>
                </div> */}
              </AccordionItem>

              <AccordionItem
                header={({ state }) => (
                  <Link to='#' className="accordion-header flex ">
                    <span className="px-[4.5vw]  p-3 bg-[#049A99] rounded-lg text-white ">
                      Free Activity Sheet
                    </span>
                  </Link>
                )}
              >
                {/* <div className="bg-white p-5 rounded-b-xl border-2 border-[#049A99] -z-10 relative -top-3 space-y-3">
                  <Link
                    className="left-0 font-normal  relative top-2  block m-auto text-center "
                    to="/preprimary"
                  ></Link>
                  <Link
                    className="left-0 font-normal relative top-2  block  text-center"
                    to="/preprimary"
                  >
                    Carnival Kitset
                  </Link>
                  <Link
                    className="left-0 font-normal relative top-2  block  text-center"
                    to="/preprimary"
                  >
                    Jumbo Colouring Book
                  </Link>
                </div> */}
              </AccordionItem>

              <AccordionItem
                header={({ state }) => (
                  <Link to='/teachertraining' className="accordion-header flex ">
                    <span className=" px-[4.5vw] p-3 bg-[#049A99] rounded-lg text-white ">
                     Teacher Training
                    </span>
                  </Link>
                )}
              >
                {/* <div className="bg-white p-5 rounded-b-xl border-2 border-[#049A99] -z-10 relative space-y-3 -top-3 ">
                  <Link
                    className="left-0 font-normal  relative top-2  block m-auto text-center "
                    to="/preprimary"
                  >
                    Toys
                  </Link>
                  <Link
                    className="left-0 font-normal relative top-2  block  text-center"
                    to="/preprimary"
                  >
                    Trophy Medal
                  </Link>
                </div> */}
              </AccordionItem>
            </div>
          </Accordion>
        </div>
        <Helmet>
          <title>
            Play, Nursery, Pre-Primer, and Primer Books - Adisri Publications
          </title>
          <meta
            name="description"
            content="Explore a wide range of books for Play, Nursery, Pre-Primer, and Primer levels at Adisri Publications. Enhance early education with our curated selection of engaging and educational books."
          />
          <meta
            name="keywords"
            content="Play books, Nursery books, Pre-Primer books, Primer books, early education books, children's books, Adisri Publications"
          />
        </Helmet>

        {/* <div className=" tab-grid  bg-[] w-[83%] justify-items-center logg sm:mr-0 sm:ml-auto py-8">
            <div  className="px-10 py-3 bg-white   rounded-full   cursor-pointer   ">Books & Copy

            </div>
            <h2  className="px-10 py-3 bg-white   rounded-full   cursor-pointer ">Stationary</h2>
            <h2  className="px-10 py-3 bg-white   rounded-full   cursor-pointer ">Art & Craft Supply</h2>
            <h2  className="px-10 py-3 bg-white   rounded-full   cursor-pointer  ">Toy & Educational Material</h2>
         
        </div> */}
        <div className="p-4 text-xl max-sm:text-[15px]    relative flex space-x-3 bg-[#049A99]    max-sm:w-full  sm:w-[17%]  text-white">
          <p className=" flex  space-x-5 ">
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

        <div className="flex   primary-sections  min-h-screen ">
          <div className="sm:w-[17%] max-sm:w-full max-sm:absolute max-sm:z-20 max-sm:-translate-x-full   primarysection1 bg-[#049A99] text-white  ease-out transition-all duration-500 relative    max-sm:h-full ">
            <FilterTAb
              Class={Class}
              setClass={setClass}
              setSubject={setSubject}
              Subject={Subject}
              API={API}
              setApi={setApi}
            />
          </div>

          <div className="sm:w-[79%] m-auto">
            <div className="sm:w-[100%]  sm:p-2 mx-auto   max-sm:w-full  card-container relative top-[2rem]  ">
              {API === ""  ? (
                Object.keys(products).length === 0 ? (
                  <Loader />
                ) : (
                  products.results.map((product) => {
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
                  {
                  filterbook2?.length !== 0 ? (
                    filterbook2?.map((product) => {
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
        </div>
        <div className="p-5 w-[83%] max-sm:w-full  ml-auto mr-0">
          {API === "" ? (
            <div className="flex justify-between">
              {Object.keys(products).length === 0 ? (
                <>
                  <Loader />
                </>
              ) : (
                <>
                  {products.previous !== null ? (
                    <button
                      className="bg-[#FF5F5F]  rounded-full sm:px-10 sm:p-3 max-sm:p-2 block m-auto text-white  max-sm:text-xs   transition-all duration-400 hover:bg-[#FF5F5F]  hover:text-white "
                      onClick={() => {
                        let url = `${products.previous.slice(
                          products.previous.indexOf("?") + 1,
                          products.previous.length
                        )}`;
                        dispatch(listProducts(url));
                      }}
                    >
                      Previous
                    </button>
                  ) : (
                    <button className="bg-[#FF5F5F]    opacity-60 rounded-full sm:px-10 sm:p-3 max-sm:p-[9px] block m-auto   text-white max-sm:text-xs   transition-all duration-400 hover:bg-[#FF5F5F]  hover:text-white ">
                      Previous
                    </button>
                  )}
                </>
              )}
              {Object.keys(products).length === 0 ? (
                <>
                  <Loader />
                </>
              ) : (
                <>
                  {products.next !== null ? (
                    <button
                      className="bg-[#FF5F5F] rounded-full sm:px-10 max-sm:px-6  sm:p-3 max-sm:p-2 block m-auto  text-white max-sm:text-xs   transition-all duration-400 hover:bg-[#FF5F5F]  hover:text-white "
                      onClick={() => {
                        let url = `${products.next.slice(
                          products.next.indexOf("?") + 1,
                          products.next.length
                        )}`;
                        dispatch(listProducts(url));
                        // console.log(url);
                      }}
                    >
                      {" "}
                      Next{" "}
                    </button>
                  ) : (
                    <button className="bg-[#FF5F5F]  rounded-full sm:px-10 p-3 sm:p-3 max-sm:p-2 block m-auto  text-white max-sm:text-xs   transition-all duration-400 opacity-60 hover:bg-[#FF5F5F]  hover:text-white ">
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
    //  <>
    //  <h1>dfff</h1>
    //  </>
  );
}

export default IPrePrimary;
