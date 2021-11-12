import React from "react";
import Button from "./Button";
import {useFormik} from 'formik';
import *  as Yup from "yup";
import FormikInput from "./Formik/FormikInput";

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


    const formik = useFormik({
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
            <form onSubmit={formik.handleSubmit}
                  autoComplete="off"
            >
                <FormikInput label="Username" name="username" type="text"
                             formik={formik}
                />
                <FormikInput label="Password" name="password" type="password"
                             formik={formik}
                />
                <FormikInput label="re-password" name="confirmPassword" type="password"
                             formik={formik}
                />
                <FormikInput label="-Email" name="email" type="email"
                             formik={formik}
                />

                <Button type="submit">Register</Button>
            </form>
        </div>
    );
};

export default RegistrationForm;

