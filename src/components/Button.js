import PropTypes from "prop-types";
import React from "react";
import styles from "./Button.module.css";


const Button = (props) => {
    const { children, disabled, prefix } = props;

    if (prefix) {
        return (
            <button className={[styles.button, styles.buttonPrefix].join(' ')} disabled={disabled}>
                {prefix} {children}
            </button>
        );
    }

    return (
        <button className={styles.button} disabled={disabled}>
            {children}
        </button>
    );
};

Button.propTypes = {
    disabled: PropTypes.bool,
    prefix: PropTypes.string
}


export default Button;
