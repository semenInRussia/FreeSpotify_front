import React from "react";
import "../assets/button.css";

const Button = ({children, onSubmit}) => (
    <button type="submit" className="button button-1" onSubmit={onSubmit} >
        {children}
    </button>
)

export default Button