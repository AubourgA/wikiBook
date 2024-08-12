
import { API_ENDPOINTS } from '../Constants';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchBooks } from '../api';


const initialState = {
  datas: undefined,
  loading: false,
  error: null,
  pagination: {}
};


export const booksSlice = createSlice({
  name: 'books',
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
      });
    }
  });
  

  export const getData = createAsyncThunk(
    'books/fetchBooks',
    async ({ endpoint = `${API_ENDPOINTS.BOOKS}`, search = "" }, { rejectWithValue }) => {
      try {
        const response = await fetchBooks(endpoint, search);
      
        return response; 
      } catch (err) {
        return rejectWithValue(err.response ? err.response.data : err.message); 
      }
    }
  );
  export default booksSlice.reducer;
  