import React from 'react';
import styles from './Input.module.css';

const Input = ({placeholder, value, onChange}) => {

    const handleOnChange = (e) => {
        onChange(e.target.value)
    }
    return (
        <div className={styles.inputContainer}>
            <input
                className={styles.input}
                placeholder={placeholder.toUpperCase()}
                value={value}
                onChange={handleOnChange}
            />
        </div>
    );
}

export default Input;
