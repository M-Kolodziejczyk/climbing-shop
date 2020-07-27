import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  SET_LOADING,
  CLEAR_ERRORS,
  USER_LOADED,
  USER_LOGOUT,
  AUTH_ERROR,
  UPDATE_USER,
  UPDATE_ADDRESS,
  CHANGE_USER_PASSWORD,
  FORGOT_PASSWORD
} from "../types";

const initialState = {
  user: null,
  registerUser: null,
  isRegister: false,
  loading: false,
  isAuthenticated: false,
  authError: null,
  changePassword: null,
  forgotPasswordSuccess: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isRegister: true,
        loading: false,
        registerUser: action.payload,
        authError: null
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.attributes,
        isAuthenticated: true,
        loading: false,
        authError: null
      };
    case USER_LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        loading: false,
        authError: null
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case CHANGE_USER_PASSWORD:
      return {
        ...state,
        loading: false,
        changePassword: action.payload
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        authError: null
      };
    case USER_LOADED:
      return {
        ...state,
        user: action.payload.attributes,
        isAuthenticated: true,
        loading: false
      };
    case AUTH_ERROR:
      return {
        ...state,
        authError: action.payload.message,
        loading: false
      };
    case UPDATE_USER:
      return {
        ...state,
        loading: false,
        user: action.payload.attributes
      };
    case UPDATE_ADDRESS:
      return {
        ...state,
        loading: false,
        user: action.payload.attributes
      };
    case FORGOT_PASSWORD:
      return {
        ...state,
        forgotPasswordSuccess: true,
        loading: false
      };
    default:
      return state;
  }
};
