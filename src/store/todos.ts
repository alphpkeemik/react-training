import {TTodo} from "../../types.t";
import {Action} from "redux";

const namespace = '#todos';
const prefix = (actionType: string) => `${namespace}/${actionType}`

interface ITodosState {
    todos: TTodo[];
    counter: number;
}

const initialState: ITodosState = {
    todos: [],
    counter: 0
}
interface TTodoAction extends Action{
    type: string,
    payload?:TTodo
}

export const ADD_TODO = prefix('ADD_TODO');
export const EDIT_TODO = prefix('EDIT_TODO');
export const INCREMENT = prefix('INCREMENT')
export const DECREMENT = prefix('DECREMENT')


const todosReducer = (state: ITodosState = initialState, action:any) => {
    console.log('todos reducer', {type: action.type, counter: state.counter, action: action})
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + (action.payload??1)
            }
            break;
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - (action.payload??1)
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