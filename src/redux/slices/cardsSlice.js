import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCards = createAsyncThunk(
  "users/fetchCardsStatus",
  async (params, thunkAPI) => {
    const { activeFilters } = params;
    const dispatch = thunkAPI.dispatch;

    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/character/${activeFilters}`
    );
    const { info, results } = data;

    dispatch(setPagesCount(info.pages));

    return results;
  }
);

const initialState = {
  cardsList: [],
  status: "pending", // pending | fulfilled | rejected
  pagesCount: 1,
};

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setCardsList(state, action) {
      state.cardsList = action.payload;
    },
    setPagesCount(state, action) {
      state.pagesCount = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.status = "pending";
        state.cardsList = [];
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.cardsList = action.payload;
        state.status = "fulfilled";
      })
      .addCase(fetchCards.rejected, (state) => {
        state.status = "rejected";
        state.cardsList = [];
      });
  },
});

export const cardsSelector = (state) => state.cards;

export const { setCardsList, setPagesCount } = cardsSlice.actions;

export default cardsSlice.reducer;
