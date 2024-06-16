import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface FilterParams {
  sort?: string | null;
  search?: string | null;
}

export interface AllProductsState {
  allProducts: any[];
  loading: boolean;
  error: string | null;
}

const initialState: AllProductsState = {
  allProducts: [],
  loading: false,
  error: null,
};

export const fetchAllProducts = createAsyncThunk(
  "data/fetchAllProducts",
  async ({ search, sort }: FilterParams, { rejectWithValue }) => {
    try {
      const allProductsResponse = await axios.get(`http://localhost:4200/allProducts`, {
        params: {
          _sort: sort,
          title: search,
        },
      });
      return { allProducts: allProductsResponse.data };
    } catch (err: any) {
      console.error(err);
      return rejectWithValue(err.response ? err.response.data : err.message);
    }
  }
);

const allProductsSlice = createSlice({
  name: "allProducts",
  initialState,
  reducers: {
    setAllProducts: (state, action: PayloadAction<any[]>) => {
      state.allProducts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action: PayloadAction<{ allProducts: any[] }>) => {
        state.loading = false;
        state.allProducts = action.payload.allProducts;
      })
      .addCase(fetchAllProducts.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setAllProducts } = allProductsSlice.actions;

export default allProductsSlice.reducer;
