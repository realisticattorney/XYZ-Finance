import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Stock from '../components/Stock';
import CategoryFilter from '../components/CategoryFilter';
import changeFilter from '../actions/index';

function StocksList({ stocks, filter, changeFilter }) {
  const filteredStocks = filter !== 'All' ? stocks.filter((stock) => stock.category === filter) : stocks;

  return (
    <>
      <nav className="header">
        <h1 className="book-app">XYZ Finance</h1>
        <p className="booklist-nav">STOCKS</p>
        <CategoryFilter
          handleFilterChange={(e) => changeFilter(e.target.value)}
        />
      </nav>
      <div>
        <div className="books-cms">
          {filteredStocks.map((stock) => (
            <Stock
              key={stock.id}
              stock={stock}
            />
          ))}
        </div>
      </div>
    </>
  );
}
const mapState = (state) => ({
  stocks: state.stocks,
  filter: state.filter,
});

const mapDispatch = {
  changeFilter,
};

StocksList.propTypes = {
  stocks: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(StocksList);
