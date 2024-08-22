import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchEntityByParams, deleteEntity } from '../api';

// Helper function to create a generic slice
export function createEntitySlice({ name, endpoint }) {
  const initialState = {
    datas: undefined,
    loading: false,
    error: null,
    pagination: {},
  };

  const getData = createAsyncThunk(
    `${name}/fetchData`,
    async ({ search = "", entityType }, { rejectWithValue }) => {
      try {
        const response = await fetchEntityByParams(endpoint, search, entityType);
        return response;
      } catch (err) {
        return rejectWithValue(err.response ? err.response.data : err.message);
      }
    }
  );

  const deleteEntityThunk = createAsyncThunk(
    `${name}/deleteEntity`,
    async (id, { rejectWithValue }) => {
      try {
        await deleteEntity(id, endpoint);
        return id;
      } catch (err) {
        return rejectWithValue(err.response ? err.response.data : err.message);
      }
    }
  );

  const entitySlice = createSlice({
    name,
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
        .addCase(deleteEntityThunk.fulfilled, (state, action) => {
          state.datas['hydra:member'] = state.datas['hydra:member'].filter(
            (item) => item.id !== action.payload
          );
        })
        .addCase(deleteEntityThunk.rejected, (state, action) => {
          state.error = action.payload;
          state.loading = false;
        });
    },
  });

  return {
    reducer: entitySlice.reducer,
    getData,
    deleteEntityThunk,
  };
}