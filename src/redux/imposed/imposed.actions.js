export const LOAD_IMPOSED = 'LOAD_IMPOSED';
export const loadImposed = imposeds => ({
  type: LOAD_IMPOSED,
  imposeds,
});

export const CREATE_IMPOSED = 'CREATE_IMPOSED';
export const createImposed = imposed => {
  console.log('###actions', imposed);

  return {
    type: CREATE_IMPOSED,
    imposed,
  };
};
