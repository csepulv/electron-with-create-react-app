export const LOAD_FILTER = 'LOAD_FILTER';
export const loadFilterTable = filtering => ({
  type: LOAD_FILTER,
  filtering,
});

export const CREATE_FILTER = 'CREATE_FILTER';
export const createFilterTable = filtering => ({
  type: CREATE_FILTER,
  filtering,
});
