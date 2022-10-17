import { createSlice } from "@reduxjs/toolkit";

export const initialState = {

  
};
const postpopslice = createSlice({
  name: "forum",
  initialState,
  reducers: {

  }
});

export const { reset, change } = postpopslice.actions;
export default postpopslice.reducer;
