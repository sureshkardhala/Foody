import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState: {
        cartItems:[],
        totalQuantity:0,
        TotalPrice:0,
        TotalQuantity:0,
    },
    reducers:{
        replaceData(state, action){
            state.totalQuantity = action.payload.totalQuantity;
            state.cartItems = action.payload.cartItems;
            state.TotalPrice=action.payload.TotalPrice;
            state.TotalQuantity=action.payload.TotalQuantity
        },
        addToCart(state, action){
            const newItem = action.payload;
            const existedItem = state.cartItems.find(item => item.id === newItem.id);
            if(existedItem){
                existedItem.quantity++;
                existedItem.totalPrice+=newItem.price;
            } else{
                state.cartItems.push({
                    id:newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    image: newItem.image,
                    rating: newItem.rating,
                    location: newItem.location,
                    restaurant:newItem.restaurant,
                    quantity:1,
                    totalPrice:newItem.price
                });
                state.totalQuantity ++;
            }
            state.TotalPrice+=newItem.price;
        },
        deleteFromCart(state, action){
            const id = action.payload.id;
            const existedItem = state.itemsList.find((item) => item.id === id);
            if(existedItem.quantity ===1){
                state.itemsList = state.itemsList.filter(item => item.id !== id);
                state.totalQuantity--;
            }else{
                existedItem.quantity--;
                existedItem.totalPrice-=existedItem.price;
                state.TotalPrice-=existedItem.price;
            }

        }
    }
});
export const cartActions = cartSlice.actions;
export default cartSlice;