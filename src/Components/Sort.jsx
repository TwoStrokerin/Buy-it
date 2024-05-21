import React from 'react';

const Sort = ({ onSort }) => {
  return (
    <div className="sort">
      <select onChange={(e) => onSort(e.target.value)}>
        <option value="">Sort by Price</option>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
    </div>
  );
};

export default Sort;
