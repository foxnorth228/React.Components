import React from 'react';
import { cardInf } from '../dataCard';
import './Card.css';

function Card({ obj, setDialog }: { obj: cardInf; setDialog: (name: string) => void }) {
  const { name } = obj;
  return (
    <div className="card">
      <h3
        className="card__name"
        onClick={() => {
          setDialog(name);
        }}
      >
        {name}
      </h3>
    </div>
  );
}

export default Card;
