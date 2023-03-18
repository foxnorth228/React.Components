import React from 'react';
import { cardInf } from '../dataCard';
import './Card.css';

class Card extends React.Component<{ obj: cardInf }, object> {
  constructor(props: { obj: cardInf }) {
    super(props);
  }

  render() {
    const { name, author, tags, description, likes, views } = this.props.obj;
    return (
      <div className="card">
        <h3 className="card__name">{name}</h3>
        <div className="card__info">
          <p className="card__author">{'by ' + author}</p>
          <p className="card__desc">{description}</p>
          <div className="card__contentInf">
            <p className="card__tags">{tags.join(', ')}</p>
            <div className="like">
              <div className="like__icon"></div>
              <span>{likes}</span>
            </div>
            <div className="view">
              <div className="view__icon"></div>
              <span>{views}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
