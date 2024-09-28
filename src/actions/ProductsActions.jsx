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
    PRODUCTS_ONETOEIGHT_LIST_SUCCESS,


    PRODUCTS_FILTER_LIST_REQUEST,
    PRODUCTS_FILTER_LIST_FAIL,
    PRODUCTS_FILTER_LIST_SUCCESS,

    PRODUCTS_BOOK_IN_SERIES_REQUEST,
    PRODUCTS_BOOK_IN_SERIES_FAIL,
    PRODUCTS_BOOK_IN_SERIES_SUCCESS,

    PRODUCTS_RELATED_BOOK_FAIL,
    PRODUCTS_RELATED_BOOK_REQUEST,
    PRODUCTS_RELATED_BOOK_SUCCESS,

    PRODUCTS_ONETOEIGHT_FILTER_LIST_FAIL,
    PRODUCTS_ONETOEIGHT_FILTER_LIST_SUCCESS,
    PRODUCTS_ONETOEIGHT_FILTER_LIST_REQUEST,

    PRODUCTS_PAMPLATES_FILTER_FAIL,
    PRODUCTS_PAMPLATES_FILTER_REQUEST,
    PRODUCTS_PAMPLATES_FILTER_SUCCESS,
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
        // const formattedTitle = id.replace(/\s+/g, "%")


        dispatch({type : PRODUCTS_DETAILS_REQUEST})
    //    console.log(`${BASE_URL}/data/products/${formattedTitle}`)
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
            // console.log(data);
            dispatch({type:PRODUCTS_ONETOEIGHT_DETAILS_SUCCESS,payload:data})
         } catch (error) {
            dispatch({type:PRODUCTS_ONETOEIGHT_DETAILS_FAIL,payload:error.response && error.response.data.details ?error.response.data.detail:error.message})
         }
}


export const filterBook=(api)=>async(dispatch)=>{
    try {
        dispatch({type:PRODUCTS_FILTER_LIST_REQUEST})
        const {data} =await axios.get(`${BASE_URL}/data/products/product/?${api}`)
        dispatch({type: PRODUCTS_FILTER_LIST_SUCCESS,payload:{data,api}})
    } catch (error) {
     dispatch({type: PRODUCTS_FILTER_LIST_FAIL,payload:error.response && error.response.data.details ?error.response.data.details:error.message});
    }
}

export const filterOnetoEightBook=(api)=>async(dispatch)=>{
    try {
        dispatch({type:PRODUCTS_ONETOEIGHT_FILTER_LIST_REQUEST})
        const {data} = await axios.get(`${BASE_URL}/data/products/onetoeight/?${api}`);
        dispatch({type: PRODUCTS_ONETOEIGHT_FILTER_LIST_SUCCESS,payload:{data,api}});
    } catch (error) {
        dispatch({type:PRODUCTS_ONETOEIGHT_FILTER_LIST_FAIL,payload:error.response && error.response.data.details?error.response.data.details:error.message})
    }
}

export const filterPamplatesBook=(api)=>async(dispatch)=>{
    try {
        dispatch({type:PRODUCTS_PAMPLATES_FILTER_REQUEST})
        const {data} = await axios.get(`${BASE_URL}/data/products/pamplates/?${api}`);
        dispatch({type: PRODUCTS_PAMPLATES_FILTER_SUCCESS,payload:{data,api}});
    } catch (error) {
        dispatch({type:PRODUCTS_PAMPLATES_FILTER_FAIL,payload:error.response && error.response.data.details?error.response.data.details:error.message})
    }
}



export const bookInThisSeries=(api)=>async(dispatch)=>{
    try {
        dispatch({type:PRODUCTS_BOOK_IN_SERIES_REQUEST})
        const {data} = await axios.get(`${BASE_URL}/data/products/bookseries/${api}`);
        dispatch({type: PRODUCTS_BOOK_IN_SERIES_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:PRODUCTS_BOOK_IN_SERIES_FAIL,payload:error.response && error.response.data.details?error.response.data.details:error.message})
    }
}

export const relatedBooks=(api)=>async(dispatch)=>{
    try {
        dispatch({type:PRODUCTS_RELATED_BOOK_REQUEST})
        const {data} = await axios.get(`${BASE_URL}/data/products/relatedBook/${api}`);
        dispatch({type: PRODUCTS_RELATED_BOOK_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:PRODUCTS_RELATED_BOOK_FAIL,payload:error.response && error.response.data.details?error.response.data.details:error.message})
    }
}
