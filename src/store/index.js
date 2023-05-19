import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import itemSlice from "./items-slice";
import uiSlice from "./ui-slice";
import locationSlice from "./location-slice";
import productSlice from "./product-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    items: itemSlice.reducer,
    ui: uiSlice.reducer,
    location: locationSlice.reducer,
    products: productSlice.reducer,
    cart: cartSlice.reducer
  },
});

export default store;
