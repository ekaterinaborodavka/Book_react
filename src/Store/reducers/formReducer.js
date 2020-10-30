import { UPDATE_FORM_BOOK,
  CLEAR_FORM,
  ADD_ITEM,
  SHOW_MODAL_FILTER } from '../types/types';

const initialState = {
  title: '',
  author: '',
  friend: '',
  until: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM_BOOK: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case CLEAR_FORM:
    case ADD_ITEM:
    case SHOW_MODAL_FILTER: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
};

export default reducer;
