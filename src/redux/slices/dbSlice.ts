import {createSlice} from "@reduxjs/toolkit";

const dbSlice = createSlice({
  name: "db",
  initialState: {
    db: [],
  },
  reducers: {
    fetchData(state, action) {
      state.db = action.payload

      console.log(state.db)
    },
    addCategory(state, action) {
    }
  },
});

export const {fetchData} = dbSlice.actions;

export default dbSlice.reducer