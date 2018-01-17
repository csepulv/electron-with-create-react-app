/* eslint-disable */
import { LOAD_FILTER, CREATE_FILTER } from './filter.actions';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FILTER: {
      const { filter } = action;

      if (!filter) {
        return state;
      }

      return {
        ...state,
        ...action.filter,
      };
    }

    case CREATE_FILTER: {
      const { filter } = action;
      return {
        ...state,
        filter,
      };
    }

    default:
      return state;
  }
};
