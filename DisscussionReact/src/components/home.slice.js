import { createSlice } from "@reduxjs/toolkit";

export const initialState = {

  
};
const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {

  }
});

export const { reset, change } = homeSlice.actions;
export default homeSlice.reducer;
