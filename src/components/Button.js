import PropTypes from "prop-types";
import React from "react";
import styles from "./Button.module.css";
import classNames from "classnames";

const Button = (props) => {
    const { children, disabled, variant, onClick, type } = props;

    return (
        <button onClick={onClick}  className={classNames(
            styles.button,
            {
                [styles.button]: true,
                [styles.disabled]: disabled,
                [styles.variantDismiss]: variant === 'dismiss'
            }
        )}
                disabled={disabled}
                type={type || 'submit'}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    disabled: PropTypes.bool,
    variant: PropTypes.oneOf(['confirm', 'dismiss'])
}


export default Button;
