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
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_VERIFICATION,
  GOOGLE_LOGIN,
  CLEAN_FORGOT_PASSWORD,
  LOGIN_ERROR
} from "../types";

const initialState = {
  user: null,
  registerName: null,
  isRegister: false,
  loading: false,
  loadingUser: true,
  isAuthenticated: false,
  authError: null,
  changePassword: null,
  forgotPasswordSuccess: false,
  userGroups: [""]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isRegister: true,
        loading: false,
        registerName: action.payload.firstName,
        authError: null
      };
    case LOGIN_SUCCESS:
    case GOOGLE_LOGIN:
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
        userGroups:
          action.payload.signInUserSession.accessToken.payload[
            "cognito:groups"
          ],
        isAuthenticated: true,
        loading: false,
        loadingUser: false
      };
    case AUTH_ERROR:
    case LOGIN_ERROR:
      return {
        ...state,
        authError: action.payload.message,
        loading: false,
        loadingUser: false
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
    case FORGOT_PASSWORD_VERIFICATION:
      return {
        ...state,
        changePassword: true,
        loading: false
      };
    case CLEAN_FORGOT_PASSWORD:
      return {
        ...state,
        forgotPasswordSuccess: false
      };
    default:
      return state;
  }
};
