//careerAction 
import axios from 'axios'
  
import { 
    CAREER_LIST_SUCCESS,
    CAREER_LIST_REQUEST,
    CAREER_LIST_FAIL,

    CAREER_DETAILS_REQUEST,
    CAREER_DETAILS_SUCCESS,
    CAREER_DETAILS_FAIL,
 } from '../constants/careerConstants'

const BASE_URL = import.meta.env.VITE_URL 


export const listCareers =()=> async (dispatch)=>{
    try{
        dispatch({type :CAREER_LIST_REQUEST})

        const {data} = await axios.get(`${BASE_URL}/data/careers/`)
        dispatch({
            type : CAREER_LIST_SUCCESS,
            payload : data
           
        })


    }catch(error){
        dispatch({
            type : CAREER_LIST_FAIL,
            payload : error.response && error.response.data.detail
            ?error.response.data.detail
            :error.message


    })
}
}



export const listCareersDetails =(id)=>async(dispatch)=>{
    try{
        dispatch({type : CAREER_DETAILS_REQUEST})
        const {data}= await axios.get(`${BASE_URL}/data/careers/${id}`)
        dispatch({type : CAREER_DETAILS_SUCCESS,
                  payload : data})
    }
    catch(error){
        dispatch({type : CAREER_DETAILS_FAIL,
                  payload : error.response && error.response.data.detail
                  ?error.response.data.detail
                  :error.message
    })
    }
}