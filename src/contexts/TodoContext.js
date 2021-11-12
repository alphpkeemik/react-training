import {createContext} from "react"



const TodoContext = createContext({
    todos: [

    ],
    setTodos: (todos) => {

    },
    getTodoById: (id) => ({}),
    editTodo: (id, changes) => {},
})

export default TodoContext;