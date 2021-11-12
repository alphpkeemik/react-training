import React from "react";
import Button from "./Button";
import Input from "./Input";
import {useFormik} from 'formik';

const RegistrationForm = () => {


    const validate = (values) => {
        const errors = {}
        if (!values.username) {
            errors.username = 'Username is required';
        } else if (values.username.length < 3) {
            errors.username = 'Username must be at least 3 chars length';
        }
        return errors;
    }

    const formic = useFormik({
        initialValues: {
            username: "",
            password: "",
            confirmPassword: "",
            email: "",
        },
        validate,
        onSubmit: (e) => {
            console.log(e)
            console.log('submit')
        }
    })
    return (
        <div>
            <form onSubmit={formic.handleSubmit}
                  autoComplete="off"
                  aria-autocomplete="off"
            >
                <Input placeholder="Username" name="username" type="text"
                       value={formic.values.username}
                       error={formic.errors.username}
                       onChange={formic.handleChange}/>
                <Input placeholder="Password" name="password" type="password" value={formic.values.password}
                       onChange={formic.handleChange}/>
                <Input placeholder="re-password" name="confirmPassword" type="password"
                       value={formic.values.confirmPassword} onChange={formic.handleChange}/>
                <Input placeholder="-Email" name="email" type="email" value={formic.values.email}
                       onChange={formic.handleChange}/>

                <Button >Register</Button>
            </form>
        </div>
    );
};

export default RegistrationForm;

