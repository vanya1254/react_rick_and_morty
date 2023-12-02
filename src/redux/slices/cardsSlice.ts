import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import { Status } from "./episodesSlice";
import { RootState } from "../store";
import { CardSliceState } from "./cardSlice";

type FetchInfo = {
  count: number;
  pages: number;
  next: string;
  prev: null | string;
};

type FetchData = {
  info: FetchInfo;
  results: CardSliceState[];
};

type FetchCardsParams = {
  activeFilters: string;
};

interface CardsSliceState {
  cardsList: CardSliceState[];
  status: Status;
  pagesCount: number;
}

export const fetchCards = createAsyncThunk<CardSliceState[], FetchCardsParams>(
  "users/fetchCardsStatus",
  async (params, thunkAPI): Promise<CardSliceState[]> => {
    const { activeFilters } = params;
    const dispatch = thunkAPI.dispatch;

    const { data } = await axios.get<FetchData>(
      `https://rickandmortyapi.com/api/character/${activeFilters}`
    );
    const { info, results } = data;

    dispatch(setPagesCount(info.pages));

    return results;
  }
);

const initialState: CardsSliceState = {
  cardsList: [],
  status: Status.PENDING,
  pagesCount: 1,
};

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setCardsList(state, action: PayloadAction<CardSliceState[]>) {
      state.cardsList = action.payload;
    },
    setPagesCount(state, action: PayloadAction<number>) {
      state.pagesCount = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.status = Status.PENDING;
        state.cardsList = [];
      })
      .addCase(
        fetchCards.fulfilled,
        (state, action: PayloadAction<CardSliceState[]>) => {
          state.cardsList = action.payload;
          state.status = Status.FULFILLED;
        }
      )
      .addCase(fetchCards.rejected, (state) => {
        state.status = Status.REJECTED;
        state.cardsList = [];
      });
  },
});

export const cardsSelector = (state: RootState) => state.cards;

export const { setCardsList, setPagesCount } = cardsSlice.actions;

export default cardsSlice.reducer;
