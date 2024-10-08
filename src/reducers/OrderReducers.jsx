import { 
    ORDER_CREATE_FAIL,
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS ,

    ORDER_CREATE_RESET,

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


export const orderDetailsReducer = (state={loading:true,orderItems:[],shippingAddress:{}},action)=>{
    switch(action.type){
        case ORDER_DETAILS_REQUEST:
            return {...state,loading : true}
        case ORDER_DETAILS_SUCCESS :
            return {loading : false, order:action.payload}
        case ORDER_DETAILS_FAIL :
            return {loading : false , error : action.payload}
        default :
            return state

    }

}



export const orderCreateReducer = (state={},action)=>{
    switch(action.type){
        case ORDER_CREATE_REQUEST:
            return {loading : true}
        case ORDER_CREATE_SUCCESS :
            return {loading : false , success : true,order:action.payload}
        case ORDER_CREATE_FAIL :
            return {loading : false , error : action.payload}
        case ORDER_CREATE_RESET :
            return {}
        default :
            return state

    }

}


export const orderDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case ORDER_DELETE_REQUEST:
            return { loading: true };
        case ORDER_DELETE_SUCCESS:
            return { loading: false, success: true };
        case ORDER_DELETE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};


export const orderAllDetailsReducer = (state={orderAll:[]},action)=>{
    switch(action.type){
        case ORDER_ALL_DETAILS_REQUEST:
            return {...state,loading : true}
        case ORDER_ALL_DETAILS_SUCCESS :
            return {loading : false, orderAll:action.payload}
        case ORDER_ALL_DETAILS_FAIL :
            return {loading : false , error : action.payload}
        default :
            return state

    }
}


