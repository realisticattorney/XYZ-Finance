/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { fetchStocks } from '../actions/actions';
import Stock from '../components/Stock';
import PropTypes from 'prop-types';
import CategoryFilter from '../components/CategoryFilter';

const StocksContainer = ({ allStocks, fetchStocks }) => {
  const sector = useSelector((state) => state.sectorURL);

  useEffect(() => {
    fetchStocks(sector);
  }, [sector]);

  //   const filteredStocks = filter !== 'All' ? state.filter((stock) => stock.category === filter) : state;
  const renderStocks = () => {
    if (allStocks.loading) {
      return <h1>Loading</h1>;
    }

    return allStocks.stocks.map((stock) => {
      const id = Math.floor(Math.random() * 100000);
      return <Stock key={id} stock={stock} lol={id} />;
    });
  };

  const changeFilter = (e) => {
    console.log(e);
  };

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
        <div className="books-cms">{renderStocks()}</div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  allStocks: state.allStocks,
});

const mapDispatchToProps = (dispatch) => ({
  fetchStocks: (sector) => dispatch(fetchStocks(sector)),
});

StocksContainer.propTypes = {
  allStocks: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    stocks: PropTypes.instanceOf(Array).isRequired,
    error: PropTypes.string,
  }),
  fetchStocks: PropTypes.func.isRequired,
};

StocksContainer.defaultProps = {
  allStocks: {
    stocks: [],
    loading: false,
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(StocksContainer);
