import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { CART_STORAGE_KEY } from './slice/cartSlice'
export const store = configureStore({
    reducer : {
        cart : cartReducer,
    }
})

let savedItems = store.getState().cart.cartItems
store.subscribe(() => {
    const { cartItems } = store.getState().cart
    if (cartItems === savedItems) return
    savedItems = cartItems
    try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems))
    } catch {
        // storage unavailable (private mode, quota) — cart stays in memory only
    }
})
