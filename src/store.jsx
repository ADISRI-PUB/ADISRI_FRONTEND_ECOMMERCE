//store 
import {createStore,combineReducers,applyMiddleware} from 'redux';
import  {thunk}  from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { careerListReducers,careerDetailsReducers } from './reducers/careerReducers'

const reducer = combineReducers({
    careerList: careerListReducers,
    careerDetails:careerDetailsReducers,

})

const initialState = {

}

const middleware = [thunk]

const store= createStore(reducer, initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store