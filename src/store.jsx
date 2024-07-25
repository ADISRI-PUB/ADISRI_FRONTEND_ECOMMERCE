//store
import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  careerListReducers,
  careerDetailsReducers,
} from "./reducers/careerReducers";
import {
  productDetailsReducers,
  productListReducers,
} from "./reducers/ProductsReducers";
import { cartReducer } from "./reducers/CartReducers";

// import { addLoginData } from './reducers/UserReducers'

const reducer = combineReducers({
  //CAREES
  careerList: careerListReducers,
  careerDetails: careerDetailsReducers,
  //PRODUCTS
  productList: productListReducers,
  productDetails: productDetailsReducers,

  //CART
  cart: cartReducer,

  //User
  // addLogin:addLoginData
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

// const userInfoFromStorage = localStorage.getItem('userInfo') ?
//        JSON.parse(localStorage.getItem('userInfo')) :null

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
