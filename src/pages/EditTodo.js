import React from "react";
import {useParams, useNavigate} from "react-router-dom";
import Input from "../components/Input";
import Form from "../components/Form";
import Button from "../components/Button";

function EditTodo() {
    const {id} = useParams();
    const navigate = useNavigate();
    const {getTodoById, editTodo} = React.useContext([])
    const todo = React.useMemo(() => {
        return getTodoById(id)
    }, [getTodoById, id])

     React.useEffect(() => {
        if(!todo) {
            navigate('/')
        }
    }, [todo, navigate])

    const toggleTodoDone = () => {
        editTodo(id, {done: !todo.done});
    }
    const editField = (e) => {
        editTodo(id, {[e.target.name]: e.target.value});
    }

    return (
        <div>
            <Form
                  footerContent={
                      <React.Fragment>
                      </React.Fragment>
                  }
            >
                <Input label="title" onChange={editField} name="title" value={todo?.title} />
                <Input label="content" onChange={editField} name="content" value={todo?.content}/>
                <Button type="button" onClick={toggleTodoDone}>{
                    todo?.done? 'Mark undone': 'Mark done'
                }</Button>
            </Form>
        </div>
    );
}

export default EditTodo;