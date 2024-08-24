import { createEntitySlice } from '../helper/createEntitySlice';
import { API_ENDPOINTS } from '../Constants';

const nationnalitiesSlice = createEntitySlice({
  name: 'nationnalities',
  endpoint: API_ENDPOINTS.NATIONALITIES,
});

export const { getData} = nationnalitiesSlice;
export default nationnalitiesSlice.reducer;