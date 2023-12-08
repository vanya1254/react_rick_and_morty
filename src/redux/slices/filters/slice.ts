import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { FiltersSliceState } from "./types";

const initialState: FiltersSliceState = {
  curPage: 1,
  searchValue: "",
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCurPage(state, action: PayloadAction<number>) {
      state.curPage = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setFilters(state, action: PayloadAction<FiltersSliceState>) {
      state.curPage = action.payload.curPage;
      state.searchValue = action.payload.searchValue;
    },
  },
});

export const { setCurPage, setSearchValue, setFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
