import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducer/productSlice";

const store = configureStore({
	reducer: { products: productReducer },
});

export default store;
