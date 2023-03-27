import React, { useState, useRef, useEffect } from 'react';
import './SearchBar.css';

function SearchBar() {
  const key = 'search-bar-key';
  const [text, setText] = useState(localStorage.getItem(key) ?? '');
  const refText = useRef<string>('');

  useEffect(() => {
    refText.current = text;
  }, [text]);

  useEffect(() => {
    return () => {
      localStorage.setItem(key, refText.current);
    };
  }, []);

  return (
    <div className="searchBar">
      <div className="searchBar__icon"></div>
      <input
        type="text"
        placeholder="Search..."
        className="searchBar__text"
        onChange={(event) => {
          setText(event.target.value);
        }}
        value={text}
      />
    </div>
  );
}

export default SearchBar;
