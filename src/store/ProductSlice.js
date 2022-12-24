import { createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"

export const getProductsData = createAsyncThunk('product/getProducts', async(_,thunkAPI)=>{
      const {rejectWithValue} = thunkAPI;
    try {
        let {data} =await axios.get(`http://localhost:3002/products`) 
         return data;
        
    } catch (error) {
       return rejectWithValue(error.message); 
    }
})

const productSlice  = createSlice({
    name:'product',
    initialState : {products:[],error:null},
    
    extraReducers: (builder)=> {
        builder.addCase(getProductsData.pending,(state, action)=>{
            state.error = null;
            
        })
        builder.addCase(getProductsData.fulfilled,(state, action)=>{
            state.products =action.payload;
            state.error = null;
        })
        builder.addCase(getProductsData.rejected,(state, action)=>{
            state.error = action.payload; 
        })
    }

})

export default productSlice.reducer;



