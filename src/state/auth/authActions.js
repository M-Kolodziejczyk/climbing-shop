import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SET_LOADING,
  CLEAR_ERRORS,
  USER_LOADED
} from "../types";
import { Auth } from "aws-amplify";

export const registerUser = user => async dispatch => {
  try {
    setLoading();
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
      type: REGISTER_FAIL,
      payload: error
    });
    console.log("Error: ", error);
  }
};

export const loginUser = user => async dispatch => {
  try {
    setLoading();
    const data = await Auth.signIn(user.email, user.password);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data
    });
    loadUser();
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error
    });
  }
};

export const loadUser = () => async dispatch => {
  try {
    await Auth.currentSession();
    const res = await Auth.currentAuthenticatedUser();
    dispatch({
      type: USER_LOADED,
      payload: res
    });
  } catch (error) {
    console.log(error);
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
