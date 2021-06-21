/* eslint-disable */
const initialState = [];

const stocksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_STOCKS':
        return action.payload;
  //     return {
  //       ...state,
  //       stocks: action.payload,
  //     };
  //   case 'FILTER':
  //     return {
  //       ...state,
  //       filter: action.filter,
  //     };
  //   case 'LOADING':
  //     return {
  //       ...state,
  //       loading: action.state,
  //     };
    default:
      return state ;
  }
}

export default stocksReducer;