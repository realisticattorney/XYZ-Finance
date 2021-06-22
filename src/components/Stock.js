/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
/* eslint-disable array-callback-return */
function Stock({ stock, lol }) {
  const {
   symbol, price, companyName,
  } = stock;
  console.log(stock)
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
           <Link to={`/stock/${symbol}`}>
    <div className="book">
    <div className="left-side">
      {/* <p className="category">{id}</p> */}
      <p className="category">{companyName}</p>
      <p className="author">{symbol}</p>
      {/* <img src={images[logo].default} alt={symbol} className="logos" /> */}
      </div>
        <div className="right-side">
      <p className="title">{price}</p>
        </div>
      </div>
        </Link>
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
