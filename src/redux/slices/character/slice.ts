import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import {
  CharacterType,
  CharacterSliceState,
  EpisodeType,
  FetchCharactersParams,
  FetchEpisodesParams,
} from "./types";
import { Status } from "../episodesSlice";

export const fetchEpisodesByUrl = createAsyncThunk<
  EpisodeType[],
  FetchEpisodesParams
>("items/fetchEpisodesStatus", async (params) => {
  const { episode } = params;
  // const dispatch = thunkAPI.dispatch;

  const res = await axios.all<EpisodeType>(
    episode.map((url) => axios.get(url).then((res) => res.data))
  );

  // await dispatch(fetchCharactersByUrl(res[0]));

  return res;
});

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

type FetchCharacterParams = {
  episode: string[];
};

type FetchCharacterReturn = {
  episodesList: EpisodeType[];
  charactersList: CharacterType[];
};

export const fetchCharacter = createAsyncThunk<
  FetchCharacterReturn,
  FetchCharacterParams
>("items/fetchCharacterStatus", async (params) => {
  const { episode } = params;
  // const state = thunkAPI.getState() as RootState;

  const episodesList = await axios.all<EpisodeType>(
    episode.map((url) => axios.get(url).then((res) => res.data))
  );

  const charactersList = await axios.all<CharacterType>(
    episodesList[0].characters.map((url) =>
      axios.get(url).then((res) => res.data)
    )
  );
  return { episodesList, charactersList };
});

const initialState: CharacterSliceState = {
  episodesList: [],
  charactersList: [],
  curEpisode: 0,
  status: Status.PENDING,
};

export const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    addToEpisodesList(state, action: PayloadAction<EpisodeType>) {
      state.episodesList.push(action.payload);
    },
    addToCharactersList(state, action: PayloadAction<CharacterType>) {
      state.charactersList.push(action.payload);
    },
    setCurEpisode(state, action: PayloadAction<number>) {
      state.curEpisode = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEpisodesByUrl.pending, (state) => {
        state.episodesList = [];
      })
      .addCase(
        fetchEpisodesByUrl.fulfilled,
        (state, action: PayloadAction<EpisodeType[]>) => {
          state.episodesList = action.payload;
        }
      )
      .addCase(fetchEpisodesByUrl.rejected, (state) => {
        state.episodesList = [];
      });
    builder
      .addCase(fetchCharactersByUrl.pending, (state) => {
        state.charactersList = [];
      })
      .addCase(
        fetchCharactersByUrl.fulfilled,
        (state, action: PayloadAction<CharacterType[]>) => {
          state.charactersList = action.payload;
        }
      )
      .addCase(fetchCharactersByUrl.rejected, (state) => {
        state.charactersList = [];
      });
    builder
      .addCase(fetchCharacter.pending, (state) => {
        state.status = Status.PENDING;
        state.episodesList = [];
      })
      .addCase(
        fetchCharacter.fulfilled,
        (state, action: PayloadAction<FetchCharacterReturn>) => {
          state.episodesList = action.payload.episodesList;
          state.charactersList = action.payload.charactersList;
          state.status = Status.FULFILLED;
        }
      )
      .addCase(fetchCharacter.rejected, (state) => {
        state.status = Status.REJECTED;
        state.episodesList = [];
      });
  },
});

export const { addToEpisodesList, addToCharactersList, setCurEpisode } =
  characterSlice.actions;

export default characterSlice.reducer;
