import {createStore} from "redux";

import rootReducer from "./rootReducer";
import {RootState} from "../types/redux/states";
import {RootAction} from "../types/redux/actions";

const store = createStore<RootState, RootAction, undefined, undefined>(rootReducer)

export default store;