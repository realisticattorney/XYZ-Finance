/* eslint-disable import/no-cycle */
import { combineReducers } from 'redux';
import reducer from './stocks';
import filter from './filter';

const reducersCombined = combineReducers({ stocks: reducer, filter });

export default reducersCombined;
