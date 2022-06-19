import { configureStore } from "@reduxjs/toolkit";
import visibilityReducer from "../Redux/visibility";
import statusReducer from "../Redux/status";

export default configureStore({
   reducer: {
      visibility: visibilityReducer,
      status: statusReducer,
   },
});
