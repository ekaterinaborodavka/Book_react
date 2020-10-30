import { combineReducers } from 'redux';

import book from './bookReducer';
import form from './formReducer';

export default combineReducers({
  book,
  form,
});
