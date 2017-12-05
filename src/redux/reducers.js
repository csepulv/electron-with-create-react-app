import { combineReducers } from 'redux';

const initialState = {
  row: [
    { 'keys': 1, 'date': '12/12/2017', 'type': 'enfants', 'meansPayment': 'CB', 'payment': 50 },
    { 'keys': 2, 'date': '13/12/2017', 'type': 'enfants', 'meansPayment': 'Chèques', 'payment': 50 },
    { 'keys': 3, 'date': '14/12/2017', 'type': 'enfants', 'meansPayment': 'CB', 'payment': 40 }
  ]
};

function consultation(state = initialState, action) {
  switch (action.type) {
    case 'ADD_LINE':
      // return state + 1;
    case 'REMOVE_LINE':
      // return state - 1;
    case 'EDIT_LINE':
      // return state - 1;
    default:
      return state;
  }
}

export default combineReducers({consultation});
