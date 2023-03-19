import React from 'react';
import './Views.css';

class Views extends React.Component<{ views: number }, object> {
  constructor(props: { views: number }) {
    super(props);
  }
  render() {
    const views = this.props.views;
    return (
      <div className="view">
        <div className="view__icon"></div>
        <span>{views}</span>
      </div>
    );
  }
}

export default Views;
