import React from 'react';
import { cardInf } from '../dataCard';
import './Card.css';

function Card({
  obj,
  setDialog,
}: {
  obj: cardInf;
  setDialog: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { name } = obj;
  return (
    <div className="card">
      <h3 className="card__name">{name}</h3>
    </div>
  );
}

export default Card;
