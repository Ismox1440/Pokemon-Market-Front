import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL } from '@/api/api';
import { toast } from 'sonner';
import { addItem } from '@/utils/userUtils';
import { pokemonEndpoint } from './pokemonEndpoint';
import { IPokemon, IStats, IItem, IUser } from '@/types';

export const userEndpoint = createApi({
  tagTypes: ['User', 'Top'],
  reducerPath: 'userEndpoint',

  baseQuery: fetchBaseQuery({
    baseUrl: `${baseURL}user`,
    prepareHeaders: (headers, { getState }: { getState: Function }) => {
      const accessToken = getState().authSlice.accessToken;
      headers.set('Authorization', `Bearer ${accessToken}`);
      return headers;
    },
  }),
  endpoints: builder => ({
    getUser: builder.query<IUser, { email?: string }>({
      query: ({ email }) => {
        if (!email) throw new Error('Email are required');
        return `/getuser/${email}`;
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
        method: 'PUT',
        body: { user_id: user._id, item_id: item._id, itemType, count },
      }),
      onQueryStarted: async (
        { user, item, count },
        { dispatch, queryFulfilled }
      ) => {
        const pathResult = dispatch(
          userEndpoint.util.updateQueryData(
            'getUser',
            { email: user.email },
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

    updateUser: builder.mutation({
      query: ({ user, username, image, description }) => ({
        url: `/update`,
        method: 'PATCH',
        body: { user_id: user._id, username, image, description },
      }),

      invalidatesTags: ['User'],
    }),

    useItem: builder.mutation<void,{ user: IUser; item: IItem; pokemon: IPokemon; count: number }>({
      query: ({ user, item, count, pokemon }) => ({
        url: `/useitem`,
        method: 'PUT',
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
          userEndpoint.util.updateQueryData(
            'getUser',
            { email: user.email },
            oldData => {
              const userPotions = user.items.find(
                (i: { item: IItem }) => i.item.name === 'Love Potion'
              );
              if (!userPotions) return;
              return {
                ...oldData,
                items: [
                  ...oldData.items.filter(i => i.item.name !== 'Love Potion'),
                  { ...userPotions, count: (userPotions?.count ?? 0) - count },
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
        method: 'PUT',
        body: { user_id: user._id, pokemon_id: pokemon._id },
      }),
      onQueryStarted: async (
        { user, pokemon },
        { dispatch, queryFulfilled }
      ) => {
        try {
          await queryFulfilled;
          dispatch(
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
          dispatch(
            userEndpoint.util.updateQueryData(
              'getUser',
              { email: user.email },
              oldData => {
                return {
                  ...oldData,
                  pokemons: [...oldData.pokemons, pokemon],
                  coins: oldData.coins - pokemon.price,
                };
              }
            )
          );
          dispatch(
            pokemonEndpoint.util.invalidateTags(['LastedPokemonsForSale'])
          );
        } catch (error) {
          toast.error('Error buying pokemon');
        }
      },
    }),

    sellDirectPokemon: builder.mutation({
      query: ({ user, pokemon, price }) => ({
        url: '/sellpokemon',
        method: 'PUT',
        body: {
          user_id: user._id,
          pokemon_id: pokemon._id,
          price,
          typeSale: 'direct',
        },
      }),
      onQueryStarted: async (
        { pokemon, price, user },
        { dispatch, queryFulfilled }
      ) => {
        try {
          await queryFulfilled;
          dispatch(
            pokemonEndpoint.util.updateQueryData(
              'getPokemon',
              pokemon._id,
              oldData => {
                return { ...oldData, owner: undefined, onSale: true, price };
              }
            )
          );
          dispatch(
            pokemonEndpoint.util.invalidateTags(['LastedPokemonsForSale'])
          );
        } catch (error) {
          toast.error('Error selling pokemon');
        }
      },
      invalidatesTags: ['User'],
    }),

    sellP2PPokemon: builder.mutation({
      query: ({ user, pokemon, price }) => ({
        url: '/sellpokemon',
        method: 'PUT',
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
          dispatch(
            pokemonEndpoint.util.invalidateTags(['LastedPokemonsForSale'])
          );
        } catch (error) {
          toast.error('Error selling item');
          pathResult.undo();
        }
      },
    }),

    usePokeball: builder.mutation({
      query: ({ user, pokeball_id }) => ({
        url: '/usepokeball',
        method: 'PUT',
        body: { user_id: user._id, pokeball_id },
      }),
      onQueryStarted: async (
        { user, pokeball_id },
        { dispatch, queryFulfilled }
      ) => {
        const pathUser = dispatch(
          userEndpoint.util.updateQueryData(
            'getUser',
            { email: user.email },
            draft => {
              const userPokeballs = draft.pokeballs.filter(
                pb => pb.pokeball._id !== pokeball_id
              );
              const currentPokeball = draft.pokeballs.find(
                pb => pb.pokeball._id === pokeball_id
              );
              if (!currentPokeball) return draft;
              return {
                ...draft,
                pokeballs: [
                  ...userPokeballs,
                  { ...currentPokeball, count: currentPokeball.count - 1 },
                ],
              };
            }
          )
        );
        try {
          const res = await queryFulfilled;
          dispatch(
            userEndpoint.util.updateQueryData(
              'getUser',
              { email: user.email },
              draft => {
                draft.pokemons.push(res.data.pokemon);
              }
            )
          );
        } catch (error) {
          toast.error('Error using pokeball');
          pathUser.undo();
        }
      },
    }),

    claimGift: builder.mutation({
      query: user => ({
        url: '/claimdailygift',
        method: 'PUT',
        body: { user_id: user._id },
      }),
      onQueryStarted: async (user, { dispatch, queryFulfilled }) => {
        try {
          const res = await queryFulfilled;
          dispatch(
            userEndpoint.util.updateQueryData(
              'getUser',
              { email: user.email },
              oldData => ({
                ...res.data.user,
                pokemons: oldData.pokemons,
              })
            )
          );
          toast.success('Gift claimed');
        } catch (error) {
          toast.error('Error claiming gift');
        }
      },
    }),

    getTopUser: builder.query<
      { topCoins: IUser[]; topStats: { totalStats: number; user: IUser }[] },
      void
    >({
      query: () => `/top`,
      providesTags: ['Top'],
    }),

    getUserById: builder.query({
      query: (id: string) => `/id/${id}`,
      providesTags: ['User'], 
    })
  }),
});

export const {
  useGetUserQuery,
  useLazyGetUserQuery,
  useBuyItemMutation,
  useUseItemMutation,
  useBuyPokemonMutation,
  useSellDirectPokemonMutation,
  useSellP2PPokemonMutation,
  useUpdateUserMutation,
  useUsePokeballMutation,
  useClaimGiftMutation,
  useGetTopUserQuery,
  useGetUserByIdQuery
} = userEndpoint;

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
