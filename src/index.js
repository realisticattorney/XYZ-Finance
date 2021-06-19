/* eslint-disable import/no-cycle */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducersCombined from './reducers/index';

const initialStore = {
  stocks: [
    {
      id: Math.floor(Math.random() * 100),
      title: 'Bitcoin',
      category: 'Crypto',
      symbol: 'BTC/USD',
      logo: 'Bitcoin.svg',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'Ethereum',
      category: 'Crypto',
      symbol: 'ETH/USD',
      logo: 'Ethereum.svg',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'United States Dollar',
      category: 'Forex',
      symbol: 'USD',
      logo: 'usd.svg',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'Euro',
      category: 'Forex',
      symbol: 'EUR/USD',
      logo: 'eur.svg',
    },
  ],
};

const store = createStore(reducersCombined, initialStore);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

export default store;
