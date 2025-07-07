import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import  fectchCount  from "./authAPI";

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


export const authSlice = createSlice({
    name: 'auth',
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

export const {increment} = authSlice.actions;

export const selectCount = (state) => state.auth.value;

export default authSlice.reducer;