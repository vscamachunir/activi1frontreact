import React from 'react';
import './Card.css'; // Estilo CSS utilizando BEM

const Card = ({ title, content, className }) => (
    <div className={`Card ${className}`}>
        <h3 className="Card__title">{title}</h3>
        <p className="Card__content">{content}</p>
    </div>
);

export default Card;
