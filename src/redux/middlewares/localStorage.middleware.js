import localforage from 'localforage';
import {
  CREATE_CONSULATION,
  DELETE_CONSULTATION,
  UPDATE_CONSULTATION,
  LOAD_CONSULTATIONS,
} from '../consultation/consultation.actions';

export const consultations = localforage.createInstance({
  name: 'consultations',
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
    default:
      next(action);

      break;
  }
};
