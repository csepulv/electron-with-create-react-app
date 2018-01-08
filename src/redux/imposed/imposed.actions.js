export const LOAD_IMPOSED = 'LOAD_IMPOSED';
export const loadImposed = imposed => ({
  type: LOAD_IMPOSED,
  imposed,
});

export const CREATE_IMPOSED = 'CREATE_IMPOSED';
export const createImposed = imposed => ({
  type: CREATE_IMPOSED,
  imposed,
});

export const CREATE_RESPONSABILITY = 'CREATE_RESPONSABILITY';
export const createResponsability = responsability => ({
  type: CREATE_RESPONSABILITY,
  responsability,
});
