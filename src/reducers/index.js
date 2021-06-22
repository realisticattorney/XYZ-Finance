/* eslint-disable */
import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { stocksReducer } from './reducer';
import selectedStockReducer  from './itemReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [thunk];
export const rootReducer = combineReducers({ allStocks: stocksReducer, selectedStock: selectedStockReducer });
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store; 