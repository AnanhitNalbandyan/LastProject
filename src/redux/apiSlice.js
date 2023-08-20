
    import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

    export const baseUrl = "http://127.0.0.1:3333/"//ссылка на все продукты
    
    export const apiSlice = createApi({
        reducerPath: "categories",
        baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
        endpoints: (builder) => ({
            getAllCategories: builder.query({
            query: () => "categories/all",
            }),
            getOneCategory: builder.query({
            query: (id) => `categories/${id}`,
            }),
            getAllPropducts: builder.query({
            query: () => "products/all",
            }),
            getOneProductByCategory: builder.query({
            query: (id) => `products/${id}`,
            }),
            
            postPhoneNumberForDiscount: builder.mutation({
                query: (newPhone) => ({
                    url: `/sale/send`,
                    method: 'POST',
                    body: newPhone,
                }),
                invalidatesTags: ['PhoneNumber'],
            }),
            addOrder: builder.mutation({
                query: (body) => ({
                    url: `/order/send`,
                    method: 'POST',
                    body,
                }),
                invalidatesTags: ['Order'],
            })

        }),
        })


    export const {
        useGetAllCategoriesQuery,
        useGetOneCategoryQuery,
        useGetAllPropductsQuery,
        useGetOneProductByCategoryQuery,
        usePostPhoneNumberForDiscountMutation,
        useAddOrderMutation
    } = apiSlice