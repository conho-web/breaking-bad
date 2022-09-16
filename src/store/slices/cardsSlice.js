import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const getCards = createAsyncThunk(
  'cards/getCards', 
  async () => {
    const responce = await fetch('https://www.breakingbadapi.com/api/characters');
    const data = await responce.json();
    return data; 
  }
)

const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: [],
    loading: false,
  },
  extraReducers: {
    [getCards.pending]: (state) => {
      state.loading = true;
    },
    [getCards.fulfilled]: (state, action) => {
      state.loading = false;
      state.cards = action.payload;
    },
  }
})

export default cardsSlice.reducer;