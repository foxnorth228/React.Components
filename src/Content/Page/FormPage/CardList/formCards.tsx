import { createSlice } from '@reduxjs/toolkit';
import ICard from './ICard';

const initialState: { value: ICard[] } = { value: [] };
export const formCards = createSlice({
  name: 'formCards',
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addCard } = formCards.actions;
export default formCards.reducer;
