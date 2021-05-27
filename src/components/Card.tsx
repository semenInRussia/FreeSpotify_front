import React from 'react';
import "../assets/card.css"

interface CardProps {
    children: React.ReactNode | React.ReactChildren,
    title: string
}

const Card: React.FC<CardProps> = (props) => (
    <div className="card">
        <h3>{props.title}</h3>

        <hr/>

        {props.children}
    </div>
);

export default Card;