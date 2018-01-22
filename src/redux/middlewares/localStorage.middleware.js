import localforage from 'localforage';
import {
  CREATE_CONSULATION,
  DELETE_CONSULTATION,
  UPDATE_CONSULTATION,
  LOAD_CONSULTATIONS,
} from '../consultation/consultation.actions';

import { LOAD_CHARGES, CREATE_CHARGE, DELETE_CHARGE, UPDATE_CHARGE } from '../charge/charge.actions';

import { CREATE_FILTER, LOAD_FILTER } from '../filter/filter.actions';

export const consultations = localforage.createInstance({
  name: 'consultations',
});

export const charges = localforage.createInstance({
  name: 'charges',
});

export const filter = localforage.createInstance({
  name: 'filterTable',
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

      filter.setItem('filterTable', getState().filter.filter);
      break;
    }
    case LOAD_FILTER: {
      filter.getItem('filterTable').then(value => {
        // eslint-disable-next-line
        action.filter = value;
        next(action);
      });

      break;
    }

    default:
      next(action);

      break;
  }
};
