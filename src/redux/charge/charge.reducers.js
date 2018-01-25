/* eslint-disable */
import { LOAD_CHARGES, CREATE_CHARGE, DELETE_CHARGE, UPDATE_CHARGE } from './charge.actions';

const initialState = {
  charges: {},
  lastId: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CHARGES: {
      const { charges } = action;

      if (!charges) {
        return state;
      }

      const lastId = parseInt(
        Object.keys(charges)
          .sort((a, b) => a - b)
          .slice(-1),
        10,
      );

      return {
        ...state,
        lastId,
        charges: { ...action.charges },
      };
    }
    case CREATE_CHARGE: {
      const id = state.lastId + 1;
      const { charge } = action;
      const charges = { ...state.charges };

      charges[id] = { id, ...charge };

      return {
        ...state,
        lastId: id,
        charges,
      };
    }

    case UPDATE_CHARGE: {
      const { charge } = action;
      const charges = { ...state.charges };

      charges[charge.id] = charge;

      return {
        ...state,
        charges,
      };
    }

    case DELETE_CHARGE: {
      const { id } = action;
      const charges = { ...state.charges };

      delete charges[id];

      return {
        ...state,
        charges,
      };
    }

    default:
      return state;
  }
};
