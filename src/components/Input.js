import React from 'react';
import styles from './Input.module.css';

const Input = ({placeholder, value: inputValueFromParent, onChange}) => {
    const [inputValue, setInputValue] = React.useState(inputValueFromParent)
    React.useEffect(() => {
        if (inputValueFromParent !== inputValue) {
            setInputValue(inputValueFromParent)
        }
    }, [inputValueFromParent, inputValue]);
    const handleOnChange = (e) => {
        setInputValue(e.target.value)
        onChange(e.target.value)
    }
    return (
        <div className={styles.inputContainer}>
            <input
                className={styles.input}
                placeholder={placeholder.toUpperCase()}
                value={inputValue}
                onChange={handleOnChange}
            />
        </div>
    );
}

export default Input;
