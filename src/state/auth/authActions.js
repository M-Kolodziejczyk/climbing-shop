import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  SET_LOADING,
  CLEAR_ERRORS,
  USER_LOADED,
  USER_LOGOUT,
  AUTH_ERROR
} from "../types";
import { Auth } from "aws-amplify";

export const registerUser = user => async dispatch => {
  try {
    dispatch(setLoading());

    await Auth.signUp({
      username: user.email,
      password: user.password,
      attributes: {
        "custom:firstName": user.firstName,
        "custom:lastName": user.lastName
      }
    });

    dispatch({
      type: REGISTER_SUCCESS,
      payload: user
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error
    });
  }
};

export const loginUser = user => async dispatch => {
  try {
    dispatch(setLoading());

    const data = await Auth.signIn(user.email, user.password);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error
    });
  }
};

export const userLogout = () => async dispatch => {
  try {
    dispatch(setLoading());

    await Auth.signOut();

    dispatch({
      type: USER_LOGOUT
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error
    });
  }
};

export const loadUser = () => async dispatch => {
  try {
    dispatch(setLoading());

    await Auth.currentSession();
    const res = await Auth.currentAuthenticatedUser();

    dispatch({
      type: USER_LOADED,
      payload: res
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

export const clearErros = () => {
  return {
    type: CLEAR_ERRORS
  };
};
