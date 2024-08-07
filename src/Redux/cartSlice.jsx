import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducer: {
    fetchCart: (state) => {},

    addCart: (state, action) => {
      const checkedID = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (checkedID === id) {
        state.cart[checkedID].quantity++;
      } else {
        state.cart.push(action.payload.id);
      }
    },
  },
});

export const { addCart, fetchCart } = cartSlice.actions;
export default cartSlice.reducer;
