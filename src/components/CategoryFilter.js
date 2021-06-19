import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ handleFilterChange }) => {
  const filter = [
    'All',
    'Crypto',
    'Forex',
    'NASDAQ',
    'Dow Jones',
  ];

  return (
    <select onChange={handleFilterChange} name="filter" className="filter-top">
      {filter.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};
CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
