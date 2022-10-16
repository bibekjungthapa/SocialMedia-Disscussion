import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  width: 30,
  padding: 20,
  backgroundColor:'blue'
};

const redboxSlice = createSlice({
  name: "redBox",
  initialState,
  reducers: {
    changeWidth: (state, actions) => {
      state.width = actions.payload.toString()
    },
    changeHeight: (state, actions) => {
        state.height = actions.payload.toString()
      },
      changeColor: (state, actions) => {
        state.backgroundColor = actions.payload.toString()
      },  
  }
});

export const { changeWidth, changeHeight,changeColor } = redboxSlice.actions;
export default redboxSlice.reducer;

