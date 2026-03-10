// remove the counter action creators imports

import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = { count: 0 };

// refactor to use the createSlice method
// export const counterReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case INCREMENT_COUNTER:
//       return { count: ++state.count };
//     case DECREMENT_COUNTER:
//       return { count: --state.count };

//     case RESET_COUNTER:
//       return { count: 0 };
//     default:
//       return state;
//   }
// };
const counterSlice = createSlice({
  name: "counter",
  initialState: INITIAL_STATE,
  reducers: {
    incrementCounter: (state) => {
      state.count += 1;
    },

    decrementCounter: (state) => {
      state.count -= 1;
    },

    resetCounter: (state) => {
      state.count = 0;
    }
  }
});

// export the counter reducer function and action creators here

export const { incrementCounter, decrementCounter, resetCounter } = counterSlice.actions;

export default counterSlice.reducer;