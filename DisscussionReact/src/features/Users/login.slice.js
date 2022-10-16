import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
};


const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    reset: (state,actions) => {
     console.log("helloo")
     state.name=''
    },
    change: (state,actions) => {
        state.name=actions.payload.toString()
  }
  }
});

export const { reset, change } = userSlice.actions;
export default userSlice.reducer;
