import { configureStore } from "@reduxjs/toolkit";
import userSlices from "../slices/userSlices";
import { categorySlices } from "../slices/catergorySlices";

export default configureStore({
   reducer: {
      activeUser: userSlices,
      category: categorySlices,
   },
});
