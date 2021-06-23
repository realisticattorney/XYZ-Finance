import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../reducers/index';
import App from '../components/App';

describe('rendered Main', () => {
  let renderedComponent;
  beforeEach(() => {
    renderedComponent = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  });
  it('has a div with class header', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('.header');
    expect(appElement).toBeInTheDocument();
  });
  it('has title within a tag with class of book-app', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('.book-app');
    expect(appElement).toBeInTheDocument();
  });
  it('the previous element has XYZ Finance as text', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('.book-app');
    expect(appElement).toHaveTextContent('XYZ Finance');
  });
  it('no element with non-existent class', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('.non-existent');
    expect(appElement).not.toBeInTheDocument();
  });
});
