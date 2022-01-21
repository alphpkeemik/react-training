import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import todosReducer from "./todos";

const rootReducer = combineReducers({todo: todosReducer})

const store = createStore(
    rootReducer,
    /* @ts-ignore */
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
)

export type TRootState = ReturnType<typeof rootReducer>
export default store;