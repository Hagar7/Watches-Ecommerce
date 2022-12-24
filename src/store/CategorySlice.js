import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const getCategories =createAsyncThunk('category/getCategories', async(_,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try {
       let {data} =await axios.get('http://localhost:3002/categories')
       return data;
    } catch (error) {
        return rejectWithValue(error.message); 
    }
})


const categorySlice = createSlice({
    name:'category',
    initialState : {category:[],error:null},
    extraReducers:(builder)=>{
        builder.addCase(getCategories.pending,(state, action)=>{
            state.error = null;
            
        })
        builder.addCase(getCategories.fulfilled,(state, action)=>{
            state.category =action.payload;
            state.error = null;
        })
        builder.addCase(getCategories.rejected,(state, action)=>{
            state.error = action.payload; 
        })
    }
})

export default categorySlice.reducer;