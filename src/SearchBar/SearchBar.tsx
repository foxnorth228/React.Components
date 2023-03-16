import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component<object, { text: string }> {
  static key = 'search-bar-key';

  constructor(props: object) {
    super(props);
    const str = localStorage.getItem(SearchBar.key) ?? '';
    this.state = { text: str };
  }

  render() {
    return (
      <div className="searchBar">
        <div className="searchBar__icon"></div>
        <input
          type="text"
          placeholder="Search..."
          className="searchBar__text"
          onChange={(event) => {
            this.setState({ text: event.target.value });
          }}
          value={this.state.text}
        />
      </div>
    );
  }

  componentWillUnmount() {
    localStorage.setItem(SearchBar.key, this.state.text);
  }
}

export default SearchBar;
