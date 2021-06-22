/* eslint-disable */
import Axios from 'axios';

export const stocksRequest = () => ({
  type: 'FETCH_STOCKS_REQUEST',
});

export const stockSuccess = (stocks) => ({
  type: 'FETCH_STOCKS_SUCCESS',
  payload: stocks,
});
export const stocksFailure = (error) => ({
  type: 'FETCH_STOCKS_FAILURE',
  payload: error,
});

// export const stockFilter = (filter) => ({
//   type: 'FILTER',
//   filter,
// });

export const fetchStocks = () => (dispatch) => {
  dispatch(stocksRequest());
  Axios.get(
    'https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=10000000000&sector=Technology&dividendMoreThan=0&limit=20&apikey=d289d0796e744a042b2b86117a54900a',
    { mode: 'cors' }
  )
    .then((response) => {
      const { data } = response;
      console.log(data);
      dispatch(stockSuccess(data));
    })
    .catch((error) => {
      dispatch(stocksFailure(error.message));
    });
};
