export const LOAD_CONSULTATIONS = 'LOAD_CONSULTATIONS';
export const loadConsultations = consultations => ({
  type: LOAD_CONSULTATIONS,
  consultations,
});

export const CREATE_CONSULATION = 'CREATE_CONSULATION';
export const createConsultation = consultation => ({
  type: CREATE_CONSULATION,
  consultation,
});

export const UPDATE_CONSULTATION = 'UPDATE_CONSULTATION';
export const updateConsultation = consultation => ({
  type: UPDATE_CONSULTATION,
  consultation,
});

export const DELETE_CONSULTATION = 'DELETE_CONSULTATION';
export const deleteConsultation = id => ({
  type: DELETE_CONSULTATION,
  id,
});
