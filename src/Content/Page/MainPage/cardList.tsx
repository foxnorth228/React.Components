import { createSlice } from '@reduxjs/toolkit';

export const cardList = createSlice({
  name: 'cardList',
  initialState: { value: [] },
  reducers: {
    changeList: (state, action) => {
      state.value = action.payload;
    },
  },
});
