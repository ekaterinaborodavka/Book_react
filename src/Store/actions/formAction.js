import { UPDATE_FORM_BOOK,
    CLEAR_FORM } from '../types/types';

export const updateForm = (updatedForm) => {
    return {
      type: UPDATE_FORM_BOOK,
      payload: updatedForm,
    };
  };
  
  export const clearForm = () => {
    return {
      type: CLEAR_FORM,
    };
  };
  