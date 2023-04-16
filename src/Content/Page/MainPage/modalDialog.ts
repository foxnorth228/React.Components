import { createSlice } from '@reduxjs/toolkit';
import { cardInf } from './CardList/dataCard';

export const modalDialog = createSlice({
  name: 'cardList',
  initialState: { value: '' },
  reducers: {
    changeModalDialog: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeModalDialog } = modalDialog.actions;
export default modalDialog.reducer;
