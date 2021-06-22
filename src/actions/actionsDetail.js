/* eslint-disable */
import axios from 'axios';

export const fetchSelectedStockRequest = () => ({
   type: 'FETCH_SEL_STOCK_REQUEST',
 });
 
 export const fetchSelectedStockSuccess = selectedStock => ({
   type: 'FETCH_SEL_STOCK_SUCCESS',
   payload: selectedStock,
 });
 
 export const fetchSelectedStockFailure = error => ({
   type: 'FETCH_SEL_STOCK_FAILURE',
   payload: error,
 });
 



// eslint-disable-next-line func-names
export const fetchSelectedStock = symbol => function (dispatch) {
   dispatch(fetchSelectedStockRequest());
   axios
     .get(`https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=d289d0796e744a042b2b86117a54900a`, { mode: 'cors' })
     .then(response => {
       const { data } = response;
       dispatch(fetchSelectedStockSuccess(data[0]));
     })
     .catch(error => {
       dispatch(fetchSelectedStockFailure(error.message));
     });
 };