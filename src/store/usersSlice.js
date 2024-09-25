import { createEntitySlice } from '../helper/createEntitySlice';
import { API_ENDPOINTS } from '../Constants';

const usersSlice = createEntitySlice({
  name: 'users',
  endpoint: API_ENDPOINTS.USERS,
});

export const { getData, deleteEntityThunk} = usersSlice;
export default usersSlice.reducer;