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
  productListOnetoeightReducer,
  productListDetailOnetoeightReducer
} from "./reducers/ProductsReducers";
import { cartReducer } from "./reducers/CartReducers";
import { userReducer } from "./reducers/UserReducer";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderAllDetailsReducer,
  orderDeleteReducer,
} from "./reducers/OrderReducers";

const reducer = combineReducers({
  //CAREES
  careerList: careerListReducers,
  careerDetails: careerDetailsReducers,
  //PRODUCTS
  productList: productListReducers,
  productDetails: productDetailsReducers,
  ProductOnetoeight:productListOnetoeightReducer,
  ProductsDonetoeight:productListDetailOnetoeightReducer,
  
  //CART
  cart: cartReducer,
  user: userReducer,
  //Order
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderAllDetails:orderAllDetailsReducer,
  orderDelete:orderDeleteReducer,
  //User
  // addLogin:addLoginData
});

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const shippingAddressfromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

//   ANKUSH WORK
const PreUserProfile = localStorage.getItem("profile")
  ? JSON.parse(localStorage.getItem("profile"))
  : {};
const Pretoken = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token"))
  : "";
// const userInfoFromStorage = localStorage.getItem('userInfo') ?
//        JSON.parse(localStorage.getItem('userInfo')) :null

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressfromStorage,
  },
  // ANKUSH WORK//////////////////////////////////////////////////////////////////////////////////////////////////////////////
  user: {
    userprofile: PreUserProfile,
    token: Pretoken,
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
