/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStocks } from '../actions/actions';
const StocksContainer = () => {
  const dispatch = useDispatch();
  const stocks = useSelector((state) => state);
  
  useEffect(() => {
    dispatch(fetchStocks());
  }, []);

  return (
    <div>
      {stocks.map(el => {
        return <h3>{el.data.symbol}</h3>;
      })}
    </div>
  );
};

export default StocksContainer;
