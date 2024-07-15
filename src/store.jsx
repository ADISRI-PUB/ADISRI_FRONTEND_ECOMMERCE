//store 
import {createStore,combineReducers,applyMiddleware} from 'redux';
import  {thunk}  from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { careerListReducers,careerDetailsReducers } from './reducers/careerReducers'
import { productDetailsReducers,productListReducers } from './reducers/ProductsReducers'



const reducer = combineReducers({
    //CAREES
    careerList: careerListReducers,
    careerDetails:careerDetailsReducers,
    //PRODUCTS
    productList: productListReducers,
    productDetails:productDetailsReducers,

})



const initialState = {
    
}

const middleware = [thunk]

const store= createStore(reducer, initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store