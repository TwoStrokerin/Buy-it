import React from 'react';

const Filter = ({ onFilter }) => {
  const categories = ['Category 1', 'Category 2', 'Category 3'];

  return (
    <div className="filter">
      <select onChange={(e) => onFilter(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
