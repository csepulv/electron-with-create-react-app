import { LOAD_CONSULTATIONS, CREATE_CONSULATION, DELETE_CONSULTATION, UPDATE_CONSULTATION} from './consultation.actions';

const initialState = {
  consultations: {},
  lastId: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CONSULTATIONS:
      const { consultations } = action;

      if (!consultations) {
        return state;
      }

      const lastId = Object.keys(consultations).sort((a, b) => a - b).slice(-1);

      return { ...state, lastId, consultations: {...action.consultations} };

    case CREATE_CONSULATION: {
      const id = state.lastId + 1;
      const { consultation } = action;
      const consultations = { ...state.consultations };

      consultations[id] = {id, ...consultation}

      return { ...state, lastId: id, consultations};
    }

    case UPDATE_CONSULTATION: {
      const { consultation } = action;
      const consultations = { ...state.consultations };

      consultations[consultation.id] = consultation;

      return { ...state, consultations };
    }

    case DELETE_CONSULTATION: {
      const { id } = action;
      const consultations = { ...state.consultations };

      delete consultations[id];
    
      return { ...state, consultations };
    }

    default:
      return state;
  }
};