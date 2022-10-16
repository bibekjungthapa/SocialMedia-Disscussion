import { createSlice } from "@reduxjs/toolkit";

export const initialState = {

  
};
const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
//     reset: (state,actions) => {
//      console.log("helloo")
//      state.name=''
//     },
//     change: (state,actions) => {
//         state.name=actions.payload.toString()
//         // console.log(state)
//   }
  }
});

export const { reset, change } = registerSlice.actions;
export default registerSlice.reducer;
