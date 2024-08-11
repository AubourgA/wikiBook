import { combineReducers } from 'redux';
import booksReducer from './bookSlice';


const rootReducer = combineReducers({
  books: booksReducer,

});

export default rootReducer;