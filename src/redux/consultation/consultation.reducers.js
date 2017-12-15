import _ from 'lodash';

const initialState = {
  rows: [],
  currentRow: {},
};

// https://github.com/localForage/localForage
export function consultation(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_ROW':
      return {
        ...state,
        rows: [...state.rows, ...action.rows]
      }
    case 'ADD_LINE':
      return {
        ...state,
        rows: [...state.rows, action.row]
      }
    case 'REMOVE_LINE':
      return {
        ...state,
        rows: state.rows.filter(row => row.id !== action.id)
      }
    case 'EDIT_LINE':
      return {
        ...state,
        currentRow: action.currentRow
      }
    case 'SAVE_LINE':
      return {
        ...state,
        currentRow: action.currentRow
      }
    default:
      return state;
  }
};
