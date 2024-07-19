//store 
import {createStore,combineReducers,applyMiddleware} from 'redux';
import  {thunk}  from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { careerListReducers,careerDetailsReducers } from './reducers/careerReducers'
import { productDetailsReducers,productListReducers } from './reducers/ProductsReducers'
import { cartReducer } from './reducers/CartReducers'




const reducer = combineReducers({
    //CAREES
    careerList: careerListReducers,
    careerDetails:careerDetailsReducers,
    //PRODUCTS
    productList: productListReducers,
    productDetails:productDetailsReducers,
    //CART
    cart:cartReducer,

})

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
       JSON.parse(localStorage.getItem('cartItems')) :[]



const initialState ={
        cart :{cartItems : cartItemsFromStorage}}


const middleware = [thunk]

const store= createStore(reducer, initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store