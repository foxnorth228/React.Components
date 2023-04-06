import React from 'react';
import Card from './Card/Card';
import { cardInf } from './dataCard';
import './CardList.css';

function CardList({ data }: { data: cardInf[] }) {
  return (
    <div className="cardList">
      {data.map((el) => (
        <Card key={el._id} obj={el} />
      ))}
    </div>
  );
}
export default CardList;
