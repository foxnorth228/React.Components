import React from 'react';
import Card from './Card/Card';
import { data } from './dataCard';
import './CardList.css';

function CardList() {
  return (
    <div className="cardList">
      {data.map((el) => (
        <Card key={el.id} obj={el} />
      ))}
    </div>
  );
}
export default CardList;
