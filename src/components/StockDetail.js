/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';


const StockDetail = ({ selectedStock }) => {
   return (
      <div> { selectedStock.symbol }
          { selectedStock.symbol }
          { selectedStock.symbol }


      </div>
   )
}

StockDetail.propTypes = {
   selectedStock: PropTypes.shape({
     symbol: PropTypes.string,
     price: PropTypes.number,
     changes: PropTypes.number,
     companyName: PropTypes.string,
     industry: PropTypes.string,
     website: PropTypes.string,
     description: PropTypes.string,
     image: PropTypes.string,
   }),
 };
 
 StockDetail.defaultProps = {
   selectedStock: {},
 };

export default StockDetail
