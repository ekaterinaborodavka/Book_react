import { ADD_ITEM,
  SHOW_MODAL_FILTER,
  CHANGE_EDIT,
  CHANGE_ITEM,
  CHANGE_EL_ID,
  DELETE_ITEM,
  CHANGE_CHECKBOX} from '../types/types';

export const addItem = (newElement) => {
  return {
    type: ADD_ITEM,
    newElement,
  };
};

export const deleteItem= (id) => {
  return {
    type: DELETE_ITEM,
    id,
  };
};

export const changeCheckbox = () => {
  return {
    type: CHANGE_CHECKBOX,
  };
};

export const changeElId = (id) => {
  return {
    type: CHANGE_EL_ID,
    id,
  };
};

export const changeItem = (changeElement, id) => {
  return {
    type: CHANGE_ITEM,
    changeElement,
    id,
  };
};

export const showModalFilter= (classModal, classFilter) => {
  return {
    type: SHOW_MODAL_FILTER,
    modal: classModal,
    filter: classFilter,
  };
};

export const changeEdit= (bool) => {
  return {
    type: CHANGE_EDIT,
    bool,
  };
};
