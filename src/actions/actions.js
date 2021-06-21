/* eslint-disable */
import Axios from 'axios';
// const CHANGE_FILTER = 'CHANGE_FILTER';

// export default CHANGE_FILTER;

// export const SUCCESS = 'SUCCESS';

export const stockSuccess = (stocks) => ({
  type: 'FETCH_STOCKS',
  payload: stocks,
});

// export const stockFilter = (filter) => ({
//   type: 'FILTER',
//   filter,
// });
// export const stockLoading = (state) => ({
//   type: 'LOADING',
//   state,
// });

export const fetchStocks = () => (dispatch) => {
  // const response = await Axios.get(
  //   'https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=10000000000&sector=Technology&dividendMoreThan=0&limit=20&apikey=d289d0796e744a042b2b86117a54900a'
  // )
  // const { data } = response;
  // dispatch(stockSuccess);
  // console.log(data);

  Axios.get(
      'https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=10000000000&sector=Technology&dividendMoreThan=0&limit=20&apikey=d289d0796e744a042b2b86117a54900a',
      { mode: 'cors' }
    )
    .then((response) => {
      const { data } = response;
      console.log(data)
      dispatch(stockSuccess(data));
    });
};
