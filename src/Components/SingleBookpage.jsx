import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";

import { listProductsDetails } from "../actions/ProductsActions";
import { addToCart, removeFromCart } from "../actions/CartActions";
import { Helmet } from 'react-helmet';
import Loader from "./Loader";
function SingleBookpage() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const [keyfeatures,setKeyfeatures] =useState('')
  const { id } = useParams();
  const productDetails = useSelector((state) => state.productDetails);
  const [Quantity, setquantity] = useState(1);
  let { loading, error, product = [] } = productDetails;
  const [dynamic, setdynamicimage] = useState("");

  const handleimage = (e) => {
    let img = e.target;
    document
      .querySelector("#frontpage")
      .setAttribute("src", `${img.getAttribute("src")}`);
  };



  const addToCartHandler = () => {
    dispatch(addToCart(id, Quantity));
    history(`/cart`);
  };

  useEffect(() => {
    dispatch(listProductsDetails(id));
  }, [dispatch, id]);

  const title = product?.Name || 'Adisri Publications';
  const description = product?.Description || 'Explore a wide range of quality products at Your Store. Find the best deals and top-rated items.';
  const keywords = `${product?.Author || ''}, ${product?.Class || ''}`.trim();

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
        {
          Object.keys(product).length? (
            <div
            key={product.Product_Id}
            className="w-full min-h-screen flex gap-5"
          >
             <div className="applications">
      <Helmet>
        <title>{title}</title>
        <meta 
          name="description" 
          content={description} 
        />
        <meta 
          name="keywords" 
          content={keywords}
    
        />
      </Helmet>
      </div>
            <div className="font-sans  w-full  ">
              <div className="p-4 max-sm:p-1   mx-auto">
                <div className="grid items-start gap-10 grid-cols-2 lg:grid-cols-5   p-6 rounded-lg ">
                  <div className="lg:col-span-2 max-sm:col-span-3   top-0 text-center sm:w-1/2 max-sm:w-3/4 max-sm:m-auto ">
                    <div className="px-2 py-6 rounded-lg  relative bg-white">
                      {
                  <img
                  id="frontpage"
                  className="rounded-xl "
                  src={product.Image[0]}
                  alt="coverimage"/>
                // console.log(product.Image[0])
                
                      }
                      
                      <button
                        type="button"
                        className="absolute top-4 right-4"
                      ></button>
                    </div>
                    <div className="mt-6 flex  justify-center gap-6 mx-auto  ">
                      {
                        product?(
                          <>
                          {

                            product.Image.map((list,index)=>{
                              return(

                                <div
                                key={index}
                                onClick={handleimage}
                                className="w-20 h-16 flex items-center  justify-center rounded-lg p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] cursor-pointer"
                                >
                              <img
                                id="Dynamichange"
                                src={list}
                                alt="Product2"
                                />
    
                            </div>
                              )
                            })
                       
                          }
                        </>
                        ):(<>
                        
                        </>)
                      }
                      
                    
                    </div>
                  </div>
  
                  <div className="col-span-3 w-full ">
                    <h2 className="text-2xl font-extrabold text-gray-800">
                      {product.Name}
                    </h2>
                    <div className="flex flex-wrap gap-4 mt-8">
                      <p className="text-gray-800 text-3xl font-bold">
                        &#x20b9;{product.Price}/-
                      </p>
                    </div>
  
                    <div className="flex flex-wrap gap-4 mt-8">
                      <button
                        onClick={addToCartHandler}
                        type="button"
                        className="min-w-[200px] rounded-full px-4 py-3 bg-[#FF5F5F] text-white text-sm font-semibold transition-all duration-200"
                      >
                        Add To Cart
                      </button>
  
                      <button
                        type="button"
                       
                        className="min-w-[200px] px-4 py-2.5 border-[1px] flex justify-center border-black hover:bg-white hover:text-black transition-all duration-300 rounded-full  text-black text-sm font-semibold "
                      >
                        Buy Now
                       
                      </button>
                    </div>
                    <br />
                    <div className="">
                      <ul>
                        <li>
                          {" "}
                          <b>Class </b>:&nbsp;{product.Class}{" "}
                        </li>
                        <li>
                          {" "}
                          <b>Author</b>:{product.Author}{" "}
                        </li>
                        <li>
                          {" "}
                          <b>ISBN</b>:{product.Isbn}{" "}
                        </li>
                        <li>
                          {" "}
                          <b>Subject</b>:{product.Subject}{" "}
                        </li>
                        <li>
                          {" "}
                          <b>Page</b>:{product.Page}{" "}
                        </li>
                        <li>
                          {" "}
                          <b>Publications</b>:{product.Publication}{" "}
                        </li>
                        <li>
                          
                          {
                               product.Description? (
                                <>
                                <b>Description</b>
                                {
                                    isExpanded ? (
                                      <>
                                      <span>{product?.Description?.slice(0,product?.Description?.indexOf("Key"))}</span>
                                      <div className="p-4">
                                        
                                       <b > Key Features :</b> 
                                       <ul className="p-4">
                                        {
                                          product?.Description.slice(0,product.Description.indexOf("Key")).split(".").filter((e)=>e.trim()).map((e,index)=>{
                                            return <li key={index}><b>•</b> {e}.</li>
                                          }
                                          
                                          )
                                        }
                                        </ul>
                                        </div>
                                     </>
                                    ) : (
                                      <>
                                      <span> {product?.Description?.slice(0,product?.Description?.indexOf("Key"))}</span> 
                                    </>
                                    )
                                }

                                </>
                               ):(<>
                               </>)
                        
                        }
                    
                        </li> 
                        {
                         product.Description?(
                          <button onClick={(e) =>{ 
                            
                            setIsExpanded(!isExpanded)
                          }}>
                            {" "}
                            {isExpanded ? (
                              <span className="text-blue-600">...Read Less</span>
                            ) : (
                              <span className="text-blue-600">..Read more</span>
                            )}
                          </button>
                         ):(<></>)
                        
                          }
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ):(<>
          </>)
        }
     
        </>
      )}
    </>
  );
}

export default SingleBookpage;
