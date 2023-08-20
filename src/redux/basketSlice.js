import { createSlice } from '@reduxjs/toolkit'

const initialState = {
        products: [],
        totalPrice: 0,
        totalProducts: 0,
    }

const basketSlice = createSlice({
    name: 'basket',
    initialState,
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
            state.totalPrice = state.products.reduce((accum, el) => el.price * el.quantity + accum, 0)
        },

        countTotalProducts: (state) => { state.totalProducts = state.products.length },
        
        descreaseProduct: (state, action) => {
            const productById = state.products.find(({ id }) => id === action.payload.id);
            const index = state.products.findIndex(el => el.id === action.payload.id);
            productById.quantity > 1 ? (productById.quantity -= 1 ) : state.products.splice(index, 1)

        },

    },
})

export const {
    addProductToBasket,
    cleanBasket,
    countTotalProducts,
    descreaseProduct,
    deleteProduct,
    countTotalPrice
} = basketSlice.actions;
export const basketReducer = basketSlice.reducer