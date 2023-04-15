import React, { forwardRef, useImperativeHandle, useState } from 'react';
import './CardList.css';
import Card from './Card/Card';
import ICard from './ICard';
import { addCard } from './formCards';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';

const CardList = forwardRef((_props, ref) => {
  const cards = useSelector((state: RootState) => state.formCards.value);
  const setCard = useDispatch();

  useImperativeHandle(ref, () => ({
    createCard(cardInfo: ICard) {
      setCard(addCard(cardInfo));
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
