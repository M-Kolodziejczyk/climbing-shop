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
  BASKET_LOADING,
  ORDER_ERROR,
  ORDER_LOADING,
  ADD_TO_ORDER,
  GET_ORDER,
  ADD_TO_USER,
  USER_ERROR,
  USER_LOADING,
  GET_USER
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

export const removeBasket = email => async dispatch => {
  dispatch(setBasketLoading());

  try {
    await axios.delete(`${config.api.invokeUrl}/basket/${email}/`);
    dispatch({
      type: REMOVE_BASKET
    });
  } catch (error) {
    dispatch({
      type: BASKET_ERROR,
      payload: error
    });
  }
};

export const addToOrder = data => async dispatch => {
  dispatch(setOrderLoading());

  try {
    await axios.post(`${config.api.invokeUrl}/orders/${data.id}/`, data);
    let res = await axios.get(`${config.api.invokeUrl}/user/${data.userId}/`);
    let orders = [];
    if (res.data !== "") {
      orders = [...res.data.orders, data.id];
    } else {
      orders = [data.id];
    }
    dispatch(addToUser({ id: data.userId, orders: orders }));
    dispatch(removeBasket(data.email));
    dispatch({
      type: ADD_TO_ORDER,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: ORDER_ERROR,
      payload: error
    });
  }
};

export const getUser = id => async dispatch => {
  dispatch(setUserLoading());

  try {
    const res = await axios.get(`${config.api.invokeUrl}/user/${id}/`);
    dispatch({
      type: GET_USER,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: USER_ERROR,
      payload: error
    });
  }
};

export const addToUser = data => async dispatch => {
  dispatch(setUserLoading());

  try {
    await axios.post(`${config.api.invokeUrl}/user/`, data);
    dispatch({
      type: ADD_TO_USER,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: USER_ERROR,
      payload: error
    });
  }
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

export const setOrderLoading = () => {
  return {
    type: ORDER_LOADING
  };
};

export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};
