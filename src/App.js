import './App.css';
import React from 'react';
import Button from './components/Button';


const App = () => {
  return (
    <div className="App">
      <Button prefix="+372">
          Click me!!!!
      </Button>

      <Button disabled>
        Dont click me, I wont do anything
      </Button>

      <div className='Button'>
        I should not render as a buttonm
      </div>
    </div>
  );
}

export default App;
