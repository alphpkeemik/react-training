import React from "react";
import Todo from "../Todo";
import NewTodo from "../NewTodo";
import {v4} from "uuid";
import TodoContext from "../contexts/TodoContext";

function Todos() {

    const {todos, setTodos} = React.useContext(TodoContext)

    const unDoneTodoCount = React.useMemo(() => {
        return todos.filter(todo => {
            return !todo.done
        }).length;
    }, [todos])

    React.useEffect(() => {
        document.title = 'Amount of undone todos: ' + unDoneTodoCount
        return () => {
            console.log('removed')
        }
    }, [unDoneTodoCount])

    const onNewTodo = (todo) => {
        if (!(todo.title || todo.content)) {
            return
        }
        const newTodo = {
            ...todo,
            id: v4()
        }
        setTodos((prevState) => {
            return [...prevState, newTodo];
        })
    }

    const editTodo = (id, changes) => {
        setTodos((prevState) => {
            return prevState.map(todo => {
                if (id !== todo.id) {
                    return todo;
                }
                return {
                    ...todo,
                    ...changes,
                }
            });
        })
    }

    const toggleTodoDone = (id, done) => {
        editTodo(id, {done});
    }

    const renderTodo = ({id, title, content, done}) => {
        return <Todo
            id={id}
            toggleDoneState={() =>toggleTodoDone(id, !done)}
            key={id}
            title={title}
            content={content}
            done={done}
        />
    }
    return (
        <div>
            <NewTodo onSubmit={onNewTodo} />
            <div className="todos">
                {
                    todos.map(renderTodo)
                }
            </div>

        </div>
    );
}

export default Todos;