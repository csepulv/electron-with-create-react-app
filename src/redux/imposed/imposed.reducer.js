/* eslint-disable */
import { LOAD_IMPOSED, CREATE_IMPOSED, CREATE_RESPONSABILITY } from './imposed.actions';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_IMPOSED: {
      const { imposed } = action;

      return {
        ...state,
        ...action.imposed,
      };
    }

    case CREATE_IMPOSED: {
      const { imposed } = action;

      return {
        ...state,
        fiscal: imposed,
      };
    }

    case CREATE_RESPONSABILITY: {
      const { responsability } = action;

      return {
        ...state,
        charge: responsability,
      };
    }

    default:
      return state;
  }
};
