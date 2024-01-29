// import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import axios from "axios";
// import { RootState } from "../store";

// // enum UrlEpisode {
// //   URL = `https://rickandmortyapi.com/api/character/episode`,
// // }

// type FetchEpisodesParams = {
//   episode: string[];
// };

// export type EpisodeType = {
//   id: number;
//   name: string;
//   air_date: string;
//   episode: string;
//   characters: string[]; //TODO
//   url: string;
//   created: string;
// };

// export enum Status {
//   PENDING = "pending",
//   FULFILLED = "fulfilled",
//   REJECTED = "rejected",
// }

// interface EpisodesSliceState {
//   episodesList: EpisodeType[];
//   status: Status;
//   curEpisode: number;
// }

// export const fetchEpisodesByUrl = createAsyncThunk<
//   EpisodeType[],
//   FetchEpisodesParams
// >("items/fetchEpisodesStatus", async (params) => {
//   const { episode } = params;

//   const res = await axios.all<EpisodeType>(
//     episode.map((url) => axios.get(url).then((res) => res.data))
//   );

//   return res;
// });

// const initialState: EpisodesSliceState = {
//   episodesList: [],
//   status: Status.PENDING,
//   curEpisode: 0,
// };

// export const episodesSlice = createSlice({
//   name: "episodes",
//   initialState,
//   reducers: {
//     addToEpisodesList(state, action: PayloadAction<EpisodeType>) {
//       state.episodesList.push(action.payload);
//     },
//     setCurEpisode(state, action: PayloadAction<number>) {
//       state.curEpisode = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchEpisodesByUrl.pending, (state) => {
//         state.status = Status.PENDING;
//         state.episodesList = [];
//       })
//       .addCase(
//         fetchEpisodesByUrl.fulfilled,
//         (state, action: PayloadAction<EpisodeType[]>) => {
//           state.episodesList = action.payload;
//           state.status = Status.FULFILLED;
//         }
//       )
//       .addCase(fetchEpisodesByUrl.rejected, (state) => {
//         state.status = Status.REJECTED;
//         state.episodesList = [];
//       });
//   },
// });

// export const episodesSelector = (state: RootState) => state.episodes;

// export const { addToEpisodesList, setCurEpisode } = episodesSlice.actions;

// export default episodesSlice.reducer;
