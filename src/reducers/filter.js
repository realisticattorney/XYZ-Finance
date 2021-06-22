import CHANGE_FILTER from '../actions/actions';

export const filterReducer = (state = 'All', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.payload.category;
    default:
      return state;
  }
};

export default filterReducer;
