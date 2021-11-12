import './App.css';
import React from 'react';
import Router from "./pages";
import Navbar from "./components/Navbar";
import TodoContext from "./contexts/TodoContext";

const App = () => {

    const [todos, setTodos] = React.useState([])
    return (
        <div className="App">
            <Navbar/>
            <section className="content">
                <TodoContext.Provider value={{todos, setTodos}}>
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
