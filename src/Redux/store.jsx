import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
export const store = configureStore({
  reducer: {
    carts: cartSlice,
    product: productSlice
  },

});
