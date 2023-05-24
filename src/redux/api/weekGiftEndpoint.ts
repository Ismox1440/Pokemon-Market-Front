import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL } from '@/api/api';
import { IGiftWeek } from '@/types/giftWeek';

export const giftWeekEndpoint = createApi({
  tagTypes: ['GiftWeek'],
  reducerPath: 'giftWeekEndpoint',

  baseQuery: fetchBaseQuery({
    baseUrl: `${baseURL}weekgifts`,
    prepareHeaders: (headers, { getState }: { getState: Function }) => {
      const accessToken = getState().authSlice.accessToken;
      headers.set('Authorization', `Bearer ${accessToken}`);
      return headers;
    },
  }),
  endpoints: builder => ({
    getGiftWeek: builder.query<IGiftWeek, void>({
      query: () => `/current`,
      providesTags: ['GiftWeek'],
    }),
 
  }),
});

export const { useGetGiftWeekQuery } = giftWeekEndpoint;
