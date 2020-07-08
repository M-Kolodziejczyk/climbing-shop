import { REGISTER_SUCCESS, REGISTER_FAIL, SET_LOADING } from "../types";
import { Auth } from "aws-amplify";

export const registerUser = user => async dispatch => {
  try {
    setLoading();
    const data = await Auth.signUp({
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
    let err = null;
    !error.message ? (err = { message: error }) : (err = error);
    console.log("Error: ", err);
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
