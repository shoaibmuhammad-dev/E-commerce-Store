import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../baseQuery";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: baseQuery,
  tagTypes: ["Product"],

  endpoints: (builder) => ({
    // get products
    getProducts: builder.query({
      query: ({ page = 1, limit = 10, search, category, sortBy }) => {
        const params = new URLSearchParams({ page, limit });

        if (search) params.append("search", search);
        if (category) params.append("category", category);
        if (sortBy) params.append("sortBy", sortBy);

        return `/products?${params}`;
      },

      transformResponse: (response) => {
        const data = response?.data ?? response;

        return {
          products: data?.products ?? [],
          pagination: data?.pagination ?? { total: 0 },
        };
      },

      providesTags: (result) =>
        result?.products
          ? [
              ...result.products.map((product) => ({
                type: "Product",
                id: product.id,
              })),
              { type: "Product", id: "LIST" },
            ]
          : [{ type: "Product", id: "LIST" }],
    }),

    // get product by slug
    getProduct: builder.query({
      query: ({ slug }) => ({
        url: `/products/${slug}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProductQuery, useGetProductsQuery } = productApi;
