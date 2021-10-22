import './App.css';
import React from 'react';
import Button from './components/Button';
import Form from './components/Form';
import Input from './components/Input';

const defaultSignupFormState = {
    username: 'initial',
    password: '',
    email: '',
}

const App = () => {
    const handleDismiss = (e) => {
        setSignupFormData(defaultSignupFormState)
    }
    const handleSubmit = (data) => {
        console.log(signupFormData)
    }
    const setFormFieldUpdate = (field, newValue) => {
        setSignupFormData((prevState) => {
            return {
                ...prevState,
                [field] : newValue
            }
        })
    }

    const handleFormFieldUpdate = (field) => (value) => setFormFieldUpdate(field, value);

    const [signupFormData, setSignupFormData] = React.useState(defaultSignupFormState)
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
        <Input
         placeholder='Email'
         onChange={handleFormFieldUpdate('email')}
         value={signupFormData.email}
        />
        <Input
         placeholder='Username'
         onChange={handleFormFieldUpdate('username')}
         value={signupFormData.username}
        />
          <pre>
              {JSON.stringify(signupFormData)}
          </pre>
      </Form>

    </div>
  );
}

export default App;
