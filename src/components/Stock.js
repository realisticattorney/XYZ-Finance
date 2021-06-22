/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import graph from '../assets/graph.png';
/* eslint-disable array-callback-return */
function Stock({ stock, lol }) {
  const {
   symbol, price, exchange,
  } = stock;
  console.log("LOOOOOOL")
  console.log(stock)
  console.log("LOOOOOOL")
  console.log(lol)
  // function importAll(r) {
  //   const images = {};
  //   r.keys().map((item) => {
  //     images[item.replace('./', '')] = r(item);
  //   });
  //   return images;
  // }

  // const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/));

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
        <Link to={`/product/${lol}`}>
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
    // logo: PropTypes.string.isRequired,
  }).isRequired,
};
export default Stock;
