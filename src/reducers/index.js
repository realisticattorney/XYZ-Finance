/* eslint-disable */
import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import stocksReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [thunk];
// export const rootReducer = combineReducers({ stocksReducer });
const store = createStore(stocksReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store; 