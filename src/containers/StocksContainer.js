/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStocks } from '../actions/actions';
import Stock from '../components/Stock';
import CategoryFilter from '../components/CategoryFilter';

const StocksContainer = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchStocks());
  }, []);


//   const filteredStocks = filter !== 'All' ? state.filter((stock) => stock.category === filter) : state;


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
          {/* {state.map((stock) => (
            <Stock key={stock.symbol} stock={stock} />
          ))} */}
          {/* <ul className="users">
            {state.map((user) => {
              const { login, symbol, price } = user;
              return <li key={symbol}></li>;
            })}
          </ul> */}
        </div>
      </div>
    </>
  );
};

export default StocksContainer;
