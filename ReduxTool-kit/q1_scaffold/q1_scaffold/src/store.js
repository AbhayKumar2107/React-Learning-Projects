const redux = require("redux");

// const { timerReducer } = require("./redux/reducers/timerReducer");
// const { counterReducer } = require("./redux/reducers/counterReducer");

import timerReducer from "./redux/reducers/timerReducer";
import counterReducer from "./redux/reducers/counterReducer";
import { configureStore } from "@reduxjs/toolkit";

// refactor to use configureStore
// const rootReducer = redux.combineReducers({
//   timer: timerReducer,
//   counter: counterReducer
// });
// export const store = redux.createStore(rootReducer);

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    timer: timerReducer
  }
});