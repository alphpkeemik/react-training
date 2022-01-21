import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import todosReducer from "./todos";

const rootReducer = combineReducers({todo: todosReducer});

const createWithMiddleware = applyMiddleware(thunk)(createStore);

const store = createWithMiddleware(
    rootReducer,
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export type TRootState = ReturnType<typeof rootReducer>;

export default store;