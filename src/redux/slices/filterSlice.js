import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  curPage: 1,
  searchValue: "",
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCurPage(state, action) {
      state.curPage = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
});

export const filterSelector = (state) => state.filters;

export const { setCurPage, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
