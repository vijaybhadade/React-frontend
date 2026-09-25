import {createSlice} from "@reduxjs/toolkit";

export const counterSlice=createSlice({
    name:"counter",
    initialState:{
        value:0,
        payload:5,
    },
    reducers:{
        Increment:(state)=>{
            state.value+=1;
        },
        Decrement:(state)=>{
         state.value-=1;
        },
        FiveCounterIncre:(state,amount)=>{
          state.value+=amount.payload
        }
    }
});

export const {Increment,Decrement,FiveCounterIncre}=counterSlice.actions;
export default counterSlice.reducer;