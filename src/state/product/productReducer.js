import {
  SET_LOADING,
  PRODUCT_ERROR,
  GET_PRODUCTS_BY_CATEGORY,
  ADD_PRODUCT,
  FORM_LOADING,
  GET_PRODUCT,
  UPDATE_PRODUCT,
  ADD_PRODUCT_IMAGE,
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  GET_BASKET,
  REMOVE_BASKET
} from "../types";

const initialState = {
  products: null,
  product: null,
  loading: true,
  productError: null,
  formLoading: false,
  basket: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        productError: action.payload
      };
    case GET_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        loading: false,
        products: action.payload[1].filter(
          product => product.category === action.payload[0]
        )
      };
    case ADD_PRODUCT:
      return {
        ...state,
        formLoading: false,
        product: action.payload
      };
    case GET_PRODUCT:
      return {
        ...state,
        loading: false,
        product: action.payload
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        loading: false,
        formLoading: false,
        product: action.payload
      };
    case ADD_PRODUCT_IMAGE:
      return {
        ...state,
        loading: false,
        formLoading: false
      };
    case FORM_LOADING:
      return {
        ...state,
        formLoading: true
      };
    case ADD_TO_BASKET:
      return {
        ...state
      };
    case REMOVE_FROM_BASKET:
      return {
        ...state
      };
    case GET_BASKET:
      return {
        ...state
      };
    case REMOVE_BASKET: {
      return {
        ...state
      };
    }
    default:
      return state;
  }
};
