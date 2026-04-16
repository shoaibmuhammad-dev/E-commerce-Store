import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../baseQuery";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery,
  tagTypes: ["Category"],
  keepUnusedDataFor: 60,
  refetchOnFocus: false,
  refetchOnReconnect: true,

  endpoints: (builder) => ({
    // add category
    addCategory: builder.mutation({
      query: (data) => ({
        url: "/categories",
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["Category"],
    }),

    // get categories
    getCategories: builder.query({
      query: ({ page = 1, limit = 10, search = "" } = {}) => {
        const params = new URLSearchParams({
          page,
          limit,
        });

        if (search) params.append("search", search);

        // return `/categories?${params.toString()}`;
        return `/categories`;
      },
    }),
  }),
});

export const { useAddCategoryMutation, useGetCategoriesQuery } = categoryApi;
