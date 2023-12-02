import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { OriginLocationType } from "./charactersSlice";
import { RootState } from "../store";

export enum StatusCard {
  UNKNOWN = "unknown",
  ALIVE = "Alive",
  DEAD = "Dead",
}

export interface CardSliceState {
  id: number;
  name: string;
  status: StatusCard;
  species: string;
  type: string;
  gender: string;
  origin: OriginLocationType;
  location: OriginLocationType;
  image: string; //TODO
  episode: string[]; //TODO
  url: string; //TODO
  created: string;
  className?: any;
}

export const fetchCardById = createAsyncThunk<CardSliceState, CardSliceState>(
  "items/fetchCardStatus",
  async (params) => {
    const { id } = params;

    const { data } = await axios.get<CardSliceState>(
      `https://rickandmortyapi.com/api/character/${id}`
    );

    return data;
  }
);

const initialState: CardSliceState = {
  id: 1,
  name: "",
  status: StatusCard.UNKNOWN,
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
    setId(state, action: PayloadAction<number>) {
      state.id = action.payload;
    },
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setStatus(state, action: PayloadAction<StatusCard>) {
      state.status = action.payload;
    },
    setSpecies(state, action: PayloadAction<string>) {
      state.species = action.payload;
    },
    setType(state, action: PayloadAction<string>) {
      state.type = action.payload;
    },
    setGender(state, action: PayloadAction<string>) {
      state.gender = action.payload;
    },
    setOrigin(state, action: PayloadAction<OriginLocationType>) {
      state.origin = action.payload;
    },
    setLocation(state, action: PayloadAction<OriginLocationType>) {
      state.location = action.payload;
    },
    setImage(state, action: PayloadAction<string>) {
      state.image = action.payload;
    },
    setEpisode(state, action: PayloadAction<string[]>) {
      state.episode = action.payload;
    },
    setUrl(state, action: PayloadAction<string>) {
      state.url = action.payload;
    },
    setCreated(state, action: PayloadAction<string>) {
      state.created = action.payload;
    },
    setCardProp(state, action: PayloadAction<CardSliceState>) {
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
      .addCase(fetchCardById.pending, () => {})
      .addCase(
        fetchCardById.fulfilled,
        (state, action: PayloadAction<CardSliceState>) => {
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
        }
      )
      .addCase(fetchCardById.rejected, () => {});
  },
});

export const cardSelector = (state: RootState) => state.card;

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
