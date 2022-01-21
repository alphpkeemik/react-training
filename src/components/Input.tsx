import classnames from "classnames";
import React from "react";

const styles = require("./Input.module.css");

interface InputProps {
    value: string | number;
    type?: React.HTMLInputTypeAttribute;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    error?: string;
    label: string;
    placeholder: string;
    name: string;
}

const Input: React.FC<InputProps> = (
    {
        value,
        type,
        onChange,
        onBlur,
        error,
        label,
        placeholder,
        name,
    }) => {
    return (
        <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor={name}>{label}</label>
            <input
                type={type}
                className={classnames(styles.input, {[styles.error]: !!error})}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                autoComplete="off"
            />
            {error && <span className={styles.errorMessage}>{error}</span>}
        </div>
    );
}
export default Input;