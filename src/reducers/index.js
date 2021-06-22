/* eslint-disable */
import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { stocksReducer, selectedStocksReducer } from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [thunk];
export const rootReducer = combineReducers({ allStocks: stocksReducer, stock: selectedStocksReducer });
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store; 