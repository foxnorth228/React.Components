import { createSlice } from '@reduxjs/toolkit';
import ICard from './ICard';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';

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

export function useFormCards(): [ICard[], (card: ICard) => void] {
  const cards = useSelector((state: RootState) => state.formCards.value);
  const setCard = useDispatch();
  return [cards, (card) => setCard(addCard(card))];
}
