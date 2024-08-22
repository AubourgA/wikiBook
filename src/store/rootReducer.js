import { combineReducers } from 'redux';
import booksReducer from './bookSlice';
import authorsReducer from './authorSlice';

import genreReducer from './genresSlice';







const rootReducer = combineReducers({
  books: booksReducer,
  authors: authorsReducer,
 genres : genreReducer
});

export default rootReducer;