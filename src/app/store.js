import { configureStore } from '@reduxjs/toolkit'
import productListReducer from '../features/product-list/productListSlice'
import authReducer from '../features/auth/authSlice'
import cartReducer from '../features/cart/CartSlice'
export const store = configureStore({
  reducer: {
    productList: productListReducer,
    auth: authReducer,
    cart: cartReducer,
  },
})

