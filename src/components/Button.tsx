import React from "react";
import classNames from "classnames";

const styles = require("./Button.module.css");

export enum ButtonVariant {
    Default = "default",
    Warning = "warning",
    Dismiss = "dismiss"
}

interface IButtonProps {
    value?: string | number;
    disabled?: boolean;
    type?: "button" | "submit";
    variant?: ButtonVariant;
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<IButtonProps> = (
    {
        children,
        value,
        disabled,
        variant = "default",
        onClick,
        type
    }
) => {

    return (
        <button onClick={onClick} className={classNames(
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
            {children || value}
        </button>
    );
};
/*
Button.propTypes = {
    disabled: PropTypes.bool,
    variant: PropTypes.oneOf(['confirm', 'dismiss'])
}

 */


export default Button;
