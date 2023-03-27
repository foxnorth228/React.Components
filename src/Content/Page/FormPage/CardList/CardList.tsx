import React, { forwardRef, useImperativeHandle, useState } from 'react';
import './CardList.css';
import Card from './Card/Card';
import ICard from './ICard';

const CardList = forwardRef((_props, ref) => {
  const [cards, setCard] = useState<ICard[]>([]);

  useImperativeHandle(ref, () => ({
    createCard(cardInfo: ICard) {
      setCard([...cards, cardInfo]);
    },
  }));

  return (
    <div className="formCardList">
      {cards.map((card, i) => (
        <Card key={i} card={card} />
      ))}
    </div>
  );
});

export default CardList;
