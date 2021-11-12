import {createContext} from "react"



const TodoContext = createContext({
    todos: [

    ],
    setTodos: (todos) => {

    }
})

export default TodoContext;