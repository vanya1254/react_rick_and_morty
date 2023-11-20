import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardsList: [],
};

export const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setCards(state, action) {
      state.cardsList = action.payload;
    },
  },
});

export const { setCards } = cardSlice.actions;

export default cardSlice.reducer;
