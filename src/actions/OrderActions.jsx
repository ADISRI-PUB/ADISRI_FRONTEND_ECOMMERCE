import axios from 'axios'
import { 
    ORDER_CREATE_FAIL,
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS ,

    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,
} from '../constants/OrderConstants'
import { CART_CLEAR_ITEMS } from '../constants/CartConstants'
const BASE_URL = import.meta.env.VITE_URL 

export const createOrder =(order)=> async (dispatch,getState) => {
    
    try{
        dispatch({
            type : ORDER_CREATE_REQUEST
        })

        const {
            user : {token},
            
        }=getState()
        const config = {
            headers :{
                'Content-type' : 'application/json',
                'Authorization' :  `Bearer ${token}`
            }
        }
        const {data} = await axios.post(
            `${BASE_URL}/data/order/add/`,
            order,
            config
        )
        const access = token

        const data2 ={
            ...data,
            access:access,

        }

        dispatch({
            type : ORDER_CREATE_SUCCESS,
            payload : data2
        })

        dispatch({
            type : CART_CLEAR_ITEMS,
            payload : data2
        })

        localStorage.removeItem('cartItems')
    
    }
    catch(error){
        dispatch({type : ORDER_CREATE_FAIL,
                  payload : error.response && error.response.data.detail
                  ?error.response.data.detail
                  :error.message
    })
    }
}



export const getOrderDetails =(id)=> async (dispatch,getState) => {
    
    try{
        dispatch({
            type : ORDER_DETAILS_REQUEST
        })

        const {
            user : {token },
        }=getState()

        const config = {
            headers :{
                'Content-type' : 'application/json',
                'Authorization' :  `Bearer ${token}`
            }
        }
        const {data} = await axios.get( 
            `${BASE_URL}/data/order/${id}/`,
            config
        )
        const access = token
        const data2 ={
            ...data,
            access:access,

        }

        dispatch({
            type : ORDER_DETAILS_SUCCESS,
            payload : data2
        })

    
    }
    catch(error){
        dispatch({type : ORDER_DETAILS_FAIL,
                  payload : error.response && error.response.data.detail
                  ?error.response.data.detail
                  :error.message
    })
    }
}
