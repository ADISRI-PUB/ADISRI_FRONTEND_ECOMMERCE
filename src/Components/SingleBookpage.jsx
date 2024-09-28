import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../Css/RelatedBook.css";
import ReactImageMagnify from "react-image-magnify";

import {
  listProductsDetails,
  relatedBooks,
  bookInThisSeries,
} from "../actions/ProductsActions";

import { addToCart, removeFromCart } from "../actions/CartActions";
import { Helmet } from "react-helmet";
import Loader from "./Loader";
import ViewPages from "./ViewPages";

function SingleBookpage() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const [keyfeatures, setKeyfeatures] = useState("");
  const { id } = useParams();
  const productDetails = useSelector((state) => state.productDetails);
  const relatedBook = useSelector((state) => state.relatedBook);
  let { related = [] } = relatedBook;
  const bookSeries = useSelector((state) => state.bookSeries);
  let { bookInSeries = [] } = bookSeries;
  const [Quantity, setquantity] = useState(1);
  let { loading, error, product = [] } = productDetails;
  const [dynamic, setdynamicimage] = useState("");
  const [preview2, setpreview2] = useState(false);
  const [activeTab, setActiveTab] = useState("description");

  const handleimage = (e) => {
    let img = e.target;
    document
      .querySelector("#frontpage")
      .setAttribute("src", `${img.getAttribute("src")}`);
  };
  const handleImageChange = (e) => {
    const imgSrc = e.target.src; // Get the source of the clicked image
    setSelectedImage(imgSrc); // Update the selected image
  };

  const addToCartHandler = () => {
    dispatch(addToCart(id, Quantity));
    history(`/cart`);
  };

  useEffect(() => {
    dispatch(listProductsDetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(relatedBooks(product.Class));
  }, [dispatch, product]);

  useEffect(() => {
    dispatch(bookInThisSeries(id));
  }, [dispatch, product, id]);

  // let settings = {
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 1000,
  //   initialSlide: 0,
  //   // nextArrow: <SingleBookpage />,
  //   // prevArrow: <SingleBookpage />,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         autoplay: true,
  //         autoplaySpeed: 2000,
  //         infinite: true,
  //         slidesToScroll: 1,
  //       nextArrow:"",
  //       prevArrow:""
  //       },
  //     },

  //   ],}
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300, // Adjust this value to control scroll amount
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300, // Adjust this value to control scroll amount
        behavior: "smooth",
      });
    }
  };

  const scrollRef1 = useRef(null);

  const scrollLeft1 = () => {
    if (scrollRef1.current) {
      scrollRef1.current.scrollBy({
        left: -300, // Adjust this value to control scroll amount
        behavior: "smooth",
      });
    }
  };

  const scrollRight1 = () => {
    if (scrollRef1.current) {
      scrollRef1.current.scrollBy({
        left: 300, // Adjust this value to control scroll amount
        behavior: "smooth",
      });
    }
  };

  // useEffect(() => {
  //   const interval1 = setInterval(() => {
  //     if (scrollRef1.current) {
  //       scrollRef1.current.scrollBy({
  //         left: 300, // Adjust this value to control scroll amount
  //         behavior: "smooth",
  //       });
  //     }
  //   }, 3000); // Change slides every 3 seconds

  //   return () => clearInterval(interval1);
  // }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (scrollRef.current) {
  //       scrollRef.current.scrollBy({
  //         left: 300, // Adjust this value to control scroll amount
  //         behavior: "smooth",
  //       });
  //     }
  //   }, 3000); // Change slides every 3 seconds

  //   return () => clearInterval(interval);
  // }, []);

  const title = product?.Name || "Adisri Publications";
  const description =
    product?.Description ||
    "Explore a wide range of quality products at Your Store. Find the best deals and top-rated items.";
  const keywords = `${product?.Author || ""}, ${product?.Class || ""}`.trim();

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {Object.keys(product).length ? (
            <div key={product.Product_Id} className="w-full min-h-screen flex ">
              <div className="applications">
                <Helmet>
                  <title>{title}</title>
                  <meta name="description" content={description} />
                  <meta name="keywords" content={keywords} />
                </Helmet>
              </div>

              <div className="font-sans  w-full relative z-0  ">
                {preview2 ? (
                  <div className="  h-screen w-full bg-black/50 absolute  z-50 m-auto ">
                    {product?.Image && preview2 ? (
                      <ViewPages
                        Images={product?.Image}
                        pagevisiblity={setpreview2}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  ""
                )}
                <div className="pt-3 max-sm:p-1">
                  {/* <div className="flex sm:flex-row md:flow-col bg-orange-300"> */}
                  <div >
                  <div className="flex flex-col md:grid md:grid-cols-1 lg:grid-cols-5 gap-3 py-5 ">

                    <div className="lg:col-span-2 max-sm:col-span-3   top-0 text-center sm:w-[54vh] mt-1 mx-28 max-sm:w-3/4 max-sm:m-auto">
                      <div className=" fluid px-2 py-3 rounded-lg   bg-slate-50 relative shadow-[0_2px_10px_-3px_rgba(6,81,237,0.9)]  hover:scale-110 transition-all   ease-in-out hover:drop-shadow-lg">
                        {
                          <img
                            id="frontpage"
                            className="w-full h-auto "
                            src={product.Image[0]}
                            alt="coverimage"
                          />
                          // console.log(product.Image[0])
                        }

                        {/* {selectedImage && (
                          <ReactImageMagnify
                            {...{
                              smallImage: {
                                alt: "Product Image",
                                isFluidWidth: true,
                                src: selectedImage,
                                // sizes: '(max-width: 480px) 100vw, (max-width: 200px) 30vw, 360px'
                              },
                              largeImage: {
                                className :"mx-full h-auto",
                                src: selectedImage,
                                width: 1800,
                                height: 800,
                                
                              },
                              enlargedImagePosition: 'beside',
                              enlargedImageContainerDimensions:{width: '200%', height: '120%'},
                              shouldUsePositiveSpaceLens: true,
                              lensStyle: { backgroundColor: 'rgba(238,241,249,.2)' ,width: '80%', height: '20%'}
                            }}
                          />
                        )} */}

                        {/* <button
                        type="button"
                        className="absolute top-4 right-4"
                      ></button> */}
                      </div>

                      {/* for the 3 book below the fiest image of top */}
                      <div className="mt-6 flex  justify-center gap-6 mx-auto  ">
                        {product ? (
                          <>
                            {product.Image.map((list, index) => {
                              if (index <= 1) {
                                // FOR THE IMAGE MAHINFICATION
                                return (
                                  <div
                                    key={index}
                                    className="w-20 h-24 flex items-center  justify-center rounded-xl mt-3 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] cursor-pointer "
                                  >
                                    <img
                                      id="Dynamichange"
                                      onClick={handleimage}
                                      src={list}
                                      className="rounded-lg w-full h-full object-cover"
                                      alt="Product2"
                                    />
                                  </div>
                                );
                                // FOR THE IMAGE MAHINFICATION
                              } else {
                                if (index === 2) {
                                  return (
                                    <div
                                      key={index}
                                      onClick={() => {
                                        setpreview2(true);
                                      }}
                                      className="w-20 h-24 flex items-center justify-center  mt-3 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] cursor-pointer relative"
                                    >
                                      <img
                                        id="Dynamichange"
                                        src={list}
                                        className="rounded-lg w-full h-full object-cover" // Ensure image covers the div fully
                                        alt="Product2"
                                      />
                                      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 rounded-xl text-white flex items-center justify-center font-bold text-xl">
                                        +{product?.Image?.length - 2}
                                      </div>
                                    </div>
                                  );
                                }
                              }
                            })}
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                    {/* for the 3 book below the fiest image of top */}

                    {/* For the main book description  */}

                    <div className="col-span-2 w-fit h-auto lg:text-balance">
                      <h2 className=" text-xl mt-5  md:text-2xl  lg:text-3xl font-serif text-gray-800 ">
                        {product.Name}
                      </h2>

                      {/* <p className="text-lg font-serif text-gray-700">
                        by {product.Author}
                      </p> */}

                      <div className="flex flex-wrap gap-4 mt-8">
                        <p className="text-gray-800 text-2xl lg:text-4xl font-sans">
                          &#x20b9; {product.Price}/-
                        </p>
                      </div>

                      <div className="">
                      <div className="flex flex-row gap-4 mt-8 sm:justify-items-center"> 
                        <button
                          onClick={addToCartHandler}
                          type="button"
                          className="min-w-[150px]    lg:min-w-[200px] rounded-full px-4 py-4 bg-[#FF5F5F] text-white text-sm font-semibold transition-all duration-200"
                        >
                          Add To Cart
                        </button>

                        <button
                          type="button"
                          className="min-w-[150px] lg:min-w-[200px] px-4 py-4 border-[1px] flex justify-center border-black hover:bg-white hover:text-black transition-all duration-300 rounded-full  text-black text-sm font-semibold "
                        >
                          Buy Now
                        </button>
                      </div>
                      </div>


                      <br />
                      <div className="">
                        <ul>
                          <li className="  font-sans py-1 ">
                            <b className="font-serif text-xl  font-medium">
                              Product Specification :-
                            </b>
                            <div className="py-2">
                              <table className=" border-collapse border border-gray-300 py-2">
                                <tbody>
                                  <tr>
                                    <td className="w-40 border border-gray-300 p-2">
                                      Class
                                    </td>
                                    <td className="w-80 border border-gray-300 p-2">
                                      {product.Class}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="w-40 border border-gray-300 p-2">
                                      Subject
                                    </td>
                                    <td className="w-80 border border-gray-300 p-2">
                                      {product.Subject}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="w-40 border border-gray-300 p-2">
                                      Publisher
                                    </td>
                                    <td className="w-80 border border-gray-300 p-2">
                                      {product.Publication}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="border border-gray-300 p-2">
                                      ISBN
                                    </td>
                                    <td className="border border-gray-300 p-2">
                                      {product.Isbn}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="border border-gray-300 p-2">
                                      Author
                                    </td>
                                    <td className="border border-gray-300 p-2">
                                      {product.Author}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="border border-gray-300 p-2">
                                      Number of Pages
                                    </td>
                                    <td className="border border-gray-300 p-2">
                                      {product.Page}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="border border-gray-300 p-2">
                                      Binding
                                    </td>
                                    <td className="border border-gray-300 p-2">
                                      Paperback
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </li>

                          <div className="flex space-x-2 size-36 mt-1">
                            <a href="https://wa.me/8130789009" target="_blank">
                              <li>
                                <img
                                  className=""
                                  src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000"
                                  alt="whatapp"
                                />
                              </li>
                            </a>
                            <a
                              href="https://www.facebook.com/adisripublications/"
                              target="_blank"
                            >
                              <li>
                                <img
                                  className=""
                                  src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000"
                                  alt="Fackebook"
                                />
                              </li>
                            </a>
                            <a
                              href="https://in.linkedin.com/company/adisri-publications"
                              target="_blank"
                            >
                              <li>
                                <img
                                  className=""
                                  src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
                                  alt="Linkdin"
                                />
                              </li>
                            </a>
                          </div>
                        </ul>
                      </div>
                    </div>
                    {/* For the main book description  */}

                    <div className="">
                      <div className=" w-full">
                        <div className="relative mt-1">
                        <h3 className="text-2xl  text-center font-serif font-medium ">
                          Books in This Series
                        </h3>
                        </div>
                       
                        <div className="flex flex-col  space-y-2 items-center w-11/12 ">
                          {bookSeries.bookInSeries?.map((product) => {
                            // Generate URL
                            let productName = product.Name;
                            let urlProduct = productName.replace(/\s+/g, "+");
                            urlProduct = `${urlProduct}+product_id+${product.Product_Id}`;

                            return (
                              <div
                                key={product.Product_Id}
                                className="flex items-start space-x-4 mt-4 border-red-300	 w-auto h-auto related-book-item"
                              >
                                <Link
                                  to={`/singlebook/${urlProduct}`}
                                  className="flex items-start space-x-3"
                                >
                                  {/* Book image */}
                                  <img
                                    src={product.Image}
                                    alt={product.Name}
                                    className="w-1/3 h-2/4  object-cover rounded-md " // Small image size
                                  />
                                  {/* Book name and price */}
                                  <div>
                                    <h2 className=" font-sans text-sm text-gray-800">
                                      {product.Name}
                                    </h2>
                                    <div className="flex  text-right">
                                      <p className="text-gray-900 text-right font-semibold sm:text-lg max-sm:text-sm mt-1">
                                        <span className="text-sm font-sans text-gray-900 text-right">
                                          &#x20b9; {product.Price}/-
                                        </span>{" "}
                                        <span className="text-gray-400 text-sm">
                                          M.R.P
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>


                  <div className=" relative flex justify-center items-center  ">
                  {product?.Description ? (
                    <div className="  lg:w-9/12 border lg:mx-8 h-[80%] border-yellow-500 p-6 mt-10">
                      {/* Buttons for toggling between Description and Sample Book */}
                      <div className="flex space-x-4 ">
                        
                        <button
                          onClick={() => setActiveTab("description")}
                          className={`px-4 py-2 border rounded-lg ${
                            activeTab === "description"
                              ? "bg-blue-500 text-white"
                              : "bg-white text-black"
                          }`}
                        >
                          
                          About The Book

                        </button>
                        
                        

                        <button
                          onClick={() => setActiveTab("sampleBook")}
                          className={`px-4 py-2 border rounded-lg  ${
                            activeTab === "sampleBook"
                              ? "bg-blue-500 text-white"
                              : "bg-white text-black"
                          }`}
                        >
                          Sample Book
                        </button>

                      </div>

                      {/* Conditionally render Description */}
                      {activeTab === "description" && product?.Description && (
                        <div className="mt-4 ">
                          <h3 className="font-serif font-semibold text-lg md:text-xl mb-2">
                            Description
                          </h3>
                          <hr className="my-4 border-t-5 border-[#FF5F5F]" />
                          <>
                            {/* Display the introductory text before "Key Features" */}
                            <span className="text-sm md:text-base">
                              {product?.Description?.slice(
                                0,
                                product?.Description.indexOf("Content") !== -1
                                ? product.Description.indexOf("Content")
                                : product?.Description.indexOf("Key") !== -1
                                ? product.Description.indexOf("Key")
                                : undefined
                              )}
                            </span>

                            {/* Display the "Key Features" section if it exists */}

                            {product?.Description?.includes("Content") && (
                              <div className="p-4 mt-4">
                                <h3 className="font-serif font-medium text-lg md:text-xl mb-2">
                                  Content:
                                </h3>

                                <ul className="list-disc pl-5 text-sm md:text-base">
                                  {product?.Description.slice(
                                    product.Description.indexOf("Content") + 16 // Adjust to skip "Key Features: " properly
                                  )
                                    .split("•") // Split by bullet points
                                    .filter((e) => e.trim())
                                    .map((e, index) => (
                                      <li key={index}>{e.trim()}</li>
                                    ))}
                                </ul>
                              </div>
                            )}

                            {product?.Description?.includes("Key") && (
                              <div className="p-4 mt-4">
                                <h3 className="font-serif font-medium text-lg md:text-xl mb-2">
                                  Key Features:
                                </h3>

                                <ul className="list-disc pl-5 text-sm md:text-base">
                                  {product?.Description.slice(
                                    product.Description.indexOf("Key") + 16 // Adjust to skip "Key Features: " properly
                                  )
                                    .split("•") // Split by bullet points
                                    .filter((e) => e.trim())
                                    .map((e, index) => (
                                      <li key={index}>{e.trim()}</li>
                                    ))}
                                </ul>
                              </div>
                            )}
                          </>
                        </div>
                      )}

                      {/* Conditionally render Sample Book */}
                      {activeTab === "sampleBook" && (
                        <div className="mt-4">
                          <h3 className="font-serif font-semibold text-xl mb-2 ">
                            Sample Book
                          </h3>
                          <hr className="my-4 border-t-5  border-[#FF5F5F]" />
                          <div className="w-full h-[400px] md:h-[600px] overflow-y-scroll	space-y-6 border  border-gray-300 p-4">
                          {product.Image.map((list, index) => {
                            return (
                              
                              <img
                                key={index} // Always include a unique key when rendering a list
                                src={list}
                                alt={`Product Image ${index}`}
                                className="rounded-lg w-full min-h-full object-cover "
                              />
                              
                            );
                          })}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : null}
                  {/* <p>{product.Description}</p> */}
                  </div>
                  






                  <div className="relative flex justify-center items-center mt-12 ">
                  <div className=" md:w-9/12    p-6 mt-10">
                  {/* <div className="mt-20 w-5/6 mx-40 bg-green-600"> */}
                    <hr className="my-4 border-t-5 border-[#FF5F5F] " />
                    <h3 className="text-center font-serif text-black lg:text-4xl sm:text-2xl">
                      Related Books
                    </h3>

                    {relatedBook.loading ? (
                      <Loader />
                    ) : relatedBook.error ? (
                      <p>Error: {relatedBook.error}</p>
                    ) : (
                      <div className="relative">
                        <button
                          onClick={scrollLeft}
                          className="absolute left-[-10%] rounded-2xl top-1/2 transform -translate-y-1/2 bg-[#47b6db] text-white  p-3"
                        >
                          &lt;
                        </button>

                        <div
                          ref={scrollRef}
                          className="related-books-container "
                        >
                          {relatedBook.related?.map((product) => {
                            // Generate URL
                            let productName = product.Name;
                            let urlProduct = productName.replace(/\s+/g, "+");
                            urlProduct = `${urlProduct}+product_id+${product.Product_Id}`;

                            return (
                              <div
                                key={product.Product_Id}
                                className="related-book-item p-2 border rounded-lg"
                              >
                                <Link to={`/singlebook/${urlProduct}`}>
                                  <img
                                    src={product.Image}
                                    alt={product.Name}
                                    className="centered-image"
                                  />
                                  <h2>
                                    <b>Name: </b>
                                    {product.Name}
                                  </h2>
                                  <div className="flex items-center">
                                    <p className="sm:text-xl max-sm:text-[10px] font-semibold text-gray-900 w-full mt-1">
                                      {" "}
                                      <span className="font-sans">
                                        {" "}
                                        <span className="text-[13px] max-sm:text-[6px] relative -top-[5px] max-sm:-top-1">
                                          {" "}
                                          &#x20b9;
                                        </span>
                                        {product.Price}/-
                                      </span>{" "}
                                      <span className="text-gray-400">
                                        M.R.P
                                      </span>
                                    </p>
                                  </div>
                                </Link>
                              </div>
                            );
                          })}
                        </div>

                        <button
                          onClick={scrollRight}
                          className="absolute right-[-10%] rounded-3xl top-1/2 transform -translate-y-1/2 bg-[#47b6db] text-white p-3"
                        >
                          &gt;
                        </button>
                        <hr className="my-4 border-t-5 border-[#FF5F5F]" />
                      </div>
                    )}
                  </div>
                  </div>

                  <br />

                  <div className="">
                    {/* <hr className="my-4 border-t-5 border-gray-300" />
                    <h3 className="text-center font-serif text-black text-3xl">
                      Books In This Series
                    </h3>

                    {bookSeries.loading ? (
                      <Loader />
                    ) : bookSeries.error ? (
                      <p>Error: {bookSeries.error}</p>
                    ) : (
                      <div className="relative">
                        <button
                          onClick={scrollLeft1}
                          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2"
                        >
                          &lt;
                        </button>
                        <div
                          ref={scrollRef1}
                          className="related-books-container"
                        >
                          {bookSeries.bookInSeries?.map((product) => {
                            // Generate URL
                            let productName = product.Name;
                            let urlProduct = productName.replace(/\s+/g, "+");
                            urlProduct = `${urlProduct}+product_id+${product.Product_Id}`;

                            return (
                              <div
                                key={product.Product_Id}
                                className="related-book-item"
                              >
                                <Link to={`/singlebook/${urlProduct}`}>
                                  <img
                                    src={product.Image}
                                    alt={product.Name}
                                    className="centered-image"
                                  />
                                  <h2>
                                    <b>Name: </b>
                                    {product.Name}
                                  </h2>
                                  <div className="flex items-center">
                                    <p className=" sm:text-xl max-sm:text-[10px] font-semibold text-gray-900 w-full mt-1">
                                      {" "}
                                      <span className="font-sans">
                                        {" "}
                                        <span className="text-[13px] max-sm:text-[6px]  relative -top-[5px] max-sm:-top-1">
                                          {" "}
                                          &#x20b9;
                                        </span>
                                        {product.Price}/-
                                      </span>{" "}
                                      <span className="text-gray-400">
                                        M.R.P
                                      </span>
                                    </p>
                                  </div>
                                </Link>
                              </div>
                            );
                          })}
                        </div>
                        <button
                          onClick={scrollRight1}
                          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2"
                        >
                          &gt;
                        </button>
                        <hr className="my-4 border-t-5 border-gray-300" />
                      </div>
                    )} */}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
}

export default SingleBookpage;
