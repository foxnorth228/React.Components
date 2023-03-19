import React from 'react';
import { cardInf } from '../dataCard';
import './Card.css';
import Likes from './LIkes/Likes';
import Views from './Views/Views';

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
            <Likes likes={likes} />
            <Views views={views} />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
