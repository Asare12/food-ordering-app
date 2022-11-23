import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import product from "./products";
import category from "./category";

export default combineReducers({
  auth,
  message,
  category,
  product,
});