import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import allProducts from "../slices/data/allProductsSlice";
import categories from "../slices/data/categoriesSlice";

export const store = configureStore({
  reducer: {
    allProducts,
    categories
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>