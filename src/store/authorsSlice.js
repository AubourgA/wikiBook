import { createEntitySlice } from '../helper/createEntitySlice';
import { API_ENDPOINTS } from '../Constants';

const authorsSlice = createEntitySlice({
  name: 'authors',
  endpoint: API_ENDPOINTS.AUTHORS,
});

export const { getData, deleteEntityThunk} = authorsSlice;
export default authorsSlice.reducer;