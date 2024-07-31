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
import { userReducer } from "./reducers/UserReducer";
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
  user:userReducer
  //User
  // addLogin:addLoginData
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : []; 
  
//   ANKUSH WORK
const PreUserProfile =localStorage.getItem('profile')?JSON.parse(localStorage.getItem('profile')):{};
const Pretoken =localStorage.getItem('token')?JSON.parse(localStorage.getItem('token')):'';
// const userInfoFromStorage = localStorage.getItem('userInfo') ?
//        JSON.parse(localStorage.getItem('userInfo')) :null

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
// ANKUSH WORK//////////////////////////////////////////////////////////////////////////////////////////////////////////////
  user:{
    
       userprofile :PreUserProfile,
         token :Pretoken 
  }
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
