import { configureStore } from '@reduxjs/toolkit';
import searchValue from './Content/Page/MainPage/searchValue';
import formCards from './Content/Page/FormPage/CardList/formCards';
import modalDialog from './Content/Page/MainPage/modalDialog';
import { oneApi } from './Content/Page/MainPage/oneApi';

export const store = configureStore({
  reducer: {
    searchValue,
    formCards,
    modalDialog,
    [oneApi.reducerPath]: oneApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(oneApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
