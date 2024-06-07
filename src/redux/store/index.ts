import {configureStore} from "@reduxjs/toolkit";
import dbReducer from "../slices/dbSlice";

export default configureStore({
  reducer: {
    db: dbReducer
  },
})