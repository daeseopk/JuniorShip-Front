import { createSlice } from "@reduxjs/toolkit";

export const visibilitySlice = createSlice({
   name: "visibility",
   initialState: { value: { isVisible: false } },
   reducers: {
      setVisible: (state, action) => {
         state.value = action.payload;
      },
   },
});
export const { setVisible } = visibilitySlice.actions;
export default visibilitySlice.reducer;
