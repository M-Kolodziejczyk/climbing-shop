import { SET_LOADING, PRODUCT_ERROR, GET_ALL_PRODUCTS } from "../types";
import axios from "axios";
import config from "../../config";

export const getAllProduct = () => async dispatch => {
  dispatch(setLoading());
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
