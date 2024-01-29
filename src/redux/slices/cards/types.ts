import { CardSliceState } from "../card/types";

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

export enum Status {
  PENDING = "pending",
  FULFILLED = "fulfilled",
  REJECTED = "rejected",
}
