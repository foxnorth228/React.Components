import React from 'react';
import './Header.css';
import Nav from './Nav/Nav';

function Header({ type }: { type: string }) {
  const pageName = type.charAt(0).toUpperCase() + type.slice(1) + 'Page';
  return (
    <header className="header">
      <h2>{pageName}</h2>
      <Nav />
    </header>
  );
}

export default Header;
