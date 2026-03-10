import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { message: null };

// create alert slice to handle start, pause, timer actions below
const alertSlice = createSlice({
    name:'alert',
    initialState: INITIAL_STATE,
    reducers:{
        reset:(state)=>{
            state.message="";
        }
    },
    extraReducers:{
        "timer/startTimer":(state)=>{
            state.message = "Timer has started";
        },
        "timer/pauseTimer":(state)=>{
            state.message = "Timer is paused";
        },
        "timer/resetTimer":(state)=>{
            state.message = "Timer set to 0";
        }
    }
});

// export the alert reducer function here
export const alertReducer = alertSlice.reducer;

// create and export alert selector function here
export const alertSelector = (state)=>state.alertReducer.message;

//export reset alert function
export const resetAlert = alertSlice.actions.reset; 
