import React from 'react';

const Search = ({ onSearch }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => onSearch(e.target.value.trim())}
      />
    </div>
  );
};

export default Search;
