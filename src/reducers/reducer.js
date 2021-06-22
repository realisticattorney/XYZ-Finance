/* eslint-disable */
const initialState = {
  stocks: [],
  loading: false,
  error: null,
};


export const selectedStocksReducer = (state = {}, action) => {
  console.log(state);
  switch (action.type) {
    case 'SELECTED_STOCKS':
      return { ...state, ...payload };
    case 'REMOVE_SELECTED_STOCKS':
      return {};
    default:
      return state;
  }
};


export const stocksReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case 'FETCH_STOCKS_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_STOCKS_SUCCESS':
      return {
        ...state,
        loading: false,
        stocks: action.payload,
      };
    case 'FETCH_STOCKS_FAILURE':
      return {
        ...state,
        loading: false,
        stocks: action.error,
      };
    default:
      return state;
  }
};
