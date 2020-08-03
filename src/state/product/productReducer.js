import { SET_LOADING, PRODUCT_ERROR, GET_ALL_PRODUCTS } from "../types";

const initialState = {
  products: null,
  product: null,
  loading: true,
  productError: null
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

    default:
      return state;
  }
};
