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


export const fetchStocks = (sectorURL) => function (dispatch) {
  let sector = 'https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=10000000000&sector=Technology&limit=40&apikey=8dba008a494731618b1b459542cd6ff9';
  if (sectorURL === 'Application') sector = 'https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=10000000000&industry=Software—Application&sector=Technology&limit=40&apikey=8dba008a494731618b1b459542cd6ff9';
  if (sectorURL === 'Infrastructure')
    sector = 'https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=10000000000&industry=Software—Infrastructure&sector=Technology&limit=40&apikey=8dba008a494731618b1b459542cd6ff9';

  dispatch(stocksRequest());
  Axios.get(
    sector,
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
