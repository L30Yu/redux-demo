import { combineReducers } from "redux";
import basket from "./basket";
import products from "./products";

const shoppingApp = combineReducers({
  products,
  basket
});

export default shoppingApp;
