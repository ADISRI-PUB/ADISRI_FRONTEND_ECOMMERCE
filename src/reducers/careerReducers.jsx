//careerReducer
import { 
    CAREER_LIST_SUCCESS,
    CAREER_LIST_REQUEST,
    CAREER_LIST_FAIL,

    CAREER_DETAILS_REQUEST,
    CAREER_DETAILS_SUCCESS,
    CAREER_DETAILS_FAIL,
 } from '../constants/careerConstants'


export const careerListReducers = (state ={careers:[]},action)=>{

    switch(action.type){

        case CAREER_LIST_REQUEST:
            return {loading: true , careers: []}

        case CAREER_LIST_SUCCESS:
            return {loading: false, careers:action.payload}

        case CAREER_LIST_FAIL:
            return {loading :false ,error:action.payload}

        default:
            return state

    }
}

export const careerDetailsReducers = (state ={career:[]},action)  =>{
    switch(action.type){

        case CAREER_DETAILS_REQUEST:
            return{loading:true,...state}

        case CAREER_DETAILS_SUCCESS:
            return {loading:false,career:action.payload}

        case CAREER_DETAILS_FAIL:
            return {loading:false,error:action.payload}
            
        default: return state
    }
}

