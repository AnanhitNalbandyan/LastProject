    import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


    export const sliceApi = createApi({
            
            reducerPath: 'products',
            
        baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:3333/categories/all' }),


        endpoints: (builder) => ({
            getAllCategories: builder.query({
            query: () => `categories`,
            }),
        
        getProductsCategories: builder.query({
            query: (category) => `category/${category}`,
        }),
        
        getSingleProduct: builder.query({
            query: (id) => `${id}`,
            }),
        }),
        })

export const { useGetAllCategoriesQuery,
                useGetProductsCategoriesQuery,
                useGetSingleProductQuery } = sliceApi