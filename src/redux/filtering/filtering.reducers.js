/* eslint-disable */
import { LOAD_FILTER, CREATE_FILTER } from './filtering.actions';

const initialState = {
  month: '0',
  year: '2018',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FILTER: {
      const { filtering } = action;

      if (!filtering) {
        return state;
      }

      return {
        ...state,
        ...filtering,
      };
    }

    case CREATE_FILTER: {
      const { filtering } = action;
      return {
        ...state,
        ...filtering,
      };
    }

    default:
      return state;
  }
};
