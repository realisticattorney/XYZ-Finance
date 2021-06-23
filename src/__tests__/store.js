import '@testing-library/jest-dom';
import store from '../reducers/index';

describe('Store object', () => {
  it('validates redux store', () => {
    expect(store).toBeTruthy();
    expect(typeof store.dispatch).toBe('function');
  });
});
