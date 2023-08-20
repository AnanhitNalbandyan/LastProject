    import { configureStore } from '@reduxjs/toolkit'
    
    import { apiSlice } from './apiSlice'
    import { basketReducer } from './basketSlice'
        
    import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
    import storage from 'redux-persist/lib/storage'
    
    const persistConfig = {
        key: 'root',
        storage,
        blacklist:[apiSlice.reducer],
}

    const persistedReducer = persistReducer(persistConfig, basketReducer)

    export const store = configureStore({
        reducer: {
        basket: persistedReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
        }).concat(apiSlice.middleware),
    })

    export const persistor = persistStore(store)