import React from "react";
import Button from "./Button";
import Input from "./Input";
import {useFormik} from 'formik';
const emailRegularExpression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const RegistrationForm = () => {


    const validate = (values) => {
        const errors = {}
        if (!values.username) {
            errors.username = 'Username is required';
        } else if (values.username.length < 3) {
            errors.username = 'Username must be at least 3 chars length';
        } else if (values.username.length > 16) {
            errors.username = 'Username needs to ne 16 characters or less';
        }

        if (!values.password) {
            errors.password = 'Password is required';
        } else if (!(
            /[0-9]/.test(values.password)
            &&
            /[a-z]/.test(values.password)
            &&
            /[A-X]/.test(values.password)
        )) {
            errors.password = 'Password must contains numbers, uppercase and lowercase letters';
        } else if (values.password.length < 8) {
            errors.password = 'Password must be at least 3 chars length';
        } else if (values.username.length > 100) {
            errors.username = 'Password needs to ne 100 characters or less';
        }
        if (values.confirmPassword !== values.password) {
            errors.confirmPassword = 'Passwords need to match';
        }
        if (!emailRegularExpression.test(values.email)) {
            errors.email = 'Email not valid';
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
            >
                <Input placeholder="Username" name="username" type="text"
                       value={formic.values.username}
                       error={formic.touched.username && formic.errors.username}
                       onChange={formic.handleChange}
                       onBlur={formic.handleBlur}
                />
                <Input placeholder="Password" name="password" type="password" value={formic.values.password}
                       error={formic.touched.password && formic.errors.password}
                       onChange={formic.handleChange}
                       onBlur={formic.handleBlur}
                />
                <Input placeholder="re-password" name="confirmPassword" type="password"
                       error={formic.touched.confirmPassword && formic.errors.confirmPassword}
                       value={formic.values.confirmPassword}
                       onChange={formic.handleChange}
                       onBlur={formic.handleBlur}
                />
                <Input placeholder="-Email" name="email" type="email" value={formic.values.email}
                       error={formic.touched.email && formic.errors.email}
                       onChange={formic.handleChange}
                       onBlur={formic.handleBlur}
                />

                <Button type="submit">Register</Button>
            </form>
        </div>
    );
};

export default RegistrationForm;

