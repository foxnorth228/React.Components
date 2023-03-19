import React from 'react';
import './Header.css';
import Nav from './Nav/Nav';

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
        <Nav />
      </header>
    );
  }
}

export default Header;
