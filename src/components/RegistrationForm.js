import React from "react";
import Button from "./Button";
import Input from "./Input";
import {useFormik} from 'formik';
import *  as Yup from "yup";

const RegistrationForm = () => {

    Yup.addMethod(Yup.string, 'sameAs', function (ref, message) {
        return this.test('sameAS', message, function (value) {
            const other = this.resolve(ref);
            return value === other;
        })
    })

    const RegistrationFormSchema = Yup.object({
        username: Yup.string()
            .min(3, "Username must be at least 3 chars length")
            .max(16, 'Username needs to ne 16 characters or less')
            .required(),
        password: Yup.string()
            .min(8, 'Password must be at least 3 chars length')
            .max(255, 'Password needs to ne 16 characters or less')
            .required('Password is required')
            .matches(/[0-9]/, "Mustr contain numbers")
            .matches(/[a-z]/, "Must contain lowercase")
            .matches(/[A-Z]/, "Must contain uppercase"),
        email: Yup.string().email().required(),
        confirmPassword: Yup.string()
            .sameAs(
                Yup.ref('password'),
                "Passwords need to match"
            )
    })


    const formic = useFormik({
        initialValues: {
            username: "",
            password: "",
            confirmPassword: "",
            email: "",
        },
        validationSchema: RegistrationFormSchema,
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

