import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL } from '../../api/api';
import { IUser } from '../../types/user';
import { toast } from 'sonner';
import { addItem } from '@/utils/userUtils';
import { IItem } from '@/types/item';
import { pokemonEndpoint } from './pokemonEndpoint';
import { IPokemon, IStats } from '@/types/pokemon';

export const userEnpoint = createApi({
  tagTypes: ['User'],
  reducerPath: 'userEnpoint',

  baseQuery: fetchBaseQuery({
    baseUrl: `${baseURL}user`,
    prepareHeaders: (headers, { getState }: { getState: Function }) => {
      const accessToken = getState().accessToken;
      headers.set('Authorization', `Bearer ${accessToken}`);
      return headers;
    },
  }),
  endpoints: builder => ({
    getUser: builder.query<IUser, { name?: string; email?: string }>({
      query: ({ name, email }) => {
        if (!name || !email) throw new Error('Name and email are required');
        return `/getuser/${email}?name=${name}`;
      },
      providesTags: ['User'],
    }),

    buyItem: builder.mutation<
      void,
      {
        user: IUser;
        item: IItem;
        itemType: 'pokeball' | 'item';
        count: number;
      }
    >({
      query: ({ user, item, count, itemType }) => ({
        url: `/buyitem`,
        method: 'POST',
        body: { user_id: user._id, item_id: item._id, itemType, count },
      }),
      onQueryStarted: async (
        { user, item, count },
        { dispatch, queryFulfilled }
      ) => {
        const pathResult = dispatch(
          userEnpoint.util.updateQueryData(
            'getUser',
            { name: user.username, email: user.email },
            oldData => {
              return {
                ...oldData,
                coins: oldData.coins - item.price * count,
                ...addItem(item, user, count),
              };
            }
          )
        );
        try {
          await queryFulfilled;
        } catch (error) {
          toast.error('Error buying item');
          pathResult.undo();
        }
      },
    }),
    useItem: builder.mutation<
      void,
      {
        user: IUser;
        item: IItem;
        pokemon: IPokemon;
        count: number;
      }
    >({
      query: ({ user, item, count, pokemon }) => ({
        url: `/useitem`,
        method: 'POST',
        body: {
          user_id: user._id,
          item_id: item._id,
          count,
          pokemon_id: pokemon._id,
        },
      }),
      onQueryStarted: async (
        { user, item, count, pokemon },
        { dispatch, queryFulfilled }
      ) => {
        const pathResult = dispatch(
          userEnpoint.util.updateQueryData(
            'getUser',
            { name: user.username, email: user.email },
            oldData => {
              return {
                ...oldData,
                items: [
                  ...oldData.items.filter(i => i.item._id !== item._id),
                  {
                    item: item,
                    count:
                      oldData.items.find(i => i.item._id === item._id)?.count ??
                      0 - count,
                  },
                ],
              };
            }
          )
        );
        const pathPokemon = dispatch(
          pokemonEndpoint.util.updateQueryData(
            'getPokemon',
            pokemon._id,
            oldDate => {
              return { ...oldDate, ...upgradePokemon(pokemon, count) };
            }
          )
        );
        try {
          await queryFulfilled;
        } catch (error) {
          toast.error('Error buying item');
          pathResult.undo();
          pathPokemon.undo();
        }
      },
    }),

    buyPokemon: builder.mutation({
      query: ({ user, pokemon }) => ({
        url: `/buypokemon`,
        method: 'POST',
        body: { user_id: user._id, pokemon_id: pokemon._id },
      }),
      onQueryStarted: async (
        { user, pokemon },
        { dispatch, queryFulfilled }
      ) => {
        const pathResult = dispatch(
          pokemonEndpoint.util.updateQueryData(
            'getPokemon',
            pokemon._id,
            oldData => {
              return {
                ...oldData,
                owner: user,
              };
            }
          )
        );

        try {
          await queryFulfilled;
        } catch (error) {
          toast.error('Error buying item');
          pathResult.undo();
        }
      },
    }),

    sellDirectPokemon: builder.mutation({
      query: ({ user, pokemon, price }) => ({
        url: '/sellpokemon',
        method: 'POST',
        body: {
          user_id: user._id,
          pokemon_id: pokemon._id,
          price,
          typeSale: 'direct',
        },
      }),
      onQueryStarted: async (
        { pokemon, price },
        { dispatch, queryFulfilled }
      ) => {
        const pathResult = dispatch(
          pokemonEndpoint.util.updateQueryData(
            'getPokemon',
            pokemon._id,
            oldData => {
              return {
                ...oldData,
                owner: undefined,
                price,
                onSale: true,
              };
            }
          )
        );

        try {
          await queryFulfilled;
        } catch (error) {
          toast.error('Error selling item');
          pathResult.undo();
        }
      },
    }),
    sellP2PPokemon: builder.mutation({
      query: ({ user, pokemon, price }) => ({
        url: '/sellpokemon',
        method: 'POST',
        body: {
          user_id: user._id,
          pokemon_id: pokemon._id,
          price,
          typeSale: 'p2p',
        },
      }),
      onQueryStarted: async (
        { pokemon, price },
        { dispatch, queryFulfilled }
      ) => {
        const pathResult = dispatch(
          pokemonEndpoint.util.updateQueryData(
            'getPokemon',
            pokemon._id,
            oldData => {
              return {
                ...oldData,
                price,
                onSale: true,
              };
            }
          )
        );

        try {
          await queryFulfilled;
        } catch (error) {
          toast.error('Error selling item');
          pathResult.undo();
        }
      },
    }),
  }),
});

export const {
  useGetUserQuery,
  useLazyGetUserQuery,
  useBuyItemMutation,
  useUseItemMutation,
  useBuyPokemonMutation,
  useSellDirectPokemonMutation,
  useSellP2PPokemonMutation
} = userEnpoint;

const upgradePokemon = (pokemon: IPokemon, potionCount: number) => {
  let expLevel = { exp: 0, level: 0 };
  let newStats = { ...pokemon.stats };
  const expToNextLevel = pokemon.growthRate.levels[pokemon.level].experience;
  if (!expToNextLevel)
    return { exp: pokemon.exp + potionCount * 50, level: pokemon.level };
  const newExp = pokemon.exp + 50 * potionCount;
  if (newExp >= expToNextLevel) {
    let newLevel = pokemon.growthRate.levels
      .filter(e => e.experience <= newExp)
      .slice(-1)[0].level;
    expLevel = { exp: newExp, level: newLevel };
    const modificador = pokemon.isMythical ? 5 : pokemon.isLegendary ? 2 : 1;
    Object.keys(pokemon.stats).forEach(stat => {
      const baseStat = pokemon.stats[stat as keyof IStats];
      const newStat =
        Math.floor(
          (((2 * baseStat + 31 + 252 / 4) * newLevel) / 100 + 5) * modificador
        ) + pokemon.baseStats[stat as keyof IStats];
      newStats[stat as keyof IStats] = newStat;
    });
  } else expLevel = { exp: newExp, level: pokemon.level };
  return { ...expLevel, stats: newStats };
};
