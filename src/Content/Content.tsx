import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';

class Content extends React.Component<{ type: string }, object> {
  constructor(props: { type: string }) {
    super(props);
  }

  render() {
    return (
      <>
        <header>
          <nav className="nav">
            <h1></h1>
            <Link to="/">Main</Link>
            <Link to="/about">About</Link>
            <Link to="/404">404</Link>
          </nav>
        </header>
        <div></div>
      </>
    );
  }
}

export default Content;
