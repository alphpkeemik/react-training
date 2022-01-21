import React from "react";
import Todo from "../Todo";
import NewTodo from "../NewTodo";
import {v4} from "uuid";
import {TTodo} from "../../types.t";
import {useDispatch, useSelector} from "react-redux";
import Button from "../components/Button";
import {ADD_TODO, DECREMENT, EDIT_TODO, fetchAsyncNumber, INCREMENT} from "../store/todos";
import {TRootState} from "../store";

const Todos: React.FC = () => {

    const dispatch = useDispatch();
    const count = useSelector((state: TRootState) => state.todo.counter)
    const todos = useSelector((state: TRootState) => state.todo.todos)
    const loading = useSelector((state: TRootState) => state.todo.loading)
    const unDoneTodoCount = React.useMemo(() => {
        return (todos as any).filter((todo: TTodo) => {
            return !todo.done
        }).length;
    }, [todos])

    React.useEffect(() => {
        document.title = 'Amount of undone todos: ' + unDoneTodoCount
        return () => {
            console.log('removed')
        }
    }, [unDoneTodoCount])

    const onNewTodo = (todo: TTodo) => {
        if (!(todo.title || todo.content)) {
            return
        }
        const newTodo = {
            ...todo,
            id: v4()
        }
        dispatch({
            type: ADD_TODO,
            payload: newTodo
        })
    }

    const toggleTodoDone = (todo:TTodo): void => {
        dispatch({
            type: EDIT_TODO,
            payload: {...todo, done: !todo.done}
        })
    }

    const renderTodo: React.FC<TTodo> = (todo) => {
        return <Todo
            id={todo.id}
            toggleDoneState={() => toggleTodoDone(todo)}
            key={todo.id}
            title={todo.title}
            content={todo.content}
            done={todo.done}
        />
    }
    return (
        <div>
            <NewTodo onSubmit={onNewTodo}/>
            <div className="todos">
                {
                    todos.map(renderTodo)
                }
            </div>
            <Button disabled={loading}  onClick={e => dispatch({type: e.shiftKey ? DECREMENT : INCREMENT, payload: e.ctrlKey ? 10 : 1})}>Dispatch
                increment {count}</Button>
            <br />
            <Button disabled={loading} onClick={() => {
                dispatch(fetchAsyncNumber())
            }}>Hit me </Button>

        </div>
    );
}

export default Todos;