import React from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import Form from "./components/Form";

function NewTodo({onSubmit}) {
    const  [formState, setFormState] = React.useState({
        title: "",
        content: "",
    })
    const handleFieldChange = (fieldName, value)  => {
        setFormState((prevState) => {
            return {
                ...prevState,
                [fieldName] : value
            }
        })
    }
    const handleSubmit = () => {
        console.log(formState)
        onSubmit?.(formState)
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}
                  footerContent={
                      <React.Fragment>
                          <Button>Save changes</Button>
                      </React.Fragment>
                  }
            >
                <Input onChange={e => handleFieldChange("title", e)} label="title" placeholder="title" value={formState.title} />
                <Input onChange={e => handleFieldChange("content", e)} label="content" placeholder="content" value={formState.content}/>
                <Button />
            </Form>
        </div>
    );
}

export default NewTodo;