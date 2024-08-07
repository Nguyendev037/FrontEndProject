import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchData, fetchDataId } from "../API/baseAPI";

export const fetchPaginatedData = createAsyncThunk("products/fetchData", async (page) => {
  const response = await fetchData(page);
  console.log('response: ', response);
  return response;
});

const initialState = {
  productList: [],
  status: "idle",
  error: null,
  page: 1,
  totalPages: 0,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPaginatedData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPaginatedData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.productList = action.payload.data;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchPaginatedData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {setPage } = productSlice.actions


export default productSlice.reducer;
