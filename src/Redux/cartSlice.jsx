import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchDataAll } from "../API/baseAPI";
import { useEffect, useState } from "react";

const initialState = {
  carts: localStorage.getItem("carts")
    ? JSON.parse(localStorage.getItem("carts"))
    : [],
  status: "idle",
  error: null,
  products: [],
};

let data = [];
async function initializeData() {
  data = await fetchDataAll();
  console.log("data: ", data);
}

initializeData();

const cartSlice = createSlice({
  name: "carts",
  initialState,

  reducers: {
    addCart: (state, action) => {
      console.log("action: ", action);
      const res = data.find((item) => item.id === action.payload.id);
      const index = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log(state.carts);
      if (index >= 0) {
        let newCart = state.carts;
        newCart[index].qty++;
        state.carts = newCart;
        localStorage.setItem("carts", JSON.stringify(state.carts));
      } else {
        state.carts = [...state.carts, { ...res, qty: 1 }];
        localStorage.setItem("carts", JSON.stringify(state.carts));
      }
    },
    removeCart: (state, action) => {
      state.carts = state.carts.filter((item) => item.id !== action.payload);
      localStorage.setItem("carts", JSON.stringify(state.carts));
    },
    clearCart: (state) => {
      state.carts = [];
      localStorage.setItem("carts", JSON.stringify(state.carts));
    },
    updateQty: (state, action) => {
      if (action.payload.flag) {
        state.carts = state.carts.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
        localStorage.setItem("carts", JSON.stringify(state.carts));
      } else {
        state.carts = state.carts.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: item.qty > 1 ? item.qty - 1 : item.qty }
            : item
        );
        localStorage.setItem("carts", JSON.stringify(state.carts));
      }
    },
  },
});

export const {
  addCart,
  removeCart,
  clearCart,
  setError,
  setLoanding,
  setLoaded,
  updateQty,
} = cartSlice.actions;
export default cartSlice.reducer;
