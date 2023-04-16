import React, { forwardRef, useImperativeHandle } from 'react';
import './CardList.css';
import Card from './Card/Card';
import ICard from './ICard';
import { useFormCards } from './formCards';

const CardList = forwardRef((_props, ref) => {
  const [cards, setCard] = useFormCards();

  useImperativeHandle(ref, () => ({
    createCard(cardInfo: ICard) {
      setCard(cardInfo);
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
