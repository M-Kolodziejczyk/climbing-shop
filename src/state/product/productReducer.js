import { SET_LOADING } from "../types";

const initialState = {
  products: null,
  product: null,
  loading: false,
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

    default:
      return state;
  }
};
