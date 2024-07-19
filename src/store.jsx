//store 
import {createStore,combineReducers,applyMiddleware} from 'redux'
import  {thunk}  from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { careerListReducers,careerDetailsReducers } from './reducers/careerReducers'
import { productDetailsReducers,productListReducers } from './reducers/ProductsReducers'
import { addLoginData } from './reducers/UserReducers'



const reducer = combineReducers({
    //CAREES
    careerList: careerListReducers,
    careerDetails:careerDetailsReducers,
    //PRODUCTS
    productList: productListReducers,
    productDetails:productDetailsReducers,
    //User
    addLogin:addLoginData

})


const userInfoFromStorage = localStorage.getItem('userInfo') ?
       JSON.parse(localStorage.getItem('userInfo')) :null

const initialState = {
    userLogin : {userInfo : userInfoFromStorage},
}

const middleware = [thunk]

const store= createStore(reducer, initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store