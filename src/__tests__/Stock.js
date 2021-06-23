import React from 'react';
import renderer from 'react-test-renderer';
import Stock from '../components/Stock';

it('renders Stock component', () => {
  const stock = {
    symbol: 'AAPL',
    companyName: 'Apple Inc.',
  };
  const stockSnap = renderer.create(<Stock stock={stock} />);
  expect(stockSnap).toMatchSnapshot();
});
