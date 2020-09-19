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
  REMOVE_BASKET,
  BASKET_LOADING,
  BASKET_ERROR,
  ORDER_ERROR,
  ORDER_LOADING,
  ADD_TO_ORDER,
  GET_ORDER,
  ADD_TO_USER,
  USER_LOADING,
  USER_ERROR,
  GET_USER
} from "../types";

const initialState = {
  products: null,
  product: null,
  loading: true,
  productError: null,
  formLoading: false,
  basketLoading: false,
  basketError: null,
  basket: null,
  order: null,
  orderLoading: false,
  orderError: null,
  user: null,
  userError: null,
  userLoading: false,
  orderSuccess: false,
  productToBasketSuccess: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
        productToBasketSuccess: false
      };
    case PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        product: null,
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
        ...state,
        basketLoading: false,
        basket: action.payload,
        productToBasketSuccess: true
      };
    case REMOVE_FROM_BASKET:
      return {
        ...state,
        basket: action.payload,
        basketLoading: false
      };
    case GET_BASKET:
      return {
        ...state,
        basket: action.payload.basket,
        basketLoading: false
      };
    case REMOVE_BASKET: {
      return {
        ...state,
        basket: null,
        basketLoading: false
      };
    }
    case BASKET_LOADING: {
      return {
        ...state,
        productToBasketSuccess: false,
        basketLoading: true
      };
    }
    case BASKET_ERROR:
      return {
        ...state,
        basketLoading: false,
        basketError: action.payload
      };
    case ADD_TO_ORDER:
      return {
        ...state,
        order: action.payload,
        orderSuccess: true,
        orderLoading: false
      };
    case ORDER_LOADING:
      return {
        ...state,
        orderLoading: true
      };
    case ORDER_ERROR:
      return {
        ...state,
        orderError: action.payload,
        orderLoading: false,
        orderSuccess: false
      };
    case GET_USER: {
      return {
        ...state,
        user: action.payload,
        userLoading: false
      };
    }
    case ADD_TO_USER: {
      return {
        ...state,
        user: action.payload,
        userLoading: false
      };
    }
    case USER_LOADING:
      return {
        ...state,
        userLoading: true
      };
    case USER_ERROR:
      return {
        ...state,
        userLoaing: false,
        userError: action.payload
      };
    default:
      return state;
  }
};
