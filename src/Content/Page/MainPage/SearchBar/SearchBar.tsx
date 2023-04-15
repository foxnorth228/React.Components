import React, { Dispatch } from 'react';
import './SearchBar.css';
import { AnyAction } from '@reduxjs/toolkit';
import { changeValue } from '../searchValue';

function SearchBar({
  value,
  setSearchValue,
}: {
  value: string;
  setSearchValue: Dispatch<AnyAction>;
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
            setSearchValue(changeValue(event.currentTarget.value));
          }
        }}
      />
    </div>
  );
}

export default SearchBar;
