import { combineReducers } from 'redux';
// import booksReducer from './bookSlice';
// import authorsReducer from './authorSlice';

import genreReducer from './genresSlice';
import authorsReducer from './authorsSlice';
import booksReducer from './booksSlice';
import editorsReducer from './editorsSlice';
import nationnalitiesReducer from './nationnalitiesSlice';




const rootReducer = combineReducers({
  books: booksReducer,
  authors: authorsReducer,
   genres : genreReducer,
   editors: editorsReducer,
   nationnalities : nationnalitiesReducer
});

export default rootReducer;