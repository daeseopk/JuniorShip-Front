import { createSlice } from "@reduxjs/toolkit";

export const statuSlice = createSlice({
   name: "status",
   initialState: { value: { status: 0 } },
   reducers: {
      setStatus_plus(state) {
         state.value.status++;
      },
      setStatus_minus(state) {
         state.value.status--;
      },
   },
});

export const { setStatus_plus, setStatus_minus } = statuSlice.actions;
export default statuSlice.reducer;
