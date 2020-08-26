import {
  SET_LOADING,
  PRODUCT_ERROR,
  GET_ALL_PRODUCTS,
  ADD_PRODUCT,
  FORM_LOADING,
  GET_PRODUCT,
  UPDATE_PRODUCT,
  ADD_PRODUCT_IMAGE
} from "../types";

const initialState = {
  products: null,
  product: null,
  loading: true,
  productError: null,
  formLoading: false
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
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        loading: false,
        products: action.payload
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
    default:
      return state;
  }
};
