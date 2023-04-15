import { configureStore } from '@reduxjs/toolkit';
import searchValue from './Content/Page/MainPage/searchValue';

export const store = configureStore({
  reducer: {
    searchValue,
  },
});

export type RootState = ReturnType<typeof store.getState>;
