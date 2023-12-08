import { CardSliceState } from "../cardSlice";
import { Status } from "../episodesSlice";

export type FetchInfo = {
  count: number;
  pages: number;
  next: string;
  prev: null | string;
};

export type FetchData = {
  info: FetchInfo;
  results: CardSliceState[];
};

export type FetchCardsParams = {
  activeFilters: string;
};

export interface CardsSliceState {
  cardsList: CardSliceState[];
  status: Status;
  pagesCount: number;
}
