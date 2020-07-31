import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import productReducer from "./product/productReducer";

export default combineReducers({
  auth: authReducer,
  product: productReducer
});
