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
  },
  extraReducers: {
    [getCards.pending]: (state, action) => {
      console.log('123')
    },
    [getCards.fulfilled]: (state, action) => {
      state.cards = action.payload;
    },
  }
})

export default cardsSlice.reducer;