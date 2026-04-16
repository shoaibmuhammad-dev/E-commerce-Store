import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../baseQuery";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery,
  tagTypes: ["Product"],
  keepUnusedDataFor: 60,
  refetchOnFocus: false,
  refetchOnReconnect: true,

  endpoints: (builder) => ({
    // add product
    addProduct: builder.mutation({
      query: (data) => ({
        url: "/products",
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["Product"],
    }),

    // get products
    getProducts: builder.query({
      query: ({ page = 1, limit = 10, search = "", category, sortBy } = {}) => {
        const params = new URLSearchParams({
          page,
          limit,
        });

        if (search) params.append("search", search);
        if (category) params.append("category", category);
        if (sortBy) params.append("sortBy", sortBy);

        return `/products?${params.toString()}`;
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

    // update product
    updateProduct: builder.mutation({
      query: ({ data, slug }) => ({
        url: `/products/${slug}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useAddProductMutation,
  useGetProductsQuery,
  useGetProductQuery,
  useUpdateProductMutation,
} = productApi;
