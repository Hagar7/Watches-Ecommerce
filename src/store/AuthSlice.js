import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const insertUserData = createAsyncThunk('auth/insertUserData',async (data1,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
        let {data} =await axios.post(`https://sticky-note-fe.vercel.app/signup`,data1) 
        if(data?.errors){
            return rejectWithValue(data) 
        }
        return data;
    
})


export const LoginUser = createAsyncThunk('auth/LoginUser',async (data2,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
        let {data} =await axios.post(`https://sticky-note-fe.vercel.app/signin`,data2) 
         if(data?.errors){
            return rejectWithValue(data) 
        }
        return data;
})








const initialState =JSON.parse(localStorage.getItem("auth")) || {user:null,error:null,token:""}
const AuthSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        removeErorr:(state, action)=>{
            state.error=[]
        },
        logOut:(state, action)=>{
            localStorage.removeItem("auth")
            state ={user:null,error:null,token:""}
        },

      
    },
    extraReducers: (builder)=> {
        //register
        builder.addCase(insertUserData.pending,(state)=>{
            state.error = null;
        })
        builder.addCase(insertUserData.fulfilled,(state, action)=>{
            state.error = action.payload
        })
        builder.addCase(insertUserData.rejected,(state, action)=>{
            state.error = action.payload; 
        })

        //login

        builder.addCase(LoginUser.pending,(state, action)=>{
            state.error = null;
        })
        builder.addCase(LoginUser.fulfilled,(state, action)=>{ 
            state.error = action.payload
            state.user = action.payload.user
            state.token = action.payload.token
        })
        builder.addCase(LoginUser.rejected,(state, action)=>{
            state.error = action.payload; 
        })
        
    }
})


export default AuthSlice.reducer;
export const {removeErorr,logOut}= AuthSlice.actions;