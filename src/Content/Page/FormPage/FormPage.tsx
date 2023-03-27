import React, { useRef } from 'react';
import Form from './Form/Form';
import CardList from './CardList/CardList';
import './FormPage.css';
import ICard from './CardList/ICard';

export type IRefCardList = React.MutableRefObject<
  { createCard: (cardInfo: ICard) => void } | undefined
>;

function FormPage() {
  const refCardList = useRef<{ createCard: (cardInfo: ICard) => void }>();

  return (
    <div className="formPage">
      <Form refCardList={refCardList} />
      <CardList ref={refCardList} />
    </div>
  );
}

export default FormPage;
