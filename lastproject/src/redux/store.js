    import { configureStore } from '@reduxjs/toolkit'
    import { sliceApi } from './apiSlice'
    import { basketReducer } from './basketSlice'
    export const store = configureStore({
        reducer: {
        basket:basketReducer,
        [sliceApi.reducerPath]: sliceApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sliceApi.middleware),
    })