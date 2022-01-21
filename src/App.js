import './App.css';
import React from 'react';
import Router from "./pages";
import Navbar from "./components/Navbar";
import config from "./config";
import {Amplify} from "aws-amplify";
Amplify.configure(config)
const App = () => {

    return (
        <div className="App">
            <Navbar/>
            <section className="content">
                <Router/>
            </section>
        </div>
    );
}

export default App;
