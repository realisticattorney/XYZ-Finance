/* eslint-disable */
import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import stocksReducer from './reducer';

const middlewares = [thunk];
// export const rootReducer = combineReducers({ stocksReducer });
const store = createStore(stocksReducer, applyMiddleware(thunk));

export default store;