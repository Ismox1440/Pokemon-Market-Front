import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL } from '@/api/api';
import { Item } from '@/types/item';
import { Pokeball } from '@/types/pokeball';

interface Shop {
    items: Item[]
    pokeballs: Pokeball[]
}

export const itemEndpoint = createApi({
  tagTypes: [''],
  reducerPath: 'itemEndpoint',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseURL}item`,
    prepareHeaders: (headers, { getState }: { getState: Function }) => {
      const accessToken = getState().authSlice.accessToken;
      headers.set('Authorization', `Bearer ${accessToken}`);
      return headers;
    },
  }),
  endpoints: builder => ({
    getShop: builder.query<Shop, void>({
      query: () => '/shop',
    }),
  }),
});

export const { useGetShopQuery } = itemEndpoint;
