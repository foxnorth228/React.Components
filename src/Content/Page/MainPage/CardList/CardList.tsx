import React from 'react';
import Card from './Card/Card';
import { cardInf } from './dataCard';
import './CardList.css';

function CardList({
  data,
  setDialog,
}: {
  data: cardInf[];
  setDialog: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="cardList">
      {data.map((el) => (
        <Card key={el._id} obj={el} setDialog={setDialog} />
      ))}
    </div>
  );
}
export default CardList;
