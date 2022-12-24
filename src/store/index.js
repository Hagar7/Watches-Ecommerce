import { configureStore } from "@reduxjs/toolkit";
import products from "./ProductSlice";
import cart from "./CartSlice";
import auth from "./AuthSlice";
import category from "./CategorySlice";




export default configureStore({
    reducer:{
        products,
        cart,
        auth,
        category,
       
       
      

    }
})