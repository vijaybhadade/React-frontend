import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./Features//counterSlice";

//create store for add features 
export const store = configureStore({
    reducer:{
        //access counterFeactures and add here
       counter:counterReducer
    }
});
