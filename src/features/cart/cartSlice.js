import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import  fectchCount  from "./cartAPI";

const initialState = {
    value: 0,
    status: 'idle',
};

export const incrementAsync = createAsyncThunk(
    'counter/fechCount',
     async (amount) => {
        const response = await fectchCount(amount);
        return response;
    })


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increment: state => {
            state.value += 1;
        }
    },
    extraReducers: builder => {
        builder
        .addCase(incrementAsync.pending, (state)=> {
            state.status = 'loading';
        })
        .addCase(incrementAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.value += action.payload;
        });
    }
})

export const {increment} = cartSlice.actions;

export const selectCount = (state) => state.cart.value;

export default cartSlice.reducer;