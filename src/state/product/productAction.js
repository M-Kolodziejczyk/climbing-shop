import {
  SET_LOADING,
  PRODUCT_ERROR,
  GET_ALL_PRODUCTS,
  ADD_PRODUCT
} from "../types";
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

export const addProduct = (id, formData) => async dispatch => {
  dispatch(setLoading());
  try {
    const params = {
      id: id,
      producent: formData.producent
    };
    await axios.post(`${config.api.invokeUrl}/products/{id}`, params);
    dispatch({
      type: ADD_PRODUCT,
      pyload: params
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
