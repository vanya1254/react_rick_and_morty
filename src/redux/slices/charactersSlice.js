import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCharactersByUrl = createAsyncThunk(
  "items/fetchCharactersStatus",
  async (params) => {
    const { characters } = params;

    const res = await axios.all(
      characters.map((url) => axios.get(url).then((res) => res.data))
    );

    return res;
  }
);

const initialState = {
  charactersList: [],
  status: "pending", // pending | fulfilled | rejected
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    addToCharactersList(state, action) {
      state.episodesList.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharactersByUrl.pending, (state) => {
        state.status = "pending";
        state.charactersList = [];
      })
      .addCase(fetchCharactersByUrl.fulfilled, (state, action) => {
        state.charactersList = action.payload;
        state.status = "fulfilled";
      })
      .addCase(fetchCharactersByUrl.rejected, (state) => {
        state.status = "rejected";
        state.charactersList = [];
      });
  },
});

export const charactersSelector = (state) => state.characters;

export const { addToCharactersList } = charactersSlice.actions;

export default charactersSlice.reducer;
