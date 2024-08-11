import { createSlice } from '@reduxjs/toolkit';
import { fetchBooks } from '../api';
const initialState = {
  datas: undefined,
  loading: false,
  error: false,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addData(state, action) {
      state.datas = action.payload
      state.loading= false
      state.error = false;
    },
    addLoader(state) {
        state.loading= true
        state.error = false;
      },
    addError(state) {
        state.error = true
        state.loading = false
    }

    // Ajoutez d'autres reducers pour gérer les actions de CRUD
  },
});

export function getData() {
    return async function(dispatch) {
            dispatch(addLoader())
            try {
                const resp =  await fetchBooks();
                dispatch(addData(resp))
            } catch( err) {
                dispatch(addError())
            }      
    }
}

export const { addData, addLoader, addError } = booksSlice.actions;

export default booksSlice.reducer;