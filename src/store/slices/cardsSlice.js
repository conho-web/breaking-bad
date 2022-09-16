import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid';

const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: [
      {
        id: uuidv4(),
        title: "Андрей Новик",
        date: "12.04.2002",
        alive: "НЕ ЖИВОЙ",
      },
      {
        id: uuidv4(),
        title: "Максим Новик",
        date: "02.02.2000",
        alive: "ЖИВОЙ",
      },
      {
        id: uuidv4(),
        title: "Антон Никончук",
        date: "06.01.2004",
        alive: "ЖИВОЙ",
      },
      {
        id: uuidv4(),
        title: "Василий Новик",
        date: "24.05.2003",
        alive: "ЖИВОЙ",
      },
      {
        id: uuidv4(),
        title: "Иван Туз",
        date: "13.05.2003",
        alive: "НЕ ЖИВОЙ",
      }
    ]
  }
})

export default cardsSlice.reducer;