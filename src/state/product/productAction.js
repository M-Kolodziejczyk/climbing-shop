import {
  REGISTER_SUCCESS,
  SET_LOADING,
  PRODUCT_ERROR,
  GET_ALL_PRODUCTS
} from "../types";
import axios from "axios";

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

export const getAllProduct = async dispatch => {
  try {
    const res = await axios.get(`${config.api.invokeUrl}/products`);
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: error
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
