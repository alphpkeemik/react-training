import React, {ChangeEvent} from "react";
import {useNavigate, useParams} from "react-router-dom";
import Input from "../components/Input";
import Form from "../components/Form";
import Button from "../components/Button";
import {useDispatch, useSelector} from "react-redux";
import {TRootState} from "../store";
import {EDIT_TODO} from "../store/todos";

function EditTodo() {
    const {id} = useParams();
    const navigate = useNavigate();
    const todos = useSelector((state:TRootState) => state.todo.todos)
    const todo = React.useMemo(() => {
        return todos.find(todoInState => todoInState.id === id);
    }, [todos, id])
    const dispatch = useDispatch();
     React.useEffect(() => {
        if(!todo) {
            navigate('/')
        }
    }, [todo, navigate])

    const toggleTodoDone = () => {
        dispatch({
            type: EDIT_TODO,
            payload: {...todo, done: !todo.done}
        })
    }
    const editField = (e:ChangeEvent<HTMLInputElement>) => {
        //    editTodo(id, {[e.target.name]: e.target.value});
        dispatch({
            type: EDIT_TODO,
            payload: {...todo, ... {[e.target.name]: e.target.value}}
        })
    }

    return (
        <div>
            <Form onSubmit={editField}
                  footerContent={
                      <React.Fragment>
                      </React.Fragment>
                  }
            >
                <Input label="title" onChange={editField} name="title" placeholder="title" value={todo?.title} />
                <Input label="content" onChange={editField} name="content" placeholder="content" value={todo?.content}/>
                <Button type="button" onClick={toggleTodoDone}>{
                    todo?.done? 'Mark undone': 'Mark done'
                }</Button>
            </Form>
        </div>
    );
}

export default EditTodo;