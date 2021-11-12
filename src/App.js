import './App.css';
import React from 'react';
import Button from './components/Button';
import Form from './components/Form';
import Input from './components/Input';
import RegistrationForm from './components/RegistrationForm';
import RenderListSample from "./renderListSample";
import NewTodo from "./NewTodo";
import Todo from "./Todo";
import {v4} from "uuid";

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

    const unDoneTodoCount = React.useMemo(() => {
        return todos.filter(todo => {
            return !todo.done
        }).length;
    }, [todos])

    React.useEffect(() => {
        document.title = 'Amount of undone todos: ' + unDoneTodoCount
        return () => {
            console.log('removed')
        }
    }, [unDoneTodoCount])

    const onNewTodo = (todo) => {
        if (!(todo.title || todo.content)) {
            return
        }
        const newTodo = {
            ...todo,
            id: v4()
        }
        setTodos((prevState) => {
            return [...prevState, newTodo];
        })
    }

    const editTodo = (id, changes) => {
        setTodos((prevState) => {
            return prevState.map(todo => {
                if (id !== todo.id) {
                    return todo;
                }
                return {
                    ...todo,
                    ...changes,
                }
            });
        })
    }

    const toggleTodoDone = (id, done) => {
        editTodo(id, {done});
    }

    const renderTodo = ({id, title, content, done}) => {
        return <Todo
            toggleDoneState={() =>toggleTodoDone(id, !done)}
            key={id}
            title={title}
            content={content}
            done={done}
        />
    }
    return (
    <div className="App">
        <RegistrationForm />
        <hr />
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
