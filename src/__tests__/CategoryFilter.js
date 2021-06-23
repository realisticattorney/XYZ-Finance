import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import CategoryFilter from '../components/CategoryFilter';
import store from '../reducers/index';

describe('rendered CategoryFilter', () => {
  let renderedComponent;
  beforeEach(() => {
    renderedComponent = render(
      <Provider store={store}>
        <CategoryFilter />
      </Provider>,
    );
  });
  it('validates Application select option', () => {
    const { getByRole } = renderedComponent;
    const option = getByRole((role, element) => role === 'option' && element.textContent === 'Application');
    expect(option).toBeInTheDocument();
  });
});
