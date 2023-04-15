import { createSlice } from '@reduxjs/toolkit';

export const searchValue = createSlice({
  name: 'searchvalue',
  initialState: { value: '' },
  reducers: {
    changeValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeValue } = searchValue.actions;
export default searchValue.reducer;
