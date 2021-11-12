import React from "react";

import {Route, Routes} from "react-router-dom";
import Todos from "./Totos";
import Register from "./Register";
import EditTodo from "./EditTodo";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Todos/>}/>
            <Route path="/todos/:id" element={<EditTodo/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    );
}

export default Router;