import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IProduct } from "../../interfaces/products";

interface IFetchAPI {
  products: IProduct[];
  limit: number;
  skip: number;
  total: number;
}

export const productAPI = createApi({
  reducerPath: "productAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  tagTypes: ["Products"],
  endpoints: (build) => ({
    fetchAllPosts: build.query<IFetchAPI, string>({
      query: () => ({
        url: `/products`
        // params: {
        //   _limit: limit
        // }
      }),
      providesTags: result => ["Products"]
    }),
    fetchOneProduct: build.query<IProduct, number>({
      query: (id: number) => ({
        url: `/products/${id}`,
      }),
      providesTags: result => ["Products"]
    })
    // createPost: build.mutation<IPost, IPost>({
    //   query: (post) => ({
    //     url: `/posts`,
    //     method: 'POST',
    //     body: post
    //   }),
    //   invalidatesTags: ['Products']
    // }),
    // updatePost: build.mutation<IPost, IPost>({
    //   query: (post) => ({
    //     url: `/posts/${post.id}`,
    //     method: 'PUT',
    //     body: post
    //   }),
    //   invalidatesTags: ['Products']
    // }),
    // deletePost: build.mutation<IPost, IPost>({
    //   query: (post) => ({
    //     url: `/posts/${post.id}`,
    //     method: 'DELETE',
    //   }),
    //   invalidatesTags: ['Products']
    // }),
  })
});

export const { useFetchAllPostsQuery } = productAPI;
