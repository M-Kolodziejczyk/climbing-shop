import { REGISTER_SUCCESS, REGISTER_FAIL, SET_LOADING } from "../types";

const initialState = {
  user: null,
  isRegister: false,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isRegister: true,
        loading: false,
        user: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
