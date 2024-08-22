import { createEntitySlice } from '../helper/createEntitySlice';
import { API_ENDPOINTS } from '../Constants';

const booksSlice = createEntitySlice({
  name: 'books',
  endpoint: API_ENDPOINTS.BOOKS,
});

export const { getData, deleteEntityThunk} = booksSlice;
export default booksSlice.reducer;