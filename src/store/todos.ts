import {TTodo} from "../../types.t";
import {Action, Dispatch} from "redux";
import {apiCall} from "./network";

const namespace = '#todos';
const prefix = (actionType: string) => `${namespace}/${actionType}`

interface ITodosState {
    todos: TTodo[];
    counter: number;
    loading: boolean;
}

const initialState: ITodosState = {
    todos: [],
    counter: 0,
    loading: false,
}
interface TTodoAction extends Action{
    type: string,
    payload?: TTodo | number
}

export const ADD_TODO = prefix('ADD_TODO');
export const EDIT_TODO = prefix('EDIT_TODO');
export const INCREMENT = prefix('INCREMENT')
export const SET_COUNT = prefix('SET_COUNT')
export const DECREMENT = prefix('DECREMENT')
export const LOADING = prefix('LOADING')

export const fetchAsyncNumber = () => async (dispatch: Dispatch) => {
    dispatch({
        type: LOADING,
        payload: true,
    })
    return apiCall().then(result => dispatch({
        type: SET_COUNT,
        payload: result,
    })).finally(() => {
        dispatch({
            type: LOADING,
            payload: false,
        })
    })
}

const todosReducer = (state: ITodosState = initialState, action:any) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: !!action.payload
            }
            break;
        case SET_COUNT:
            return {
                ...state,
                counter: action.payload
            }
            break;
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + (action.payload ?? 1)
            }
            break;
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - (action.payload ?? 1)
            }
            break;
        case ADD_TODO:
            let newTodo = action.payload
            return {
                ...state,
                todos: [...state.todos, newTodo]
            }
            break;
        case EDIT_TODO:
            const changes = action.payload
            const id = action.payload.id
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (id !== todo.id) {
                        return todo;
                    }
                    return {
                        ...todo,
                        ...changes,
                    }
                })
            }
            break;
    }
    return state;
}

export default todosReducer;