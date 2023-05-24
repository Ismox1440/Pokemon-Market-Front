import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL } from '@/api/api';
import { IItem } from '@/types/item';
import { IPokeball } from '@/types/pokeball';

interface IShop {
    items: IItem[]
    pokeballs: IPokeball[]
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
    getShop: builder.query<IShop, void>({
      query: () => '/shop',
    }),
  }),
});

export const { useGetShopQuery } = itemEndpoint;
