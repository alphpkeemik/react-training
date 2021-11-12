import React from "react";

import {Route, Routes} from "react-router-dom";
import Todos from "./Totos";
import Register from "./Register";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Todos/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    );
}

export default Router;