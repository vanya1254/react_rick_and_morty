import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  curPage: "",
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCurPage(state, action) {
      state.curPage = action.payload;
    },
  },
});

export const { setCurPage } = filterSlice.actions;

export default filterSlice.reducer;
