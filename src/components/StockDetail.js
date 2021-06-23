/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';


const StockDetail = ({ selectedStock }) => {
   return (
      <div className="det"> 
      <div className="det-top"> 
         <p className="det-top-title"> { selectedStock.companyName }</p>
         <p className="det-top-subtitle">  { selectedStock.symbol }</p>
      </div>
      <div className="det-middle"> 
      <div className="det-left-side"> 
      <p className="det-price">  { selectedStock.price }</p>
      </div>
      <div className="det-right-side"> 
      <p> Industry: { selectedStock.industry }</p>
      <p> Country: { selectedStock.country }</p>
      <p> Sector: { selectedStock.sector }</p>
      </div>
      </div>
      </div>
   )
}
// beta: 0
// companyName: "Snowflake Inc."
// country: "US"
// exchange: "New York Stock Exchange"
// exchangeShortName: "NYSE"
// industry: "Software—Application"
// isActivelyTrading: true
// isEtf: false
// lastAnnualDividend: 0
// marketCap: 73814770000
// price: 249.29
// sector: "Technology"
// symbol: "SNOW"
// volume: 4153698
StockDetail.propTypes = {
   selectedStock: PropTypes.shape({
     symbol: PropTypes.string,
     price: PropTypes.number,
     companyName: PropTypes.string,
     industry: PropTypes.string,
   }),
 };
 
 StockDetail.defaultProps = {
   selectedStock: {},
 };

export default StockDetail
