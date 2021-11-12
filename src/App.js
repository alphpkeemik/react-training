import './App.css';
import React from 'react';
import Button from './components/Button';
import Form from './components/Form';
import Input from './components/Input';
import RenderListSample from "./renderListSample";
import NewTodo from "./NewTodo";
import Todo from "./Todo";

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


    const [todos, setTodos] = React.useState([])
    const onNewTodo = (todo) => {
        setTodos((prevState) => {
            return [...prevState, todo];
        })
    }

    const renderTodo = ({title, content, done}) => {
        return <Todo title={title} content={content} done={done}/>
    }
    return (
    <div className="App">
        <NewTodo onSubmit={onNewTodo} />
        <div className="todos">
            {
                todos.map(renderTodo)
            }
        </div>
        <pre>
              {JSON.stringify(todos)}
          </pre>
        <hr />
        <RenderListSample />
        <hr />
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
