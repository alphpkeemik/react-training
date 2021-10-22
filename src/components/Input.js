import React from 'react';
import styles from './Input.module.css';

const Input = ({ placeholder, value, onChange }) => {
    const [inputValue, setInputValue] = React.useState(value)
    const handleOnChange = (e) => {
        setInputValue(e.target.value)
        onChange(e.target.value)
    }
    return(
        <div className={styles.inputContainer}>
            <input
                className={styles.input}
                placeholder={placeholder.toUpperCase()}
                defaultValue={inputValue}
                onChange={handleOnChange}
            />
        </div>
    );
}

export default Input;
