import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import filters from "./slices/filters/slice";
import cards from "./slices/cards/slice";
import card from "./slices/card/slice";
import character from "./slices/character/slice";
import characters from "./slices/characters/slice";

export const store = configureStore({
  reducer: { filters, cards, card, character, characters },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
