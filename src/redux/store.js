import { configureStore } from "@reduxjs/toolkit";

import filters from "./slices/filterSlice";
import cards from "./slices/cardsSlice";
import card from "./slices/cardSlice";

export const store = configureStore({
  reducer: { filters, cards, card },
});
