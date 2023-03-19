import React from 'react';
import './Likes.css';

class Likes extends React.Component<{ likes: number }, object> {
  constructor(props: { likes: number }) {
    super(props);
  }
  render() {
    const likes = this.props.likes;
    return (
      <div className="like">
        <div className="like__icon"></div>
        <span>{likes}</span>
      </div>
    );
  }
}

export default Likes;
