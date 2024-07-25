//careerAction 
import axios from 'axios'
  
import { 
    PRODUCTS_LIST_SUCCESS,
    PRODUCTS_LIST_REQUEST,
    PRODUCTS_LIST_FAIL,

    PRODUCTS_DETAILS_REQUEST,
    PRODUCTS_DETAILS_SUCCESS,
    PRODUCTS_DETAILS_FAIL,
 } from '../constants/ProductsConstants'


export const listProducts =()=> async (dispatch)=>{
    try{
        dispatch({type :PRODUCTS_LIST_REQUEST})

        const {data} = await axios.get('/products/product/?')
    //    console.log(data);
        dispatch({
            type : PRODUCTS_LIST_SUCCESS,
            payload : data
           
        })

 
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
        const {data}= await axios.get(`/products/${id}`)
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