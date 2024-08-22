

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {  fetchEntityByParams } from '../api';


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
  
    
 
  

    
    export default authorsSlice.reducer;
    