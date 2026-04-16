import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../baseQuery";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery,
  tagTypes: ["User"],
  keepUnusedDataFor: 60,
  refetchOnFocus: false,
  refetchOnReconnect: true,

  endpoints: (builder) => ({
    // get users
    getUsers: builder.query({
      query: ({ page = 1, limit = 10, search = "", category } = {}) => {
        const params = new URLSearchParams({
          page,
          limit,
        });

        if (search) params.append("search", search);
        if (category) params.append("category", category);

        return `/users?${params.toString()}`;
      },

      transformResponse: (response) => {
        const data = response?.data ?? response;

        return {
          users: data?.users ?? [],
          pagination: data?.pagination ?? { total: 0 },
        };
      },

      providesTags: (result) =>
        result?.users
          ? [
              ...result.users.map((user) => ({
                type: "User",
                id: user.id,
              })),
              { type: "User", id: "LIST" },
            ]
          : [{ type: "User", id: "LIST" }],
    }),
  }),
});

export const { useAddProductMutation, useGetUsersQuery } = userApi;
