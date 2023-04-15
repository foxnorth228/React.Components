import { configureStore } from '@reduxjs/toolkit';
import searchValue from './Content/Page/MainPage/searchValue';
import cardList from './Content/Page/MainPage/cardList';

export const store = configureStore({
  reducer: {
    searchValue,
    cardList,
  },
});

export type RootState = ReturnType<typeof store.getState>;
