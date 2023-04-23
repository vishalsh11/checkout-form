import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducer/productSlice";
import infoReducer from "./reducer/infoSlice";

const store = configureStore({
  reducer: { products: productReducer, orderInfo: infoReducer },
});

export default store;
