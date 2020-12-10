import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    open: false,
  },
  reducers: {
    change: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const { change } = modalSlice.actions;

export default modalSlice.reducer;
