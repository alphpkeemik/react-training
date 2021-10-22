import PropTypes from "prop-types";
import React from "react";
import "./Button.css";

const config = {
    getDefaultButtonText: () => 'Fill me!!!',
}

const Button = (props) => {
    const { children, disabled,} = props;
    console.log({ children });
    return (
        <button className="Button" disabled={disabled}>
            {children}
        </button>
    );
};

Button.propTypes = {
    disabled: PropTypes.bool
}

Button.defaultProps = {
    prefix: '+372'
}

export default Button;
