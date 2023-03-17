import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const links = {
  Main: '/',
  About: '/about',
  404: '/404',
};

class Header extends React.Component<{ type: string }, object> {
  constructor(props: { type: string }) {
    super(props);
  }

  render() {
    const str = this.props.type;
    const pageName = str.charAt(0).toUpperCase() + str.slice(1) + 'Page';
    return (
      <header className="header">
        <h2>{pageName}</h2>
        <nav className="header__nav">
          {Object.entries(links).map((el, i) => (
            <Link key={i} className="header__link" to={el[1]}>
              {el[0]}
            </Link>
          ))}
        </nav>
      </header>
    );
  }
}

export default Header;
