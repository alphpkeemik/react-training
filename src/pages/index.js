import React, {lazy, Suspense} from "react";

import {Route, Routes} from "react-router-dom";

const TodosRoute = lazy(() => import(/* webpackChunkName: "Todos" */ './Totos'))
const RegisterRoute = lazy(() => import(/* webpackChunkName: "Register" */ './Register'))
const EditTodoRoute = lazy(() => import(/* webpackChunkName: "EditTodo" */'./EditTodo'))

function Router() {
    return (
        <Suspense fallback={'<span>Loading</span>'}>
            <Routes>
                <Route path="/" element={<TodosRoute/>}/>
                <Route path="/todos/:id" element={<EditTodoRoute/>}/>
                <Route path="/register" element={<RegisterRoute/>}/>
            </Routes>
        </Suspense>
    );
}

export default Router;