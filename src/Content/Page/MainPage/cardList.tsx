import { createSlice } from '@reduxjs/toolkit';
import { cardInf } from './CardList/dataCard';

const initialState: { value: cardInf[] } = { value: [] };
export const cardList = createSlice({
  name: 'cardList',
  initialState,
  reducers: {
    changeList: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeList } = cardList.actions;
export default cardList.reducer;
