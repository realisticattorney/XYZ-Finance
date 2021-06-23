import React from 'react';
import renderer from 'react-test-renderer';
import StockDetail from '../components/StockDetail';

it('renders StockDetail component', () => {
  const stock = {
    symbol: 'AAPL',
    companyName: 'Apple Inc.',
    country: 'US',
    industry: 'Consumer Electronics',
  };
  const StockDetailsSnap = renderer.create(<StockDetail selectedStock={stock} />);
  expect(StockDetailsSnap).toMatchSnapshot();
});
