import React from 'react';
import './Likes.css';

function Likes({ likes }: { likes: number }) {
  return (
    <div className="like">
      <div className="like__icon"></div>
      <span>{likes}</span>
    </div>
  );
}

export default Likes;
