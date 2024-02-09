import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null,
  },
  reducers: {
    activeUser: (state,actions) => {
      state.value = actions.payload;
    },
    
  },
});

// Action creators are generated for each case reducer function
export const { activeUser } = userSlice.actions;

export default userSlice.reducer;
