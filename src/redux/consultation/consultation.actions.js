import * as types from './consultation.constants';
import uuidv1 from 'uuid/v1';
import { consultation } from '../../storage';

export const addLine = dispatch => {
  const id = uuidv1();
  return consultation.setItem(id, {id}).then(() => {
    return dispatch({
      type: types.ADD_LINE,
      row: {id}
    });
  })
};
export const removeLine = id => dispatch => {
  return consultation.removeItem(id).then(() => {
    return dispatch({ type: types.REMOVE_LINE, id })
  });
};

export const saveLine = currentRow => dispatch =>{
  return consultation.setItem(currentRow.id, currentRow).then(() => {
    return dispatch(({ type: types.SAVE_LINE, currentRow }))
  });
};

export const editLine = currentRow => ({type: types.EDIT_LINE, currentRow})

export const loadRows = dispatch => {
  const rows = [];
  return consultation.iterate(row => {
    rows.push(row);
  }).then(() => {
    return dispatch({type: types.LOAD_ROW, rows});
  })
};
