/* eslint-disable */
import { LOAD_IMPOSED, CREATE_IMPOSED } from './imposed.actions';

const initialState = {
  imposed: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_IMPOSED: {
      const { imposed } = action;

      return {
        ...state,
        imposed: { ...action.imposed },
      };
    }

    case CREATE_IMPOSED: {
      const { imposed } = action.imposed;
      console.log('####', action, '==>', action.imposed, '==>+', ...state);

      return {
        ...state,
        imposed,
      };
    }

    default:
      return state;
  }
};
