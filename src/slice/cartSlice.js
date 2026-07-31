import { createSlice } from "@reduxjs/toolkit";


const initialState =  {
    cartItems : JSON.parse(localStorage.getItem("clickphones")) || [],
    totalAmount : 0
}
const cartSlice =  createSlice({
    name : 'cart',
    initialState,
    reducers : {
        addtoCart(state , action){
            const pid = action.payload;
            const existingItem = state.cartItems.find( i => i.id === pid.id);

            if(existingItem){
                existingItem.quantity += 1;
            }
            else
            {
                state.cartItems.push({...pid, quantity : 1});
            }
            localStorage.setItem('clickphone' , JSON.stringify(state.cartItems));
        },
        updatequan(state,action){
            const {pid, change} = action.payload;
            const existingItem = state.cartItems.find( i => i.id === pid);

            if(existingItem)
            {
                existingItem.quantity += change;

                if(existingItem.quantity <= 1)
                {
                    existingItem.quantity = 1;
                }
            }
            localStorage.setItem('clickphones', JSON.stringify(state.cartItems));

        },
        removecart(state,action){
            const removeid = action.payload;
            state.cartItems = state.cartItems.filter(i => i.id !== removeid.id)

            localStorage.setItem('clickphones', JSON.stringify(state.cartItems));
        },
        calTotal(state){
            state.totalAmount = state.cartItems.reduce(
                (sum,product) => sum + product.price * product.quantity , 0
            );
        }

        
    }
})

export const { addtoCart,updatequan,removecart,calTotal } = cartSlice.actions;
export default cartSlice.reducer;

