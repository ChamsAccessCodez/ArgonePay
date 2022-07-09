import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ninInfo: null,
};

const state = createSlice({
  name: "NIN",
  initialState,
  reducers: {
    getNINdata: (state, { payload }) => {
      state.ninData = payload;
    },
  },
});

export const { getNINdata } = state.actions;

export default state.reducer;
