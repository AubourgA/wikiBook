import { createEntitySlice } from '../helper/createEntitySlice';
import { API_ENDPOINTS } from '../Constants';

const languagesSlice = createEntitySlice({
  name: 'Languages',
  endpoint: API_ENDPOINTS.LANGUAGES,
});

export const { getData} = languagesSlice;
export default languagesSlice.reducer;