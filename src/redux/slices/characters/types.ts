import { Status } from "../episodesSlice";

// enum OriginLocationUrl {
//   URL = "https://rickandmortyapi.com/api/location/1",
// }
// enum Image {
//   IMAGE = "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
// }
// enum UrlCharacters {
//   URL = "https://rickandmortyapi.com/api/character/1",
// }

export type FetchCharactersParams = {
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

export interface CharactersSliceState {
  charactersList: CharacterType[];
  status: Status;
}
