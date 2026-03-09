import { createStore, combineReducers } from "redux";
import { timerReducer } from "./redux/reducers/timerReducer";
import { counterReducer } from "./redux/reducers/counterReducer";

const rootReducer = combineReducers({
  timer: timerReducer,
  counter: counterReducer,
});

export const store = createStore(rootReducer);
