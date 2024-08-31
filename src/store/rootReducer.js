import { combineReducers } from 'redux';


import genreReducer from './genresSlice';
import authorsReducer from './authorsSlice';
import booksReducer from './booksSlice';
import editorsReducer from './editorsSlice';
import nationnalitiesReducer from './nationnalitiesSlice';
import statusReducer from './statusSlice';
import languagesReducer from './languagesSlice';
import loansReducer from './loansSlice';



const rootReducer = combineReducers({
  books: booksReducer,
  authors: authorsReducer,
   genres : genreReducer,
   editors: editorsReducer,
   nationnalities : nationnalitiesReducer,
   status : statusReducer,
   languages: languagesReducer,
   loans: loansReducer,
});

export default rootReducer;