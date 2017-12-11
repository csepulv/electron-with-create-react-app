import { combineReducers } from 'redux';
import _ from 'lodash';

const initialState = {
  lastId: 3,
  rowById: [1, 2, 3],
  row: {
    1: { 'keys': 1, 'date': '12/12/2017', 'type': 'enfants', 'meansPayment': 'CB', 'payment': 50 },
    2: { 'keys': 2, 'date': '13/12/2017', 'type': 'enfants', 'meansPayment': 'Chèques', 'payment': 50 },
    3: { 'keys': 3, 'date': '14/12/2017', 'type': 'enfants', 'meansPayment': 'CB', 'payment': 40 }
  }
};


// https://github.com/localForage/localForage
function consultation(state = initialState, action) {
  switch (action.type) {
    case 'ADD_LINE':

    const newLastId = state.lastId + 1;
    const newEmptyLine = { 'keys': newLastId, 'date': '', 'type': '', 'meansPayment': '', 'payment': '' };
    
    return {
      lastId: newLastId,
      rowById: [ ...state.rowById, newLastId],
      row: {
        ...state.row,
        [newLastId]: newEmptyLine
      }
    }

      // return state + 1;
      // return state.
    case 'REMOVE_LINE':
      // return state - 1;
    case 'EDIT_LINE':
      // return state - 1;
    default:
      return state;
  }
}

export default combineReducers({consultation});
