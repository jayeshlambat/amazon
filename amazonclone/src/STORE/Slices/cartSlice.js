import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    cart: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {

            state.cart.push(action.payload)
        },
        removeCart: (state, action) => {
            state.cart.splice(
                state.cart.findIndex((item) => item.productId === action.payload), 1
            )
        }
    }

})

export const { addToCart, removeCart } = cartSlice.actions
export default cartSlice.reducer