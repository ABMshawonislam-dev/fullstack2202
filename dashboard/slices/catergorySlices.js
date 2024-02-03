import { createSlice } from "@reduxjs/toolkit";

export const categorySlices = createSlice({
   name: "category",
   initialState: {
      value: null,
   },
   reducers: {
      categorys: (state, actions) => {
         state.value = actions.payload;
      },
   },
});

// Action creators are generated for each case reducer function
export const { categorys } = categorySlices.actions;

export default categorySlices.reducer;
