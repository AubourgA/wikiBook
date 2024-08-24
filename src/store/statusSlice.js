import { createEntitySlice } from '../helper/createEntitySlice';
import { API_ENDPOINTS } from '../Constants';

const statusSlice = createEntitySlice({
  name: 'status',
  endpoint: API_ENDPOINTS.STATUS,
});

export const { getData} = statusSlice;
export default statusSlice.reducer;