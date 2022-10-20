import { createSlice } from "@reduxjs/toolkit";

export const initialState = {

  
};
const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
  }
});

export const { reset, change } = registerSlice.actions;
export default registerSlice.reducer;
