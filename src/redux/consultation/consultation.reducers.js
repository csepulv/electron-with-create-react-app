import _ from 'lodash';
/* eslint-disable */
import {
  LOAD_CONSULTATIONS,
  CREATE_CONSULATION,
  DELETE_CONSULTATION,
  UPDATE_CONSULTATION,
} from './consultation.actions';

const initialState = {
  consultations: {},
  lastId: 0,
  benefit: {
    overall: 0,
    taxableBenefit: 0,
  },
};

export const sum = (accumulator, currentValue) => accumulator + _.parseInt(currentValue);

const getOverallBenefit = consultations => {
  // bénéfice global
  const getBenefit = _.map(consultations, 'payment');

  return getBenefit.reduce(sum, 0);
};

const getTaxableBenefit = consultations => {
  // bénéfice imposable
  const filterTaxableBenefit = _.filter(consultations, { meansPayment: 'Cheque' });
  const getTaxableBenefit = _.map(filterTaxableBenefit, 'payment');

  return getTaxableBenefit.reduce(sum, 0);
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CONSULTATIONS: {
      const { consultations } = action;

      if (!consultations) {
        return state;
      }

      const lastId = Object.keys(consultations)
        .sort((a, b) => a - b)
        .slice(-1);

      return {
        ...state,
        lastId,
        consultations: { ...action.consultations },
        benefit: {
          overall: getOverallBenefit(action.consultations),
          taxableBenefit: getTaxableBenefit(action.consultations),
        },
      };
    }
    case CREATE_CONSULATION: {
      const id = state.lastId + 1;
      const { consultation } = action;
      const consultations = { ...state.consultations };

      consultations[id] = { id, ...consultation };

      return {
        ...state,
        lastId: id,
        consultations,
        benefit: {
          overall: getOverallBenefit(consultations),
          taxableBenefit: getTaxableBenefit(consultations),
        },
      };
    }

    case UPDATE_CONSULTATION: {
      const { consultation } = action;
      const consultations = { ...state.consultations };

      consultations[consultation.id] = consultation;

      return {
        ...state,
        consultations,
        benefit: {
          overall: getOverallBenefit(consultations),
          taxableBenefit: getTaxableBenefit(consultations),
        },
      };
    }

    case DELETE_CONSULTATION: {
      const { id } = action;
      const consultations = { ...state.consultations };

      delete consultations[id];

      return {
        ...state,
        consultations,
        benefit: {
          overall: getOverallBenefit(consultations),
          taxableBenefit: getTaxableBenefit(consultations),
        },
      };
    }

    default:
      return state;
  }
};
