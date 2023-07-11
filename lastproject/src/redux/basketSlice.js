import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products:[], 
}

const basketSlice = createSlice({
    name: 'bascet',
    initialState,
    reducers: {
        addProductToBasket: (state, action) => {
       // console.log(action.payload)
        state.products = [...state.products, action.payload]
        },
        deleteProductFromBasket: (state, action) => {
        const productId = action.payload;
        state.products = state.products.filter(product => product.id !== productId);
        },
        cleanBascet: (state) => (state.products = []),
    },
})

export const { addProductToBasket,
                deleteProductFromBasket,
                cleanBascet } = basketSlice.actions
export const basketReducer=basketSlice.reducer