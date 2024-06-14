import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllProducts = createAsyncThunk(
  "data/fetchAllProducts",
  async (_, { rejectWithValue }) => {
    try {
      const allProductsResponse = await axios.get("http://localhost:4200/allProducts");

      return {
        allProducts: allProductsResponse.data,
      };
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.response?.data || 'An Axios error occurred');
      } else {
        return rejectWithValue('An unknown error occurred');
      }
    }
  }
);

const allProductsSlice = createSlice({
  name: "categories",
  initialState: {
    allProducts: [],
    loading: false,
    error: null,
  },
  reducers: {
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.allProducts = action.payload.allProducts;
      })
      .addCase(fetchAllProducts.rejected, (state) => {
        state.loading = false;
        state.error = null
      });
  },
});

export const { setAllProducts } = allProductsSlice.actions;

export default allProductsSlice.reducer;
