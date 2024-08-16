import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";

import { listProductsDetails } from "../actions/ProductsActions";
import { addToCart, removeFromCart } from "../actions/CartActions";
import Loader from "./Loader";
function SingleBookpage() {
  const dispatch = useDispatch();
  const history = useNavigate();
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

  const whitecolor = () => {
    document.querySelector("#emoji").setAttribute("fill", "#000");
  };
  const blackcolor = () => {
    document.querySelector("#emoji").setAttribute("fill", "#FFF");
  };

  const addToCartHandler = () => {
    dispatch(addToCart(id, Quantity));
    history(`/cart`);
  };

  useEffect(() => {
    dispatch(listProductsDetails(id));
  }, [dispatch, id]);

  return (
    <>
      {
        loading ?(
          <Loader/>
        ):(
        <div
          key={product.Product_Id}
          className="w-full min-h-screen bg-blue-200 flex gap-5"
        >
          <div className="font-sans bg-blue-100 w-full  ">
            <div className="p-4   mx-auto">
              <div className="grid items-start gap-10 grid-cols-2 lg:grid-cols-5   p-6 rounded-lg ">
                <div className="lg:col-span-2 max-sm:col-span-3   top-0 text-center sm:w-1/2 max-sm:w-3/4 max-sm:m-auto ">
                  <div className="px-2 py-6 rounded-lg shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative bg-white">
                    <img
                      id="frontpage"
                      className="rounded-xl "
                      src={product.Cover_Image}
                      alt="coverimage"
                    />
                    <button
                      type="button"
                      className="absolute top-4 right-4"
                    ></button>
                  </div>
                  <div className="mt-6 flex  justify-center gap-6 mx-auto  ">
                    <div
                      onClick={handleimage}
                      className="w-20 h-16 flex items-center bg-white justify-center rounded-lg p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] cursor-pointer"
                    >
                      <img
                        id="Dynamichange"
                        src={product.Cover_Image}
                        alt="Product2"
                      />
                    </div>
                    <div
                      onClick={handleimage}
                      className="w-20 h-16 flex items-center bg-white justify-center rounded-lg p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] cursor-pointer"
                    >
                      <img
                        id="Dynamichange"
                        src={product.Back_Image}
                        alt="Product2"
                      />
                    </div>
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
                      className="min-w-[200px] rounded-full px-4 py-3 bg-blue-600  hover:bg-blue-700 text-white text-sm font-semibold transition-all duration-200"
                    >
                      Add To Cart
                    </button>

                    <button
                      type="button"
                      onMouseEnter={whitecolor}
                      onMouseLeave={blackcolor}
                      className="min-w-[200px] px-4 py-2.5 border-2 flex justify-center border-white hover:bg-white hover:text-black transition-all duration-300 rounded-full  text-white text-sm font-semibold "
                    >
                      Wishlist{" "}
                      <svg
                        id="emoji"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        fill="#ffffff"
                        className="ml-3 hover:fill-[#333] transition-all duration-200"
                        viewBox="0 0 64 64"
                      >
                        <path
                          d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                          data-original="#000000"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <br />
                  <div>
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
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
      }
    </>
  );
}

export default SingleBookpage;
