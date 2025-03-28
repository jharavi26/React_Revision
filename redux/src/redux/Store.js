
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"
import { productReducer } from "./counterSlice";


const store = configureStore(
  {
    reducer : {
    counter : counterReducer,
    products : productReducer
    }
  })


export default store;