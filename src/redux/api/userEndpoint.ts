import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL } from '../../api/api';
import { IUser } from '../../types/user';

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
  }),
});

// Interceptor de solicitudes
export const { useGetUserQuery, useLazyGetUserQuery } = userEnpoint;
