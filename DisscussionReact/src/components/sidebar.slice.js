import { createSlice } from "@reduxjs/toolkit";

export const initialState = {

  
};
const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {

  }
});

export const { reset, change } = sidebarSlice.actions;
export default sidebarSlice.reducer;
