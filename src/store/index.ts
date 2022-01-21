import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import todosReducer from "./todos";

const rootReducer = combineReducers({todo: todosReducer})

const store = createStore(rootReducer)

export type TRootState = ReturnType<typeof rootReducer>
export default store;