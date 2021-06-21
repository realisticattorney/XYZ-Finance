/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import graph from '../assets/graph.png';
/* eslint-disable array-callback-return */
function Stock({ stock }) {
  const {
    logo, symbol, price, exchange,
  } = stock;

  function importAll(r) {
    const images = {};
    r.keys().map((item) => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
  }

  const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/));

  return (
    <div className="book">
      {/* <p className="category">{id}</p> */}
      <p className="title">{price}</p>
      <p className="author">{symbol}</p>
      <p className="category">{exchange}</p>
      <img src={images[logo].default} alt={symbol} className="logos" />
      <div className="rect">
        <div className="circle">
          <img src={graph} alt="Logo" />
        </div>
      </div>
      <div className="hr" />
      <div className="update">
        <p className="chapter">Current Chapter</p>
        <p className="intro">Introduction</p>
        <button type="button">Update Progress</button>
      </div>
    </div>
  );
}

Stock.propTypes = {
  stock: PropTypes.shape({
    price: PropTypes.string.isRequired,
    exchange: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
  }).isRequired,
};
export default Stock;
