import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';

export const modalDialog = createSlice({
  name: 'modalDialog',
  initialState: { value: '' },
  reducers: {
    changeModalDialog: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeModalDialog } = modalDialog.actions;
export default modalDialog.reducer;

export function useModalDialog(): [string, (name: string) => void] {
  const modalDialog = useSelector((state: RootState) => state.modalDialog.value);
  const setModalDialog = useDispatch();
  return [modalDialog, (name) => setModalDialog(changeModalDialog(name))];
}
