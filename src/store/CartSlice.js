import { createSlice } from "@reduxjs/toolkit";




const cartSlice = createSlice({
    name: 'cart',
    initialState:  {
        cart: []
      },
      reducers:{
      
        
        addToCart:(state,action)=>{
        const itemInCart = state.cart.find((item)=>item.id === action.payload.id);
        if (itemInCart) {
            itemInCart.quantity++;
          } else {
            state.cart.push({ ...action.payload, quantity: 1 });
          }
          localStorage.setItem('cartList',JSON.stringify(state.cart));
        },
        incrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            item.quantity++;
          },
          decrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            if (item.quantity === 1) {
              item.quantity = 1
            } else {
              item.quantity--;
            }
          },
          removeItem: (state, action) => {
            const removeItem = state.cart.filter((item) => item.id !== action.payload);
            state.cart = removeItem;
          },
        },
    
    })


export default cartSlice.reducer;
export let {addToCart,removeItem, incrementQuantity,decrementQuantity} = cartSlice.actions;