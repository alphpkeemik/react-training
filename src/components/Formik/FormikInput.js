import React from "react";
import Input from "../Input";


export default function FormikInput({
                                        formik, name, label, type
                                    }) {
    const fieldProps = formik.getFieldProps(name)
    return (
        <Input
            label={label}
            type={type}
            value={formik.values[name]}
            error={formik.touched[name] && formik.errors[name]}
            {... fieldProps}
        />
    );
}
