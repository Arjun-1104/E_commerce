import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import fetchCount from "./productListAPI";

const initialState = {
    value: 0,
    status: 'idle',
};

export const incrementAsync = createAsyncThunk(
    'counter/fetchCount',
     async (amount) => {
        const response = await fetchCount(amount);
        return response;
    })


export const productListSlice = createSlice({
    name: 'productList',
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

export const {increment} = productListSlice.actions;

export const selectCount = (state) => state.productList.value;

export default productListSlice.reducer;