import { createSlice } from '@reduxjs/toolkit'

const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        products: [],
        totalPrice: 0,
        totalProducts: 0,
    },
    reducers: {
        addProductToBasket: (state, action) => {
            const productById = state.products.find(el => el.id === action.payload.id)
            productById
                ? productById.quantity++
                : state.products.push({ ...action.payload, quantity: 1 })
        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter(el => el.id !== action.payload.id)

        },
        cleanBasket: (state) => {state.products = []},
        countTotalPrice: (state) => {
            state.totalPrice = state.products.reduce((total, el) => el.price * el.quantity + total, 0)
        },
        countTotalProducts: (state) => { state.totalProducts = state.products.length },
        decreaseProduct: (state, action) => {
            const productById = state.products.find(({ id }) => id === action.payload.id);
            const index = state.products.findIndex(el => el.id === action.payload.id);
            productById.quantity > 1 ? productById.quantity-- : state.products.splice(index, 1)

        },
    },
})

export const {
    addProductToBasket,
    cleanBasket,
    countTotalProducts,
    decreaseProduct,
    deleteProduct,
    countTotalPrice
} = basketSlice.actions;
export const basketReducer = basketSlice.reducer; 