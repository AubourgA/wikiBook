
import { API_ENDPOINTS } from '../Constants';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchBooks, createBook, updateBook, deleteBook } from '../api';


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
      })
      .addCase(createBookThunk.fulfilled, (state, action) => {
        state.datas['hydra:member'].push(action.payload);
      })
      .addCase(updateBookThunk.fulfilled, (state, action) => {
        const index = state.datas['hydra:member'].findIndex(book => book.id === action.payload.id);
        if (index !== -1) {
          state.datas['hydra:member'][index] = action.payload;
        }
      })
      .addCase(deleteBookThunk.fulfilled, (state, action) => {
        state.datas['hydra:member'] = state.datas['hydra:member'].filter(book => book.id !== action.payload);
      })
      .addCase(deleteBookThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; 
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

  
export const createBookThunk = createAsyncThunk(
  'books/createBook',
  async (bookData, { rejectWithValue }) => {
    try {
      const response = await createBook(bookData);
      return response;
    } catch (err) {
      return rejectWithValue(err.response ? err.response.data : err.message);
    }
  }
);

export const updateBookThunk = createAsyncThunk(
  'books/updateBook',
  async ({ id, bookData }, { rejectWithValue }) => {
    try {
      const response = await updateBook(id, bookData);
      return response;
    } catch (err) {
      return rejectWithValue(err.response ? err.response.data : err.message);
    }
  }
);

export const deleteBookThunk = createAsyncThunk(
  'books/deleteBook',
  async (id, { rejectWithValue }) => {
    try {
      await deleteBook(id);
      return id;
    } catch (err) {
      return rejectWithValue(err.response ? err.response.data : err.message);
    }
  }
);
  
  export default booksSlice.reducer;
  