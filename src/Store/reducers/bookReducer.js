import { books } from '../../utils/books';
import { ADD_ITEM,
  SHOW_MODAL_FILTER,
  CHANGE_EDIT,
  CHANGE_ITEM,
  DELETE_ITEM,
  CHANGE_EL_ID,
  CHANGE_CHECKBOX } from '../types/types'
import { addNewItem,
  changeBook, 
  modalValue,
  removeItem } from '../../utils/booksUtils'

  const changeElEmpty = {
    title: '',
    author: '',
    friend: '',
    until: '',
  }

const initialState = {
  books,
  modal: 'modal',
  filter: 'filter',
  edit: false,
  changeElId: '',
  changeEl: [changeElEmpty],
  checkbox: false 
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const newList = addNewItem(action.newElement, state.books);
      return {
        ...state,
        books: newList,
        edit: false,
      };
    }
    case DELETE_ITEM: {
      const newList = removeItem(action.id, state.books);
      return {
        ...state,
        books: newList,
        edit: false,
      };
    }
    case CHANGE_CHECKBOX: {
      return {
        ...state,
        checkbox: !state.checkbox,
      };
    }
    case CHANGE_ITEM: {
      const newTodoList = changeBook(state.books, action.changeElement, action.id)
      return {
        ...state,
        books: newTodoList,
        edit: false,
      };
    }
    case CHANGE_EL_ID: {
      const currentEl = modalValue(state.books,action.id)
      return {
        ...state,
        changeElId: action.id,
        changeEl: currentEl
      };
    }
    case SHOW_MODAL_FILTER: {
      return {
        ...state,
        modal: action.modal,
        filter: action.filter,
        checkbox: false,
        changeEl: [changeElEmpty],
      };
    }
    case CHANGE_EDIT: {
      return {
        ...state,
        edit: action.bool,
      };
    }
    default:
      return state;
  }
};

export default reducer;
