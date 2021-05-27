import React from "react";
import "../assets/button.css";

interface ButtonProps {
    children: React.ReactNode | React.ReactChildren,
    onSubmit?: () => void
}

const Button: React.FC<ButtonProps> = (buttonProps) => (
    <button type="submit" className="button button-1" onSubmit={buttonProps.onSubmit}>
        {buttonProps.children}
    </button>
)

export default Button