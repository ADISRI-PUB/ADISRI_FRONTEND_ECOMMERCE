import axios from 'axios'
import emailjs from '@emailjs/browser';
import { 
    ORDER_CREATE_FAIL,
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS ,

    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,

    ORDER_ALL_DETAILS_REQUEST,
    ORDER_ALL_DETAILS_SUCCESS,
    ORDER_ALL_DETAILS_FAIL,

    ORDER_DELETE_REQUEST,
    ORDER_DELETE_SUCCESS,
    ORDER_DELETE_FAIL,
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
  const orderItems = [];
  data2.orderItems.map((products,index)=>{
    orderItems.push({
       Name:products.Name,
       Quantity:products.Qty ,
       ProdcutId:products.product 
    })
  })
//   console.log(data2);
  
  let orderDetailsmail = '';
  orderItems.forEach((item, index) => {
    orderDetailsmail  += `Item ${index + 1}:  ,`;
    orderDetailsmail  += ` Product Name: ${item.Name} `;
    orderDetailsmail  += ` Quantity: ${item.Quantity}  -----------------`
    orderDetailsmail +=`ProductId : ${item.ProdcutId}`;
  });
  let shipping  =`${data2.shippingAddress.Address},${data2.shippingAddress.City}-${data2.shippingAddress.PostalCode}`
  
  const emailParams = {
     name: data2.user.name,
     email: data2.user.email,
     phone:data2.shippingAddress.Phone_Number,
     school_name:data2.shippingAddress.School_name,
    order_details: orderDetailsmail,
    shipping:shipping,
    OrderId:data2.Order_Id,
    Total_Price:data2.Total_Price,
  };  
  emailjs.init({
    publicKey: "JTJgKyyYcrVSeMq_m",
  });   
//    console.log(emailParams);
  emailjs.send('service_cgmvlif', 'template_ias4gas', emailParams)
  .then(function(response) {
     console.log('Email sent successfully!', response.status, response.text);
    //  alert('Your order has been submitted successfully!');
  }, function(error) {
     console.error('Failed to send email.', error);
    //  alert('There was an error sending your order. Please try later.');
  }); 
  emailjs.send('service_cgmvlif', 'template_rvpqnht', emailParams)
  .then(function(response) {
     console.log('Email sent successfully!', response.status, response.text);
    //  alert('Your order has been submitted successfully!');
  }, function(error) {
     console.error('Failed to send email.', error);
    //  alert('There was an error sending your order. Please try later.');
  });
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




export const getAllOrderDetails =()=> async (dispatch,getState) => {
    try{
        dispatch({
            type : ORDER_ALL_DETAILS_REQUEST
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
            `${BASE_URL}/data/order/all/`,
            config
        )

        //  console.log(data);
        
        const access = token
        const data2 ={
            ...data,
            access:access,

        }

        dispatch({
            type : ORDER_ALL_DETAILS_SUCCESS,
            payload : data2
        })

    
    }
    catch(error){
        dispatch({type : ORDER_ALL_DETAILS_FAIL,
                  payload : error.response && error.response.data.detail
                  ?error.response.data.detail
                  :error.message
    })
    }
}




export const deleteorderid =(id)=> async (dispatch,getState) => {
    try{
        dispatch({
            type : ORDER_DELETE_REQUEST
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
        const {data} = await axios.delete( 
            `${BASE_URL}/data/order/delete/${id}`,
            config
        )
        const access = token
        const data2 ={
            ...data,
            access:access,

        }

        dispatch({
            type : ORDER_DELETE_SUCCESS,
            payload : data2
        })

    
    }
    catch(error){
        dispatch({type : ORDER_DELETE_FAIL,
                  payload : error.response && error.response.data.detail
                  ?error.response.data.detail
                  :error.message
    })
    }
}

