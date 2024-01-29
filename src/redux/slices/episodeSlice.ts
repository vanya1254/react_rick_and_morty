// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import { RootState } from "../store";

// export const fetchEpisodeByUrl = createAsyncThunk(
//   "items/fetchEpisodeStatus",
//   async (params, thunkAPI) => {
//     const { url } = params;

//     const { data } = await axios.get(url);

//     return data;
//   }
// );

// const initialState = {
//   id: 1,
//   name: "",
//   air_date: "",
//   episode: "",
//   characters: [],
//   url: `https://rickandmortyapi.com/api/character/episode`,
//   created: "",
// };

// export const episodeSlice = createSlice({
//   name: "episode",
//   initialState,
//   reducers: {
//     setId(state, action) {
//       state.id = action.payload;
//     },
//     setName(state, action) {
//       state.name = action.payload;
//     },
//     setAirDate(state, action) {
//       state.air_date = action.payload;
//     },
//     setEpisode(state, action) {
//       state.episode = action.payload;
//     },
//     setCharacters(state, action) {
//       state.characters = action.payload;
//     },
//     setUrl(state, action) {
//       state.url = action.payload;
//     },
//     setCreated(state, action) {
//       state.created = action.payload;
//     },
//     setEpisodeProp(state, action) {
//       state.id = action.payload.id;
//       state.name = action.payload.name;
//       state.air_date = action.payload.air_date;
//       state.episode = action.payload.episode;
//       state.characters = action.payload.characters;
//       state.url = action.payload.url;
//       state.created = action.payload.created;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchEpisodeByUrl.pending, (state) => {})
//       .addCase(fetchEpisodeByUrl.fulfilled, (state, action) => {
//         state.id = action.payload.id;
//         state.name = action.payload.name;
//         state.air_date = action.payload.air_date;
//         state.episode = action.payload.episode;
//         state.characters = action.payload.characters;
//         state.url = action.payload.url;
//         state.created = action.payload.created;
//       })
//       .addCase(fetchEpisodeByUrl.rejected, (state) => {});
//   },
// });

// export const episodeSelector = (state: RootState) => state.episode;

// export const {
//   setId,
//   setName,
//   setEpisode,
//   setUrl,
//   setCreated,
//   setEpisodeProp,
// } = episodeSlice.actions;

// export default episodeSlice.reducer;
