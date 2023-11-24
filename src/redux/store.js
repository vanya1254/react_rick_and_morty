import { configureStore } from "@reduxjs/toolkit";

import filters from "./slices/filterSlice";
import cards from "./slices/cardsSlice";
import card from "./slices/cardSlice";
import episodes from "./slices/episodesSlice";
import episode from "./slices/episodeSlice";

export const store = configureStore({
  reducer: { filters, cards, card, episode, episodes },
});
