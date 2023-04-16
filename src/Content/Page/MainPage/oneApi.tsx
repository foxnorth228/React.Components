import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { cardInf } from './CardList/dataCard';

export const oneApi = createApi({
  reducerPath: 'oneApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://the-one-api.dev/v2/',
  }),
  endpoints: (builder) => ({
    getNames: builder.query<{ docs: cardInf[] }, string>({
      query: (name) => ({
        url: `character?name=/${name.replaceAll(' ', '+')}/i`,
        headers: { Authorization: 'Bearer 2YKrVJHDJfrg_jneDz-z' },
      }),
    }),
  }),
});

export const { useGetNamesQuery } = oneApi;
