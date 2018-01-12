export const LOAD_FILTER = 'LOAD_FILTER';
export const loadFilterTable = filter => ({
  type: LOAD_FILTER,
  filter,
});

export const CREATE_FILTER = 'CREATE_FILTER';
export const createFilterTable = filter => ({
  type: CREATE_FILTER,
  filter,
});

export const UPDATE_FILTER = 'UPDATE_FILTER';
export const updateFilterTable = filter => ({
  type: UPDATE_FILTER,
  filter,
});
