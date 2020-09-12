import {
  SET_LOADING,
  PRODUCT_ERROR,
  GET_PRODUCTS_BY_CATEGORY,
  ADD_PRODUCT,
  FORM_LOADING,
  GET_PRODUCT,
  UPDATE_PRODUCT,
  ADD_PRODUCT_IMAGE,
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  GET_BASKET,
  REMOVE_BASKET,
  BASKET_ERROR,
  BASKET_LOADING
} from "../types";
import axios from "axios";
import { Storage } from "aws-amplify";
import config from "../../config";

export const getProductsByCategory = category => async dispatch => {
  dispatch(setLoading());
  try {
    const res = await axios.get(`${config.api.invokeUrl}/products`);
    dispatch({
      type: GET_PRODUCTS_BY_CATEGORY,
      payload: [category, res.data]
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: error
    });
  }
};

export const addProduct = product => async dispatch => {
  dispatch(setFormLoading());
  try {
    await axios.post(`${config.api.invokeUrl}/products/${product.id}`, product);
    dispatch({
      type: ADD_PRODUCT,
      payload: product
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: error
    });
  }
};

export const getProduct = id => async dispatch => {
  dispatch(setLoading());
  try {
    const res = await axios.get(`${config.api.invokeUrl}/products/${id}/`);
    dispatch({
      type: GET_PRODUCT,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: error
    });
  }
};

export const updateProduct = product => async dispatch => {
  dispatch(setLoading());
  try {
    await axios.patch(
      `${config.api.invokeUrl}/products/${product.id}/`,
      product
    );
    dispatch({
      type: UPDATE_PRODUCT,
      payload: product
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: error
    });
  }
};

export const addProductImage = (id, image) => async dispatch => {
  dispatch(setLoading());
  try {
    const res = await Storage.put(`product-image/${id}/1.jpg`, image);
    dispatch({
      type: ADD_PRODUCT_IMAGE,
      payload: res
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: error
    });
  }
};

export const addToBasket = data => async dispatch => {
  dispatch(setBasketLoading());

  try {
    await axios.post(`${config.api.invokeUrl}/basket/${data.email}/`, data);
    dispatch({
      type: ADD_TO_BASKET,
      payload: data.basket
    });
  } catch (error) {
    dispatch({
      type: BASKET_ERROR,
      payload: error
    });
  }
};

export const removeFromBasket = (email, basket) => async dispatch => {
  dispatch(setBasketLoading());

  try {
    await axios.patch(`${config.api.invokeUrl}/basket/${email}/`, {
      email,
      basket
    });

    dispatch({
      type: REMOVE_FROM_BASKET,
      payload: basket
    });
  } catch (error) {
    dispatch({
      type: BASKET_ERROR,
      payload: error
    });
  }
};

export const getBasket = id => async dispatch => {
  dispatch(setBasketLoading());

  try {
    const res = await axios.get(`${config.api.invokeUrl}/basket/${id}/`);
    dispatch({
      type: GET_BASKET,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: BASKET_ERROR,
      payload: error
    });
  }
};
export const removeBasket = id => dispatch => {
  dispatch({
    type: REMOVE_BASKET,
    payload: "remove  basket"
  });
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

export const setFormLoading = () => {
  return {
    type: FORM_LOADING
  };
};

export const setBasketLoading = () => {
  return {
    type: BASKET_LOADING
  };
};
