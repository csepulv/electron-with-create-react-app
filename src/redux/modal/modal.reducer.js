import _ from 'lodash';

const initialState = {
  modalOpen: false,
};

export function modal(state = initialState, action) {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { modalOpen: true }
    case 'CLOSE_MODAL':
      return { modalOpen: false }
    default:
      return state;
  }
};
