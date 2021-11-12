import './App.css';
import React from 'react';
import Router from "./pages";
import Navbar from "./components/Navbar";

const App = () => {


    return (
    <div className="App">
        <Navbar />
        <section className="content">
            <Router/>
        </section>
    </div>
  );
}

export default App;
