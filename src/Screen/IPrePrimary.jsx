import React, { useEffect, useRef, useState } from "react";
import "../Css/IPrePrimary.css";
import { useDispatch, useSelector } from "react-redux";
import gsap from "gsap";
import FilterTAb from "../Components/FilterTAb";
import ProdcutsCard from "../Components/ProdcutsCard";
import PamplatesCard from "../Components/PamplatesCard";
import axios from "axios";
import { listProducts, filterBook ,filterPamplatesBook} from "../actions/ProductsActions";
import { useNavigate, Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import Loader from "../Components/Loader";
import { Helmet } from "react-helmet";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
const BASE_URL = import.meta.env.VITE_URL;
function IPrePrimary() {
  const [filterbook2, setFilterbook] = useState([]);
  const [filterbook3, setFilterbook1] = useState([]);
  const history = useNavigate();
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.productList);
  const { error, loading, products = [] } = productsList;
  const ProductFilter = useSelector((state) => state.ProductFilter);

  const { filterproducts,api  } = ProductFilter;

  const pamplateBook = useSelector((state) => state.pamplateBook);

  const { Pamplatesfilterproducts,api1  } = pamplateBook;


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
  const [Pamplate, setPamplate] = useState([
    { id: 14, name: "All In One For PreSchoolers", isChecked: false },
    { id: 15, name: "All In One Book(Reading And Writing)", isChecked: false },
    { id: 16, name: "Writing Notebooks of Hindi For Preschoolers", isChecked: false },
    { id: 17, name: "Writing Notebooks of English For Preschoolers", isChecked: false },
    { id: 18, name: "Writing Notebooks of Mathematics For Preschoolers", isChecked: false },
    { id: 19, name: "Colouring Books For Preschoolers", isChecked: false },
    { id: 20, name: "Patterns And Curves Playbook", isChecked: false },
    { id: 21, name: "NUMBER BOOKS For Preschoolers", isChecked: false },
    { id: 22, name: "Scrapbook & TimeTable Book For Preschoolers", isChecked: false },
    { id: 23, name: "Jumbo Colouring Books For Preschoolers", isChecked: false },
    { id: 24, name: "Complete Kit Of Books For Preschoolers", isChecked: false },
    { id: 25, name: "Hindi Writing Books For Preschoolers", isChecked: false },
    { id: 26, name: "Books of Mental Maths and Reasoning For Class 1 to 5", isChecked: false },
    { id: 27, name: "Activity Based Worksheets For Class Pre-Nursery to 5", isChecked: false },
    { id: 28, name: "Books Of Reasoning For Class 1 to 8", isChecked: false },
    { id: 29, name: "A4 Writing Notebooks of Hindi, English And Maths", isChecked: false },
    { id: 30, name: "Practical Notebooks for School Children", isChecked: false },
    { id: 31, name: "Drawing Books For Schools Children", isChecked: false },
    { id: 32, name: "ALMANACS For School Children", isChecked: false },
    { id: 33, name: "English Activity Books For Preschoolers", isChecked: false },
]);

  let data;
  useEffect(() => {
    if (filterproducts?.results) {
      setFilterbook(filterproducts.results);
      setFilterbook1(null); // If filterbook changes, set filterbook1 to null
    }
  }, [filterproducts]);
  
  useEffect(() => {
    if (Pamplatesfilterproducts) {
      setFilterbook1(Pamplatesfilterproducts);
      setFilterbook(null); // If filterbook1 changes, set filterbook to null
    }
  }, [Pamplatesfilterproducts]);

  useEffect(() => {
    let flag = products;
    if (flag.length === 0) {
      dispatch(listProducts(""));
    }


    if (error) {
      history("/error");
    }
   
    const fetchData = async () => {
      let filterapi=API
      const myArray =filterapi.split("=")
      if(myArray[0]==="&pamplates"){
        dispatch(filterPamplatesBook(API))
      }else{
        dispatch(filterBook(API));
      }
      
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
      <div className=" primary-sections   relative min-h-screen bg-[rgb(252, 209, 209)] ">
        <div className="absolute z-10  w-[83%]  right-0 extratab top-[2rem]">
          <Accordion>
            <div className="flex justify-evenly w-[100%] flex-wrap  items-start relative ">
              

              <AccordionItem
                header={({ state }) => (
                  <Link to='#' className="accordion-header flex ">

                    <span className="px-[4.5vw]  p-3 bg-[#049A99] rounded-lg text-white ">
                      Customize Corner
                    </span>
                  </Link>
                )}
              >
               
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

        
        <div className="p-4 text-xl max-sm:text-[15px]    relative flex space-x-3 bg-[#049A99]    max-sm:w-full  sm:w-[17%]  text-white ">
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
              setPamplate={setPamplate}
              Pamplate={Pamplate}
              Subject={Subject}
              API={API}
              setApi={setApi}
            />
          </div>
 
          <div className="sm:w-[79%]  ">
          <div
    id="for_pamplates"
    className={`sm:w-[100%] sm:p-2 mx-auto max-sm:w-full relative top-[2rem] ${
      filterbook3?.length ? '' : 'card-container'
    }`}>
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
                
                <>
                {filterbook2?.length ? (
                  filterbook2.map((product) => (
                    <ProdcutsCard key={product.Product_Id} product={product} id={1} />
                  ))
                  
                ) : filterbook3?.length ? (

                  
                  filterbook3.map((pamplat) => (
                                 
                    <PamplatesCard key={pamplat.Pamplates_Id} pamplat={pamplat} id={1} />
                  ))
                ) : (
                  <div className="col-span-6 w-[50%] m-auto logg bg-sky-300">
                    <img src="Empty-pana.png" alt="No items found" />
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
   
  );
}

export default IPrePrimary;