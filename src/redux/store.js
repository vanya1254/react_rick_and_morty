import { configureStore } from "@reduxjs/toolkit";

import cards from "./slices/cardsSlice";
import card from "./slices/cardSlice";

export const store = configureStore({
  reducer: { cards, card },
});
