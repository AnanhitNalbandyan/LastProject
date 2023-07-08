import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products:[], 
}

const basketSlice = createSlice({
    name: 'bascet',
    initialState,
    reducers: {
        addProductToBasket: (state, action) => {
        console.log(action.payload)
        state.products = [...state.products, action.payload]
        },
        
        cleanBascet: (state) => (state.products = []),
    },
})

export const {addProductToBasket}=basketSlice.actions
export const basketReducer=basketSlice.reducer