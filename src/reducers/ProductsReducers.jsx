//careerReducer
import {
  PRODUCTS_LIST_SUCCESS,
  PRODUCTS_LIST_REQUEST,
  PRODUCTS_LIST_FAIL,


  PRODUCTS_DETAILS_REQUEST,
  PRODUCTS_DETAILS_SUCCESS,
  PRODUCTS_DETAILS_FAIL,


  PRODUCTS_ONETOEIGHT_LIST_FAIL,
  PRODUCTS_ONETOEIGHT_LIST_REQUEST,
  PRODUCTS_ONETOEIGHT_LIST_SUCCESS,


  PRODUCTS_ONETOEIGHT_DETAILS_FAIL,
  PRODUCTS_ONETOEIGHT_DETAILS_SUCCESS,
  PRODUCTS_ONETOEIGHT_DETAILS_REQUEST,


  PRODUCTS_FILTER_LIST_FAIL,
  PRODUCTS_FILTER_LIST_SUCCESS,
  PRODUCTS_FILTER_LIST_REQUEST,


  PRODUCTS_ONETOEIGHT_FILTER_LIST_REQUEST,
  PRODUCTS_ONETOEIGHT_FILTER_LIST_SUCCESS,
  PRODUCTS_ONETOEIGHT_FILTER_LIST_FAIL,

  PRODUCTS_BOOK_IN_SERIES_FAIL,
  PRODUCTS_BOOK_IN_SERIES_REQUEST,
  PRODUCTS_BOOK_IN_SERIES_SUCCESS,

  PRODUCTS_RELATED_BOOK_FAIL,
  PRODUCTS_RELATED_BOOK_REQUEST,
  PRODUCTS_RELATED_BOOK_SUCCESS,

  PRODUCTS_PAMPLATES_FILTER_FAIL,
  PRODUCTS_PAMPLATES_FILTER_REQUEST,
  PRODUCTS_PAMPLATES_FILTER_SUCCESS,

  
} from "../constants/ProductsConstants";

export const productListReducers = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCTS_LIST_REQUEST:
      return { loading: true, products: [] };

    case PRODUCTS_LIST_SUCCESS:
      return { loading: false, products: action.payload };

    case PRODUCTS_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};


export const productDetailsReducers = (state = { product: [] }, action) => {
  switch (action.type) {
    case PRODUCTS_DETAILS_REQUEST:
      return { loading: true, ...state };

    case PRODUCTS_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };

    case PRODUCTS_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};



export const productListOnetoeightReducer = (
  state = { productonetoeight: [] },
  action
) => {
  switch (action.type) {
    case PRODUCTS_ONETOEIGHT_LIST_REQUEST:
      return { loading: true, ...state };
    case PRODUCTS_ONETOEIGHT_LIST_SUCCESS:
      return { loading: false, productonetoeight: action.payload };
    case PRODUCTS_ONETOEIGHT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};



export const productListDetailOnetoeightReducer = (
  state = { productDonetoeight: [] },
  action
) => {
  switch (action.type) {
    case PRODUCTS_ONETOEIGHT_DETAILS_REQUEST:
      return { loading: true, ...state };
    case PRODUCTS_ONETOEIGHT_DETAILS_SUCCESS:
      return { loading: false, productonetoeight: action.payload };
    case PRODUCTS_ONETOEIGHT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productFilterReducer = (state = { filterproducts: [],api:'' }, action) => {
  switch (action.type) {
    case PRODUCTS_FILTER_LIST_REQUEST:
      return { loading: true, filterproducts: [] ,api:'' };
      
    case PRODUCTS_FILTER_LIST_SUCCESS:
      return { loading: false, filterproducts: action.payload.data,api: action.payload.api};
      
    case PRODUCTS_FILTER_LIST_FAIL:
      return { loading: false, error: action.payload };
      
    default:  
    return state;
  }
}


export const productPamplatesFilterReducer = (state = { Pamplatesfilterproducts: [],api1:'' }, action) => {
  switch (action.type) {
    case PRODUCTS_PAMPLATES_FILTER_REQUEST:
      return { loading: true, Pamplatesfilterproducts: [] ,api1:'' };
      
    case PRODUCTS_PAMPLATES_FILTER_SUCCESS:
      return { loading: false, Pamplatesfilterproducts: action.payload.data,api: action.payload.api};
      
    case PRODUCTS_PAMPLATES_FILTER_FAIL:
      return { loading: false, error: action.payload };
      
    default:  
    return state;
  }
}


export const productOnetoeightFilter=(state={filterOnetoeight:[],api:''},action)=>{
  switch (action.type) {
    case PRODUCTS_ONETOEIGHT_FILTER_LIST_REQUEST:
      return { loading: true, filterOnetoeight: [] ,api:'' };
      
    case PRODUCTS_ONETOEIGHT_FILTER_LIST_SUCCESS:
      return { loading: false, filterOnetoeight: action.payload.data,api: action.payload.api};
      
    case PRODUCTS_ONETOEIGHT_FILTER_LIST_FAIL:
      return { loading: false, error: action.payload };
      
    default:  
    return state;
  }  
}


export const bookSeriesReducer=(state={bookInSeries:[]},action)=>{
  switch (action.type) {
    case PRODUCTS_BOOK_IN_SERIES_REQUEST:
      return { loading: true, bookInSeries: []  };
      
    case PRODUCTS_BOOK_IN_SERIES_SUCCESS:
      return { loading: false, bookInSeries: action.payload};
      
    case PRODUCTS_BOOK_IN_SERIES_FAIL:
      return { loading: false, error: action.payload };
      
    default:  
    return state;
  }  
}





export const relatedBookReducer=(state={related:[]},action)=>{
  switch (action.type) {
    case  PRODUCTS_RELATED_BOOK_REQUEST:
      return { loading: true, related: []  };
      
    case PRODUCTS_RELATED_BOOK_SUCCESS:
      return { loading: false, related: action.payload};
      
    case PRODUCTS_RELATED_BOOK_FAIL:
      return { loading: false, error: action.payload };
      
    default:  
    return state;
  }  
}

