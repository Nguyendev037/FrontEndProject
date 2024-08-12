import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchData, fetchDataId } from "../API/baseAPI";

export const fetchPaginatedData = createAsyncThunk(
  "products/fetchData",
  async (page) => {
    const response = await fetchData(page);
    console.log("response: ", response);
    return response;
  }
);

export const fetchItemId = createAsyncThunk(
  "products/fetchDataID",
  async (id) => {
    const response = await fetchDataId(id);
    console.log("response: ", response);
    return response;
  }
);

const initialState = {
  productList: [],
  status: "idle",
  error: null,
  page: 1,
  totalPages: 0,
  selectedProduct: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
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
        console.log('action.payload: ', action.payload);
      })
      .addCase(fetchPaginatedData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // FetchDataID function reducer
      .addCase(fetchItemId.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchItemId.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedProduct = action.payload;
        console.log("Selected product set in Redux:", action.payload);
      })
      .addCase(fetchItemId.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setPage } = productSlice.actions;

export default productSlice.reducer;
