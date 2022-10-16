import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  name: "kaylin"
  
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
        // console.log(state)
  }
  }
});

export const { reset, change } = userSlice.actions;
export default userSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// export const initialState = {
//   width: 30,
//   padding: 20,
//   backgroundColor:'blue'
// };

// const redboxSlice = createSlice({
//   name: "redBox",
//   initialState,
//   reducers: {
//     changeWidth: (state, actions) => {
//       state.width = actions.payload.toString()
//     }
//   }
// });

// export const { changeWidth } = redboxSlice.actions;
// export default redboxSlice.reducer;