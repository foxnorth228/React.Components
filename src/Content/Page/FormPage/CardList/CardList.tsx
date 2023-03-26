import React from 'react';
import './CardList.css';
import Card from './Card/Card';
import ICard from './ICard';

class CardList extends React.Component<{ ref: React.RefObject<CardList> }, { cards: ICard[] }> {
  constructor(props: { ref: React.RefObject<CardList> }) {
    super(props);
    this.state = { cards: [] };
  }

  createCard(cardInfo: ICard) {
    this.setState({ cards: [...this.state.cards, cardInfo] });
  }

  render() {
    return (
      <div className="formCardList">
        {this.state.cards.map((card, i) => (
          <Card key={i} card={card} />
        ))}
      </div>
    );
  }
}

export default CardList;
