import CHANGE_FILTER from './actions';

const changeFilter = (category) => ({
  type: CHANGE_FILTER,
  payload: {
    category,
  },
});

export default changeFilter;
