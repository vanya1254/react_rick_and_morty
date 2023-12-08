import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import filters from "./slices/filters/slice";
import cards from "./slices/cards/slice";
import card from "./slices/cardSlice";
import episodes from "./slices/episodesSlice";
import episode from "./slices/episodeSlice";
import characters from "./slices/charactersSlice";

export const store = configureStore({
  reducer: { filters, cards, card, episode, episodes, characters },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
