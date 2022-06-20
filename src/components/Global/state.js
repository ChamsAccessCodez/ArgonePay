import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ninInfo: null,
};

const state = createSlice({
  name: "second",
  initialState,
  reducers: {
    createNIN: (state, { payload }) => {
      state.ninInfo = payload;
    },
  },
});

export const { createNIN } = state.actions;

export default state.reducer;
