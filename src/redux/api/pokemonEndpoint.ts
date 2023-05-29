import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL } from '@/api/api';
import { toast } from 'sonner';
import { userEndpoint } from './userEndpoint';
import { Item, Pokemon, UserItem } from '@/types';
import { lovePotion } from '@/mock/item';

export const pokemonEndpoint = createApi({
  tagTypes: ['Pokemon', 'LastedPokemonsForSale'],
  reducerPath: 'pokemonEndpoint',

  baseQuery: fetchBaseQuery({
    baseUrl: `${baseURL}pokemon`,
    prepareHeaders: (headers, { getState }: { getState: Function }) => {
      const accessToken = getState().authSlice.accessToken;
      headers.set('Authorization', `Bearer ${accessToken}`);
      return headers;
    },
  }),
  endpoints: builder => ({
    getLastedPokemonForSale: builder.query<Pokemon[], void>({
      query: () => `/lastedpokemonsforsale`,
      providesTags: ['LastedPokemonsForSale'],
    }),
    getPokemon: builder.query<Pokemon, string>({
      query: id => `/id/${id}`,
      providesTags: ['Pokemon'],
    }),

    claimLovePotion: builder.mutation({
      query: ({ user, pokemon, count }) => ({
        url: `/${pokemon._id}/claim-lovepotion`,
        method: 'PUT',
        body: { user_id: user._id },
      }),
      onQueryStarted: async (
        { pokemon, user, count },
        { dispatch, queryFulfilled }
      ) => {
        const pathResult = dispatch(
          pokemonEndpoint.util.updateQueryData(
            'getPokemon',
            pokemon._id,
            oldData => {
              const newDataLove = new Date();
              return {
                ...oldData,
                lastLovePotion: newDataLove,
              };
            }
          )
        );

        const pathUser = dispatch(
          userEndpoint.util.updateQueryData(
            'getUser',
            { email: user.email },
            oldData => {
              const userPotions = user.items.find(
                (i: { item: Item }) => i.item.name === 'Love Potion'
              );
              const potionCount = (userPotions?.count ?? 0) + count;
              return {
                ...oldData,
                items: [
                  ...oldData.items.filter((i: UserItem) => i.item.name !== 'Love Potion'),
                  { item: userPotions?.item ?? lovePotion, count: potionCount },
                ],
              };
            }
          )
        );

        try {
          await queryFulfilled;
        } catch (error) {
          toast.error('Error claiming love potion');
          pathResult.undo();
          pathUser.undo();
        }
      },
    }),
  }),
});

export const {
  useGetLastedPokemonForSaleQuery,
  useGetPokemonQuery,
  useClaimLovePotionMutation,
} = pokemonEndpoint;
