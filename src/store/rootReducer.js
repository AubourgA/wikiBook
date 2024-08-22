import { combineReducers } from 'redux';
// import booksReducer from './bookSlice';
// import authorsReducer from './authorSlice';

import genreReducer from './genresSlice';
import authorsReducer from './authorsSlice';
import booksReducer from './booksSlice';





const rootReducer = combineReducers({
  books: booksReducer,
  authors: authorsReducer,
 genres : genreReducer
});

export default rootReducer;