import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL } from '../../api/api';
import { IUser } from '../../types/user';
import { toast } from 'sonner';
import { addItem } from '@/utils/userUtils';
import { IItem } from '@/types/item';

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
  }),
});

export const { useGetUserQuery, useLazyGetUserQuery, useBuyItemMutation } =
  userEnpoint;
