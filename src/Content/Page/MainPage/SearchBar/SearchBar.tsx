import React from 'react';
import './SearchBar.css';

function SearchBar({
  value,
  setSearchValue,
}: {
  value: string;
  setSearchValue: (name: string) => void;
}) {
  return (
    <div className="searchBar">
      <div className="searchBar__icon"></div>
      <input
        defaultValue={value}
        type="text"
        placeholder="Search..."
        className="searchBar__text"
        onKeyDown={(event) => {
          event.stopPropagation();
          if (event.key === 'Enter') {
            setSearchValue(event.currentTarget.value);
          }
        }}
      />
    </div>
  );
}

export default SearchBar;
