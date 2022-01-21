import React from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import Form from "./components/Form";

interface IFormState {
    title: string;
    content: string;
}

interface NewTodoProps {
    obSubmit: (state: IFormState) => void
}


function NewTodo({onSubmit}:any) {
    const [formState, setFormState] = React.useState<IFormState>({
        title: "",
        content: "",
    })
    const handleFieldChange = (fieldName:string, value:string) => {
        setFormState((prevState) => {
            return {
                ...prevState,
                [fieldName]: value
            }
        })
    }
    const handleSubmit = (e: React.FormEvent): void => {
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
                <Input onChange={e => handleFieldChange("title", e.target.value)} label="title" name="title"  placeholder="title" value={formState.title} />
                <Input onChange={e => handleFieldChange("content", e.target.value)} label="content" name="content" placeholder="content" value={formState.content}/>
                <Button />
            </Form>
        </div>
    );
}

export default NewTodo;