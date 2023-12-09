import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import filters from "./slices/filters/slice";
import cards from "./slices/cards/slice";
import card from "./slices/cardSlice";
import episodes from "./slices/episodesSlice";
import episode from "./slices/episodeSlice";
import character from "./slices/character/slice";

export const store = configureStore({
  reducer: { filters, cards, card, episode, episodes, character },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
