import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface FilterSliceState {
  curPage: number;
  searchValue: string;
}

const initialState: FilterSliceState = {
  curPage: 1,
  searchValue: "",
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCurPage(state, action: PayloadAction<number>) {
      state.curPage = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setFilters(state, action: PayloadAction<FilterSliceState>) {
      state.curPage = action.payload.curPage;
      state.searchValue = action.payload.searchValue;
    },
  },
});

export const filterSelector = (state: RootState) => state.filters;

export const { setCurPage, setSearchValue, setFilters } = filterSlice.actions;

export default filterSlice.reducer;
