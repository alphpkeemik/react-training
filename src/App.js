import './App.css';
import React from 'react';
import Button from './components/Button';
import Form from './components/Form';

const App = () => {
  return (
    <div className="App">
      <Form
        footerContent={
          <React.Fragment>
            <Button>Save changes</Button>
            <Button>Discard</Button>
          </React.Fragment>
        }
      >
        <input />
      </Form>
    </div>
  );
}

export default App;
