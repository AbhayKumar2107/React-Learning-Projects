// remove the timer action creators imports
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { isRunning: false, elapsedTime: 0 };

// refactor to use the createSlice method
// export const timerReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case START_TIMER:
//       return { ...state, isRunning: true };
//     case PAUSE_TIMER:
//       return { ...state, isRunning: false };

//     case RESET_TIMER:
//       return { isRunning: false, elapsedTime: 0 };
//     case INCREMENT_TIMER:
//       return { ...state, elapsedTime: ++state.elapsedTime };
//     default:
//       return state;
//   }
// };

const timerSlice = createSlice({
  name: "timer",
  initialState: INITIAL_STATE,
  reducers: {
    startTimer: (state) => {
      state.isRunning = true;
    },

    pauseTimer: (state) => {
      state.isRunning = false;
    },

    resetTimer: (state) => {
      state.isRunning = false;
      state.elapsedTime = 0;
    },

    incrementTimer: (state) => {
      state.elapsedTime += 1;
    }
  }
});

// export the timer reducer function and action creators here

export const { startTimer, pauseTimer, resetTimer, incrementTimer } = timerSlice.actions;

export default timerSlice.reducer;