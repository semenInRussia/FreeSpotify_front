import React from 'react';
import "../assets/card.css"

const Card = ({children, title}) => (
    <div className="card">
        <h3>{title}</h3>
        <hr/>
        {children}
    </div>
);

export default Card;