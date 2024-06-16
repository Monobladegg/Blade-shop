// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// export const addToCart = createAsyncThunk(
//   "data/fetchAllProducts",
//   async (_, { rejectWithValue }) => {
//     try {
//       const allProductsResponse =
//         await axios.get(`http://localhost:4200/allProducts?_sort=${sort}&_q=${search}&`);
//       return { allProducts: allProductsResponse.data };
//     } catch (err: any) {
//       console.error(err);
//       return rejectWithValue(err.response ? err.response.data : err.message);
//     }
//   }
// );

// export const fetchCart = createAsyncThunk(
//   "data/fetchCart",
//   async (_, { rejectWithValue }) => {
//     try {
//       const cartResponse = await axios.get("http://localhost:4200/cart");
//       return { cart: cartResponse.data };
//     } catch (err: any) {
//       console.error(err);
//       return rejectWithValue(err.response ? err.response.data : err.message);
//     }
//   }
// );

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     cart: [],
//   },
//   reducers: {
//     setAllProducts: (state, action) => {
//       state.allProducts = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchAllProducts.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchAllProducts.fulfilled, (state, action) => {
//         state.loading = false;
//         state.allProducts = action.payload.allProducts;
//       })
//       .addCase(fetchAllProducts.rejected, (state) => {
//         state.loading = false;
//         state.error = null;
//       });
//   },
// });

// export const { setAllProducts } = allProductsSlice.actions;

// export default allProductsSlice.reducer;
