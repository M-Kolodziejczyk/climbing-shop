import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SET_LOADING,
  CLEAR_ERRORS
} from "../types";

const initialState = {
  user: null,
  isRegister: false,
  loading: false,
  authError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isRegister: true,
        loading: false,
        user: action.payload
      };
    case REGISTER_FAIL:
      return {
        ...state,
        authError: action.payload
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload
      };
    case LOGIN_FAIL:
      return {
        ...state,
        authError: action.payload
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
    default:
      return state;
  }
};
