import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./slices";

const store = configureStore({
  reducer: { mainReducer },
});

export default store;
