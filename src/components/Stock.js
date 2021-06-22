/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import graph from '../assets/graph.png';
import { Link } from "react-router-dom";
function Stock({ stock, lol }) {
  const {
   symbol, price, exchange,
  } = stock;
  console.log(stock)
  console.log(lol)

  return (
    <div className="book">
      {/* <p className="category">{id}</p> */}
      <p className="title">{price}</p>
      <p className="author">{symbol}</p>
      <p className="category">{exchange}</p>
      {/* <img src={images[logo].default} alt={symbol} className="logos" /> */}
      <div className="rect">
        <div className="circle">
          {/* <img src={graph} alt="Logo" /> */}
        </div>
      </div>
      <div className="hr" />
      <div className="update">
        <p className="chapter">{lol}</p>
        <p className="intro">Introduction</p>
           <Link to={`/stock/${symbol}`}>
        <button type="button">Details</button>
        </Link>
      </div>
    </div>
  );
}

Stock.propTypes = {
  stock: PropTypes.shape({
    price: PropTypes.number.isRequired,
    exchange: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
  }).isRequired,
};
export default Stock;
