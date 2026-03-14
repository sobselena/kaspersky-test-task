import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { User } from '../../types/user';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://69b534c8be587338e7154cca.mockapi.io/',
  }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getAllUsers: builder.query<User[], void>({
      query: () => ({ url: 'users' }),
      providesTags: ['Users'],
    }),
    deleteUser: builder.mutation<User, string>({
      query: (id) => ({
        url: `users/${id}`,
        method: 'DELETE',
      }),

      onQueryStarted: async (_, { queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
        } catch (apiError) {
          console.error(apiError);
        }
      },

      invalidatesTags: ['Users'],
    }),
  }),
});

export const { useGetAllUsersQuery, useDeleteUserMutation } = usersApi;
