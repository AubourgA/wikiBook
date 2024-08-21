

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {  createAuthor, updateAuthor, fetchEntityByParams } from '../api';


const initialState = {
  datas: undefined,
  loading: false,
  error: null,
  pagination: {}
};

export const authorsSlice = createSlice({
    name: 'authors',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
      .addCase(getData.pending, (state) => {
        state.loading = true;
          state.error = null;
        })
        .addCase(getData.fulfilled, (state, action) => {
          state.datas = action.payload;
          state.loading = false;
          state.pagination = action.payload['hydra:view'];
        })
        .addCase(getData.rejected, (state, action) => {
          state.error = action.payload;
          state.loading = false;
        })
        .addCase(createAuthorThunk.fulfilled, (state, action) => {
          state.datas['hydra:member'].push(action.payload);
        })
        .addCase(updateAuthorThunk.fulfilled, (state, action) => {
          const index = state.datas['hydra:member'].findIndex(book => book.id === action.payload.id);
          if (index !== -1) {
            state.datas['hydra:member'][index] = action.payload;
          }
        })
    
  
      }
    });
    
  
    export const getData = createAsyncThunk(
      'authors/fetchAuthors',
      async ({ endpoint , search = "", entityType }, { rejectWithValue }) => {
        const url = `${endpoint}`
        try {
          
          const response = await fetchEntityByParams(url, search, entityType);
          return response; 
        } catch (err) {
          return rejectWithValue(err.response ? err.response.data : err.message); 
        }
      }
    );
  
    
  export const createAuthorThunk = createAsyncThunk(
    'authors/createBook',
    async (bookData, { rejectWithValue }) => {
      try {
        const response = await createAuthor(bookData);
        return response;
      } catch (err) {
        return rejectWithValue(err.response ? err.response.data : err.message);
      }
    }
  );
  
  export const updateAuthorThunk = createAsyncThunk(
    'authors/updateBook',
    async ({ id, bookData }, { rejectWithValue }) => {
      try {
        const response = await updateAuthor(id, bookData);
        return response;
      } catch (err) {
        return rejectWithValue(err.response ? err.response.data : err.message);
      }
    }
  );
  

    
    export default authorsSlice.reducer;
    