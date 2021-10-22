import PropTypes from "prop-types";
import React from "react";
import styles from "./Button.module.css";
import classNames from "classnames";

const Button = (props) => {
    const { children, disabled } = props;

    return (
        <button className={classNames(
            styles.button,
            {
                [styles.disabled]: false
            }
        )} disabled={disabled}>
            {children}
        </button>
    );
};

Button.propTypes = {
    disabled: PropTypes.bool,
    variant: PropTypes.oneOf(['confirm', 'dismiss'])
}


export default Button;
