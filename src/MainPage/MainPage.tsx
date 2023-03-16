import React from 'react';
import './MainPage.css';
import { Link } from 'react-router-dom';

class MainPage extends React.Component<object, object> {
  constructor(props: object) {
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

export default MainPage;
