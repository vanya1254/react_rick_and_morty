import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Status } from "./episodesSlice";
import { RootState } from "../store";

// enum OriginLocationUrl {
//   URL = "https://rickandmortyapi.com/api/location/1",
// }
// enum Image {
//   IMAGE = "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
// }
// enum UrlCharacters {
//   URL = "https://rickandmortyapi.com/api/character/1",
// }

type FetchCharactersParams = {
  characters: string[];
};

export type OriginLocationType = {
  name: string;
  url: string; //TODO
};

export type CharacterType = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: OriginLocationType;
  location: OriginLocationType;
  image: string; //TODO
  episode: string[]; //TODO
  url: string;
  created: string;
};

interface CharactersSliceState {
  charactersList: CharacterType[];
  status: Status;
}

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

export const charactersSelector = (state: RootState) => state.characters;

export const { addToCharactersList } = charactersSlice.actions;

export default charactersSlice.reducer;
