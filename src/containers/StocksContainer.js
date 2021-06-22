/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStocks } from '../actions/actions';
import Stock from '../components/Stock';
import CategoryFilter from '../components/CategoryFilter';

const StocksContainer = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.allStocks);
  useEffect(() => {
    dispatch(fetchStocks());
  }, []);


//   const filteredStocks = filter !== 'All' ? state.filter((stock) => stock.category === filter) : state;
  const renderStocks = () => {
     if(state.loading) {
        return <h1>Loading</h1>
     } 
     
     return state.stocks.map((stock) => {
      const id = Math.floor(Math.random() * 100000)
      return <Stock key={id} stock={stock} lol={id} />}
    )

  }

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
          { renderStocks()}
        </div>
      </div>
    </>
  );
};

export default StocksContainer;
