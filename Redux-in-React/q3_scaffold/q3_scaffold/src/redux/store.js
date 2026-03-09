import redux from "redux";

import {timerReducer} from './reducers/timerReducer';

export const store = redux.createStore(timerReducer);