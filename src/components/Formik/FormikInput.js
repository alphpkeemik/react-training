import React from "react";
import Input from "../Input";


export default function FormikInput({
                                        formik, name, label, type
                                    }) {
    return (
        <Input
            label={label}
            name={name}
            type={type}
            value={formik.values[name]}
            error={formik.touched[name] && formik.errors[name]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
        />
    );
}
