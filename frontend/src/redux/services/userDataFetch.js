import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const userDataFetch = createApi({
  reducerPath: 'userDataFetch',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://react-node-assignment1.onrender.com/api/getUser' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => 'users',
    }),
  }),
})

export const { useGetUsersQuery } = userDataFetch