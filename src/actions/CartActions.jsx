//cartAction.js
import axios from 'axios'

import { CART_ADD_ITEM ,
         CART_REMOVE_ITEM,
    } from '../constants/CartConstants'


export const addToCart =(id,qty)=>async(dispatch,getState)=>{
    const {data}=await axios.get(`http://localhost:8000/products/${id}`)
    console.log('fetch APi Data ',data)

    dispatch({
        type: CART_ADD_ITEM,
        payload:{
            product:data.Book_Id,
            name :data.Name,
            image :data.Cover_Image,
            price : data.Price,
            qty

        }
    })

    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}



export const removeFromCart = (id) =>(dispatch,getState)=>{
    dispatch({
        type : CART_REMOVE_ITEM,
        payload : id,

    })

    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))

}
