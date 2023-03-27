import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import pagesInfo from '../../../pagesInfo';

function Nav() {
  return (
    <nav className="nav">
      {pagesInfo.map((el, i) => (
        <Link key={i} className="header__link" to={el.link}>
          {el.name}
        </Link>
      ))}
    </nav>
  );
}

export default Nav;
