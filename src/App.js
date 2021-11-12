import './App.css';
import React from 'react';
import Router from "./pages";
import Navbar from "./components/Navbar";
import TodoContext from "./contexts/TodoContext";

const App = () => {

    const [todos, setTodos] = React.useState([
       /* {
            id: 'default',
            title: 'some',
            content: '',
            done: false,
        }*/
    ])
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
    const getTodoById = id => todos.find(todo => todo.id === id);
    return (
        <div className="App">
            <Navbar/>
            <section className="content">
                <TodoContext.Provider value={{todos, setTodos, getTodoById, editTodo}}>
                    <Router/>
                    <pre>
                          {JSON.stringify(todos)}
                    </pre>
                </TodoContext.Provider>
            </section>
        </div>
    );
}

export default App;
