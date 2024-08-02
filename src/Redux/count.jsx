import { createReducer, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const countSlice = createSlice({
  name: "count",
  initialState,
  reducer: {
    inCrease: (state) => {
      state.vale += 1;
    },
  },
});

export const { inCrease } = countSlice.actions;

export default countSlice.reducer;
