import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCardById = createAsyncThunk(
  "items/fetchCardStatus",
  async (params) => {
    const { id } = params;

    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );

    return data;
  }
);

const initialState = {
  id: 1,
  name: "",
  status: "",
  species: "",
  type: "",
  gender: "",
  origin: {
    name: "",
    url: `https://rickandmortyapi.com/api/location/`,
  },
  location: {
    name: "",
    url: `https://rickandmortyapi.com/api/location/`,
  },
  image: `https://rickandmortyapi.com/api/character/avatar/`,
  episode: [],
  url: `https://rickandmortyapi.com/api/character/`,
  created: "",
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setId(state, action) {
      state.id = action.payload;
    },
    setName(state, action) {
      state.name = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    setSpecies(state, action) {
      state.species = action.payload;
    },
    setType(state, action) {
      state.type = action.payload;
    },
    setGender(state, action) {
      state.gender = action.payload;
    },
    setOrigin(state, action) {
      state.origin = action.payload;
    },
    setLocation(state, action) {
      state.location = action.payload;
    },
    setImage(state, action) {
      state.image = action.payload;
    },
    setEpisode(state, action) {
      state.episode = action.payload;
    },
    setUrl(state, action) {
      state.url = action.payload;
    },
    setCreated(state, action) {
      state.created = action.payload;
    },
    setCardProp(state, action) {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.status = action.payload.status;
      state.species = action.payload.species;
      state.type = action.payload.type;
      state.gender = action.payload.gender;
      state.origin = action.payload.origin;
      state.location = action.payload.location;
      state.image = action.payload.image;
      state.episode = action.payload.episode;
      state.url = action.payload.url;
      state.created = action.payload.created;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCardById.pending, (state) => {})
      .addCase(fetchCardById.fulfilled, (state, action) => {
        state.id = action.payload.id;
        state.name = action.payload.name;
        state.status = action.payload.status;
        state.species = action.payload.species;
        state.type = action.payload.type;
        state.gender = action.payload.gender;
        state.origin = action.payload.origin;
        state.location = action.payload.location;
        state.image = action.payload.image;
        state.episode = action.payload.episode;
        state.url = action.payload.url;
        state.created = action.payload.created;
      })
      .addCase(fetchCardById.rejected, (state) => {});
  },
});

export const cardSelector = (state) => state.card;

export const {
  setId,
  setName,
  setStatus,
  setSpecies,
  setType,
  setGender,
  setOrigin,
  setLocation,
  setImage,
  setEpisode,
  setUrl,
  setCreated,
  setCardProp,
} = cardSlice.actions;

export default cardSlice.reducer;
