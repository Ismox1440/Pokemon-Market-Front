import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { useAuth0 } from '@auth0/auth0-react';
import { baseURL } from '../../api/api';

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseURL}user`,
    prepareHeaders: async headers => {
      const { getAccessTokenSilently } = useAuth0();
      const accessToken = await getAccessTokenSilently();
      headers.set('Authorization', `Bearer ${accessToken}`);
      return headers;
    },
  }),
  endpoints: builder => ({

    getUser: builder.mutation({
        query: ({name,email, image }) => ({
            url: '/login',
            method: "POST",
            body: {name, email, image}
        })

    })

    // Definición de tus endpoints de consulta
    // ...
  }),
});

// Interceptor de solicitudes   
export const { useGetUserMutation } = api;
export default api;
