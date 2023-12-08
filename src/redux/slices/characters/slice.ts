import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import {
  CharacterType,
  CharactersSliceState,
  FetchCharactersParams,
} from "./types";
import { Status } from "../episodesSlice";

export const fetchCharactersByUrl = createAsyncThunk<
  CharacterType[],
  FetchCharactersParams
>("items/fetchCharactersStatus", async (params) => {
  const { characters } = params;

  const res = await axios.all<CharacterType>(
    characters.map((url) => axios.get(url).then((res) => res.data))
  );

  return res;
});

const initialState: CharactersSliceState = {
  charactersList: [],
  status: Status.PENDING,
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    addToCharactersList(state, action: PayloadAction<CharacterType>) {
      state.charactersList.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharactersByUrl.pending, (state) => {
        state.status = Status.PENDING;
        state.charactersList = [];
      })
      .addCase(
        fetchCharactersByUrl.fulfilled,
        (state, action: PayloadAction<CharacterType[]>) => {
          state.charactersList = action.payload;
          state.status = Status.FULFILLED;
        }
      )
      .addCase(fetchCharactersByUrl.rejected, (state) => {
        state.status = Status.REJECTED;
        state.charactersList = [];
      });
  },
});

export const { addToCharactersList } = charactersSlice.actions;

export default charactersSlice.reducer;
