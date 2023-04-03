import React from 'react';
import './Views.css';

function Views({ views }: { views: number }) {
  return (
    <div className="view">
      <div className="view__icon"></div>
      <span>{views}</span>
    </div>
  );
}

export default Views;
