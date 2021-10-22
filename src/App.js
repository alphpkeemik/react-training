import './App.css';
import React from 'react';
import Button from './components/Button';


const App = () => {
  return (
    <div className="App">
      <Button disabled={'this is a string instead'}>
          Click me!!!!
      </Button>
    </div>
  );
}

export default App;
