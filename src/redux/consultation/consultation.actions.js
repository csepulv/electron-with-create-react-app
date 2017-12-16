import * as types from './consultation.constants';
import uuidv1 from 'uuid/v1';
import {loadState} from '../localStorage';

export const addLine = currentRow  => {
  const id = uuidv1();
  return {
    type: types.ADD_LINE,
    row: {id, ...currentRow}
  };
};

export const removeLine = id => dispatch => {
  return dispatch({ type: types.REMOVE_LINE, id })
};
/*
export const saveLine = currentRow => dispatch => {
    return dispatch(({ type: types.SAVE_LINE, currentRow }))
};

*/

export const editLine = currentRow => ({type: types.EDIT_LINE, currentRow})

export const loadRows = dispatch => {
    return loadState().then(({ consultation: {rows} }) => {
      return dispatch({type: types.LOAD_ROW, rows});
    })
};
