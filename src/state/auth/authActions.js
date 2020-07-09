import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  SET_LOADING,
  CLEAR_ERRORS
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
