import React from 'react';
import CardList from './CardList/CardList';
import SearchBar from './SearchBar/SearchBar';

class Main extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <CardList />
      </div>
    );
  }
}

export default Main;
