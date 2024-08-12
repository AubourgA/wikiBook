import { createSlice } from '@reduxjs/toolkit';
import { fetchBooks } from '../api';
import { buildQueryParams, getSearchParams } from '../utils/QueryBuilder';
import { API_ENDPOINTS } from '../Constants';

const initialState = {
  datas: undefined,
  loading: false,
  error: false,
  pagination: {}
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addData(state, action) {
      state.datas = action.payload
      state.loading= false
      state.error = false;
      state.pagination = action.payload['hydra:view']
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

export function getData(url= `${API_ENDPOINTS.BOOKS}`, search="") {
    return async function(dispatch) {
            dispatch(addLoader())
            let fullURL = url;
            console.log(fullURL)
            try {
                  if(search) {

                    const params = buildQueryParams( getSearchParams(search))
                    fullURL = `${url}?${params}`
                  }
                console.log(fullURL)
                const resp =  await fetchBooks(fullURL);
                dispatch(addData(resp))
            } catch( err) {
                dispatch(addError())
            }      
    }
}

export const { addData, addLoader, addError } = booksSlice.actions;

export default booksSlice.reducer;