import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEpisodesByUrl = createAsyncThunk(
  "items/fetchEpisodesStatus",
  async (params) => {
    const { episode } = params;

    const res = await axios.all(
      episode.map((url) => axios.get(url).then((res) => res.data))
    );

    return res;
  }
);

const initialState = {
  episodesList: [],
  status: "pending", // pending | fulfilled | rejected
  curEpisode: 0,
};

export const episodesSlice = createSlice({
  name: "episodes",
  initialState,
  reducers: {
    addToEpisodeList(state, action) {
      state.episodesList.push(action.payload);
    },
    setCurEpisode(state, action) {
      state.curEpisode = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEpisodesByUrl.pending, (state) => {
        state.status = "pending";
        state.episodesList = [];
      })
      .addCase(fetchEpisodesByUrl.fulfilled, (state, action) => {
        state.episodesList = action.payload;
        state.status = "fulfilled";
      })
      .addCase(fetchEpisodesByUrl.rejected, (state) => {
        state.status = "rejected";
        state.episodesList = [];
      });
  },
});

export const episodesSelector = (state) => state.episodes;

export const { addToEpisodeList, setCurEpisode } = episodesSlice.actions;

export default episodesSlice.reducer;
