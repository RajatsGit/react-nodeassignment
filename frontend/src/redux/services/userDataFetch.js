import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const userDataFetch = createApi({
  reducerPath: 'userDataFetch',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/getUser/' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => 'users',
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUsersQuery } = userDataFetch