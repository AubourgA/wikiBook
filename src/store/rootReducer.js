import { combineReducers } from 'redux';
import booksReducer from './bookSlice';
import authorsReducer from './authorSlice'

const rootReducer = combineReducers({
  books: booksReducer,
  authors: authorsReducer,

});

export default rootReducer;