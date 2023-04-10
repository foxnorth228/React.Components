import React from 'react';
import './SearchBar.css';

function SearchBar({
  setSearchValue,
}: {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="searchBar">
      <div className="searchBar__icon"></div>
      <input
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
