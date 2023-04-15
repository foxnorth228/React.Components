import { configureStore } from '@reduxjs/toolkit';
import searchValue from './Content/Page/MainPage/searchValue';
import cardList from './Content/Page/MainPage/cardList';
import formCards from './Content/Page/FormPage/CardList/formCards';

export const store = configureStore({
  reducer: {
    searchValue,
    cardList,
    formCards,
  },
});

export type RootState = ReturnType<typeof store.getState>;
