import { API_ENDPOINTS } from '../Constants';
import { createEntitySlice } from '../helper/createEntitySlice';

const loansSlice = createEntitySlice( {
    name: 'loans',
    endpoint: API_ENDPOINTS.LOANS,
});

export const {getData} = loansSlice;
export default loansSlice.reducer