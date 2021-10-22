import './App.css';
import React from 'react';
import Button from './components/Button';
import Form from './components/Form';

const App = () => {
    const handleDismiss = (e) => {e.preventDefault()}
    const handleSubmit = (data) => {
        console.log(data)
    }
  return (
    <div className="App">
      <Form
          onSubmit={handleSubmit}
        footerContent={
          <React.Fragment>
            <Button>Save changes</Button>
            <Button onClick={handleDismiss} variant='dismiss'>Discard</Button>
          </React.Fragment>
        }
      >
        <input />
      </Form>
    </div>
  );
}

export default App;
