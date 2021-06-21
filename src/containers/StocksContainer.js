/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStocks } from '../actions/actions';
const StocksContainer = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchStocks());
  }, []);

  return (
    <div>
      {state.map((stock) => {
        return <h3 key={stock.price}>{stock.symbol}</h3>;
      })}
    </div>
  );
};

export default StocksContainer;
