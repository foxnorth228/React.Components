import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';

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

export function useSearchValue(): [string, (name: string) => void] {
  const searchValue = useSelector((state: RootState) => state.searchValue.value);
  const setSearchValue = useDispatch();
  return [searchValue, (name) => setSearchValue(changeValue(name))];
}
