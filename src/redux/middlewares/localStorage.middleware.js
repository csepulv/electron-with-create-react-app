import localforage from 'localforage';
import {
  CREATE_CONSULATION,
  DELETE_CONSULTATION,
  UPDATE_CONSULTATION,
  LOAD_CONSULTATIONS,
} from '../consultation/consultation.actions';

import { CREATE_IMPOSED, LOAD_IMPOSED } from '../imposed/imposed.actions';

export const consultations = localforage.createInstance({
  name: 'consultations',
});

export const imposed = localforage.createInstance({
  name: 'imposed',
});

export default store => next => action => {
  switch (action.type) {
    case CREATE_CONSULATION:
    case DELETE_CONSULTATION:
    case UPDATE_CONSULTATION: {
      next(action);

      const { getState } = store;

      consultations.setItem('consultations', getState().consultation.consultations);
      break;
    }
    case LOAD_CONSULTATIONS: {
      consultations.getItem('consultations').then(value => {
        // eslint-disable-next-line
        action.consultations = value;
        next(action);
      });

      break;
    }
    case CREATE_IMPOSED: {
      next(action);

      const { getState } = store;

      consultations.setItem('imposed', getState().imposed);
      break;
    }
    case LOAD_IMPOSED: {
      imposed.getItem('imposed').then(value => {
        // eslint-disable-next-line
        action.imposed = value;
        next(action);
      });

      break;
    }

    default:
      next(action);

      break;
  }
};
