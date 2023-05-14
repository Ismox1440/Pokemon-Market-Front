import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL } from '../../api/api';
import { IPokemon } from '@/types/pokemon';

export const pokemonEndpoint = createApi({
  tagTypes: ['Pokemon', 'LastedPokemonsForSale'],
  reducerPath: 'pokemonEndpoint',

  baseQuery: fetchBaseQuery({
    baseUrl: `${baseURL}pokemon`,
    prepareHeaders: (headers, { getState }: { getState: Function }) => {
      const accessToken = getState().accessToken;
      headers.set('Authorization', `Bearer ${accessToken}`);
      return headers;
    },
  }),
  endpoints: builder => ({
    getLastedPokemonForSale: builder.query<IPokemon[], void>({
      query: () => `/lastedpokemonsforsale`,
      providesTags: ['LastedPokemonsForSale'],
    }),
  }),
});

export const {useGetLastedPokemonForSaleQuery} = pokemonEndpoint;
