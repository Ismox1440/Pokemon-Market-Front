import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL } from '../../api/api';
import { IPokemon } from '@/types/pokemon';
import { toast } from 'sonner';
import { userEnpoint } from './userEndpoint';
import { IItem } from '@/types/item';
import { lovePotion } from '@/mock/item';

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
    getPokemon: builder.query<IPokemon, string>({
      query: id => `/id/${id}`,
      providesTags: ['Pokemon'],
    }),

    claimLovePotion: builder.mutation({
      query: ({ user, pokemon, count }) => ({
        url: `/${pokemon._id}/claim-lovepotion`,
        method: 'POST',
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
              const newDataLove = new Date()
              return {
                ...oldData,
                lastLovePotion: newDataLove
              };
            }
          )
        );
    

        const pathUser = dispatch(
          userEnpoint.util.updateQueryData(
            'getUser',
            { name: user.username, email: user.email },
            oldData => {
              const userPotions = user.items.find((i: {item: IItem}) => i.item.name === 'Love Potion')
              const potionCount = (userPotions?.count ?? 0) + count
              console.log(potionCount)
              return {
                ...oldData,
                items: [...oldData.items.filter(i => i.item.name !== 'Love Potion'), {item: userPotions?.item ?? lovePotion, count: potionCount }
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

export const { useGetLastedPokemonForSaleQuery, useGetPokemonQuery, useClaimLovePotionMutation } =
  pokemonEndpoint;
