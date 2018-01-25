import localforage from 'localforage';
import {
  CREATE_CONSULATION,
  DELETE_CONSULTATION,
  UPDATE_CONSULTATION,
  LOAD_CONSULTATIONS,
} from '../consultation/consultation.actions';

import { LOAD_CHARGES, CREATE_CHARGE, DELETE_CHARGE, UPDATE_CHARGE } from '../charge/charge.actions';

import { CREATE_FILTER, LOAD_FILTER } from '../filtering/filtering.actions';

export const consultations = localforage.createInstance({
  name: 'consultations',
});

export const charges = localforage.createInstance({
  name: 'charges',
});

export const filtering = localforage.createInstance({
  name: 'filtering',
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
    case CREATE_CHARGE:
    case DELETE_CHARGE:
    case UPDATE_CHARGE: {
      next(action);

      const { getState } = store;

      charges.setItem('charges', getState().charges.charges);
      break;
    }

    case LOAD_CHARGES: {
      charges.getItem('charges').then(value => {
        // eslint-disable-next-line
        action.charges = value;
        next(action);
      });

      break;
    }

    case CREATE_FILTER: {
      next(action);

      const { getState } = store;

      filtering.setItem('filtering', getState().filtering);
      break;
    }
    case LOAD_FILTER: {
      filtering.getItem('filtering').then(value => {
        // eslint-disable-next-line
        action.filtering = value;
        next(action);
      });

      break;
    }

    default:
      next(action);

      break;
  }
};
