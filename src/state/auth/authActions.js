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
      type: LOGIN_ERROR,
      payload: error
    });
  }
};

export const googleLogin = () => async dispatch => {
  try {
    dispatch(setLoading());
    await Auth.federatedSignIn({ provider: "Google" });
    const res = await Auth.currentAuthenticatedUser();

    dispatch({
      type: GOOGLE_LOGIN,
      payload: res
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

export const updateUser = data => async dispatch => {
  const nameAtr = Object.keys(data)[0];

  try {
    dispatch(setLoading());

    const user = await Auth.currentAuthenticatedUser();
    await Auth.updateUserAttributes(user, {
      [nameAtr]: data[nameAtr]
    });
    const newUser = await Auth.currentAuthenticatedUser();

    dispatch({
      type: UPDATE_USER,
      payload: newUser
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error
    });
  }
};

export const changePassword = data => async dispatch => {
  try {
    dispatch(setLoading());

    const user = await Auth.currentAuthenticatedUser();
    const res = await Auth.changePassword(
      user,
      data.oldPassword,
      data.password
    );
    dispatch({
      type: CHANGE_USER_PASSWORD,
      payload: res
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error
    });
  }
};

export const updateAddress = data => async dispatch => {
  try {
    dispatch(setLoading());

    const user = await Auth.currentAuthenticatedUser();
    await Auth.updateUserAttributes(user, data);
    const newUser = await Auth.currentAuthenticatedUser();

    dispatch({
      type: UPDATE_ADDRESS,
      payload: newUser
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error
    });
  }
};

export const forgotPassword = data => async dispatch => {
  try {
    dispatch(setLoading());
    const res = await Auth.forgotPassword(data.email);

    dispatch({
      type: FORGOT_PASSWORD,
      payload: res
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error
    });
  }
};

export const forgotPasswordVerification = data => async dispatch => {
  try {
    await Auth.forgotPasswordSubmit(
      data.email,
      data.verificationCode,
      data.password
    );

    dispatch({
      type: FORGOT_PASSWORD_VERIFICATION
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error
    });
  }
};

export const cleanForgotPassword = dispatch => {
  dispatch({
    type: CLEAN_FORGOT_PASSWORD
  });
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
