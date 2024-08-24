import { createEntitySlice } from '../helper/createEntitySlice';
import { API_ENDPOINTS } from '../Constants';

const editorsSlice = createEntitySlice({
  name: 'editors',
  endpoint: API_ENDPOINTS.EDITORS,
});

export const { getData} = editorsSlice;
export default editorsSlice.reducer;