import { createSlice } from "@reduxjs/toolkit";
import { getProduct } from "../Components/Brands/BrandInfo";

export const CART_STORAGE_KEY = "clickphones";

const clampQuantity = (quantity, stock) => Math.min(Math.max(1, quantity), stock);

// Price, name and image always come from the catalog, never from the caller or storage.
const toCartItem = (product, quantity) => {
    const { id, name, price, image } = product;
    return { id, name, price, image, quantity: clampQuantity(quantity, product.stock) };
}

// Rebuild saved items from the catalog: drops unknown or sold-out products,
// refreshes stale/tampered prices and caps quantities at current stock.
export const rehydrateCart = (saved) => {
    if (!Array.isArray(saved)) return [];
    const items = [];
    for (const entry of saved) {
        const product = getProduct(entry?.id);
        const quantity = Math.floor(Number(entry?.quantity));
        if (!product || product.stock < 1 || !(quantity >= 1)) continue;
        if (items.some(i => i.id === product.id)) continue;
        items.push(toCartItem(product, quantity));
    }
    return items;
}

const loadCart = () => {
    try {
        return rehydrateCart(JSON.parse(localStorage.getItem(CART_STORAGE_KEY)));
    } catch {
        return [];
    }
}

const initialState =  {
    cartItems : loadCart(),
}
const cartSlice =  createSlice({
    name : 'cart',
    initialState,
    reducers : {
        addtoCart(state , action){
            const { product: { id }, quantity = 1 } = action.payload;
            const product = getProduct(id);
            if (!product || product.stock < 1) return;
            const existingItem = state.cartItems.find( i => i.id === id);

            if(existingItem){
                existingItem.quantity = clampQuantity(existingItem.quantity + quantity, product.stock);
            }
            else
            {
                state.cartItems.push(toCartItem(product, quantity));
            }
        },
        updatequan(state,action){
            const {pid, change} = action.payload;
            const existingItem = state.cartItems.find( i => i.id === pid);
            const product = getProduct(pid);

            if(existingItem && product)
            {
                existingItem.quantity = clampQuantity(existingItem.quantity + change, product.stock);
            }
        },
        removecart(state,action){
            const removeid = action.payload;
            state.cartItems = state.cartItems.filter(i => i.id !== removeid.id)
        },
        clearCart(state){
            state.cartItems = [];
        },
    }
})

export const selectCartItems = (state) => state.cart.cartItems;

export const selectCartTotal = (state) =>
    state.cart.cartItems.reduce((sum, product) => sum + product.price * product.quantity, 0);

export const selectCartCount = (state) =>
    state.cart.cartItems.reduce((count, product) => count + product.quantity, 0);

export const { addtoCart,updatequan,removecart,clearCart } = cartSlice.actions;
export default cartSlice.reducer;
