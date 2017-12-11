import * as types from './actions.constants';

export const addLine = () => ({
  type: types.ADD_LINE,
});
export const removeLine = () => ({ type: types.REMOVE_LINE });
export const editLine = () => ({ type: types.EDIT_LINE });

// https://blog.eleven-labs.com/fr/redux-structurez-vos-applications-front/
