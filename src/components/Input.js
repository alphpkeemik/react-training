import classnames from "classnames";
import React from "react";

const styles = require("./Input.module.css");

export default function Input({
                                  value,
                                  type,
                                  onChange,
                                  onBlur,
                                  error,
                                  label,
                                  placeholder,
                                  name,
                              }) {
    return (
        <div className={styles.inputContainer}>
            <div className={styles.label}>{label}</div>
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
