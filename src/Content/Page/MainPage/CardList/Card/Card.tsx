import React from 'react';
import { cardInf } from '../dataCard';
import './Card.css';

function Card({ obj }: { obj: cardInf }) {
  const { name } = obj;
  return (
    <div className="card">
      <h3 className="card__name">{name}</h3>
    </div>
  );
}

export default Card;
