import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  SET_LOADING,
  CLEAR_ERRORS,
  USER_LOADED,
  USER_LOGOUT,
  AUTH_ERROR
} from "../types";

const initialState = {
  user: null,
  isRegister: false,
  loading: false,
  isAuthenticated: false,
  authError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isRegister: true,
        loading: false,
        user: action.payload,
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
        authError: action.payload
      };
    default:
      return state;
  }
};
