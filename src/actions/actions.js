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

const STOCK_LIST_URL = `https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=10000000000&sector=Technology&dividendMoreThan=0&limit=20&apikey=d289d0796e744a042b2b86117a54900a`;
const STOCK_GAINERS = `https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=10000000000&sector=Technology&dividendMoreThan=0&limit=20&apikey=d289d0796e744a042b2b86117a54900a`;
const STOCK_LOSERS = `https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=10000000000&sector=Technology&dividendMoreThan=0&limit=20&apikey=d289d0796e744a042b2b86117a54900a`;

export const fetchStocks = (sectorURL) => (dispatch) => {
  let sector = '';
  if (sectorURL === 'Application') sector = 'industry=Software—Application&';
  if (sectorURL === 'Infrastructure')
    sector = 'industry=Software—Infrastructure&';

  dispatch(stocksRequest());
  Axios.get(
    `https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=10000000000&${sector}sector=Technology&limit=40&apikey=d289d0796e744a042b2b86117a54900a`,
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
