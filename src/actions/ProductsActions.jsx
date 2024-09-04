//careerAction 
import axios from 'axios'
  
import { 
    PRODUCTS_LIST_SUCCESS,
    PRODUCTS_LIST_REQUEST,
    PRODUCTS_LIST_FAIL,

    PRODUCTS_DETAILS_REQUEST,
    PRODUCTS_DETAILS_SUCCESS,
    PRODUCTS_DETAILS_FAIL,


    PRODUCTS_ONETOEIGHT_DETAILS_FAIL,
    PRODUCTS_ONETOEIGHT_DETAILS_REQUEST,
    PRODUCTS_ONETOEIGHT_DETAILS_SUCCESS,


    PRODUCTS_ONETOEIGHT_LIST_FAIL,
    PRODUCTS_ONETOEIGHT_LIST_REQUEST,
    PRODUCTS_ONETOEIGHT_LIST_SUCCESS
 } from '../constants/ProductsConstants'

const BASE_URL = import.meta.env.VITE_URL

export const listProducts =(url)=> async (dispatch)=>{
    try{
        dispatch({type :PRODUCTS_LIST_REQUEST})

        const {data} = await axios.get(`${BASE_URL}/data/products/product/?${url}`)
    //    console.log(data);
        dispatch({
            type : PRODUCTS_LIST_SUCCESS,
            payload : data
           
        })
        console.log(data);
       
 
    }catch(error){
        dispatch({
            type : PRODUCTS_LIST_FAIL,
            payload : error.response && error.response.data.detail
            ?error.response.data.detail
            :error.message


    })
}
}



export const listProductsDetails =(id)=>async(dispatch)=>{
    try{
        dispatch({type : PRODUCTS_DETAILS_REQUEST})
        const {data}= await axios.get(`${BASE_URL}/data/products/${id}`)
        dispatch({type : PRODUCTS_DETAILS_SUCCESS,
                  payload : data})
    }
    catch(error){
        dispatch({type : PRODUCTS_DETAILS_FAIL,
                  payload : error.response && error.response.data.detail
                  ?error.response.data.detail
                  :error.message
    })
    }
}



export const listonetoeight=(url)=>async (dispatch)=>{
         try {
            dispatch({type:PRODUCTS_ONETOEIGHT_LIST_REQUEST})
            const {data} =await axios.get(`${BASE_URL}/data/products/onetoeight/?${url}`)
            console.log(data);
            dispatch({type:PRODUCTS_ONETOEIGHT_LIST_SUCCESS,payload:data})
            
         } catch (error) {
            dispatch({type:PRODUCTS_ONETOEIGHT_LIST_FAIL,payload:error.response && error.response.data.details ?error.response.data.detail:error.message})
         }
}



export const listonetoeightDetails=(id)=>async (dispatch)=>{
         try {
            dispatch({type:PRODUCTS_ONETOEIGHT_DETAILS_REQUEST})
            const {data} =await axios.get(`${BASE_URL}/data/products/onetoeight/${id}`)
            console.log(data);
            dispatch({type:PRODUCTS_ONETOEIGHT_DETAILS_SUCCESS,payload:data})
         } catch (error) {
            dispatch({type:PRODUCTS_ONETOEIGHT_DETAILS_FAIL,payload:error.response && error.response.data.details ?error.response.data.detail:error.message})
         }
}