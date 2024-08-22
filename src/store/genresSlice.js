import { createEntitySlice } from '../helper/createEntitySlice';
import { API_ENDPOINTS } from '../Constants';

const genresSlice = createEntitySlice({
  name: 'genres',
  endpoint: API_ENDPOINTS.GENRES,
});

export const { getData} = genresSlice;
export default genresSlice.reducer;