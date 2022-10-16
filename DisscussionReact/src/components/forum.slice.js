import { createSlice } from "@reduxjs/toolkit";

export const initialState = {

  
};
const forumSlice = createSlice({
  name: "forum",
  initialState,
  reducers: {

  }
});

export const { reset, change } = forumSlice.actions;
export default forumSlice.reducer;
