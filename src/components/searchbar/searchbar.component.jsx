import React from 'react';
import './searchbar.styles.css';

export const SearchBar = ({ placeholder, handleSearch }) => (
  <input className="searchbar" type="search" placeholder={placeholder} onChange={handleSearch} />
);
