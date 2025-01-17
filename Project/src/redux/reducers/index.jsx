import { combineReducers } from "redux";
import { ProductReducer } from "./productReducer";

const reducers = combineReducers({
  allProducts: ProductReducer,
 
});

export default reducers;