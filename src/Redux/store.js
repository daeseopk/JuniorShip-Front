import { configureStore } from "@reduxjs/toolkit";
import visibilityReducer from "../Redux/visibility";

export default configureStore({
   reducer: {
      visibility: visibilityReducer,
   },
});
